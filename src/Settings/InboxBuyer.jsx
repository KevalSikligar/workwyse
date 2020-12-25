import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import SideNav from "../SideNav/SideNav";
import DropBox from "../DropBox/DropBox";
import {
  postMessage,
  getMessageBuyerProjectId,
  getBuyerRequests
} from "../Services/Message";
import moment from 'moment';
import { Form, Input, Button, notification } from 'antd';
import Loader from "../Loader/Loader";
import { getAllBuyersProject } from "../Services/BuyerService";
import { postSellerProjectDetails } from "../Services/SellerService";
import { connect } from "react-redux";
import { bytesToSize, getUserDetail } from "../const";
import { getProjectByProjectId } from "../Services/PostAProjectService";
import { get } from "lodash";
import { NavLink } from "react-router-dom";
import { getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
import swal from "sweetalert";
class InboxBuyer extends Component {

  formRef = React.createRef();
  state = {
    messages: null,
    loading: false,
    getAllProjects: [],
    getAllSellers: [],
    requests: [],
    projectTitle: '',
    storeProjectId: '',
    userRole: '',
    receiverId: '',
    storeId: '',
    lengthCheck: false,
    isNewProject: false,
    approved: false,
    newMsg: false,
    projectDetail: null,
    customerId: getUserDetail('stripeCustomerId'),
    showOverLay: false
  }

  componentDidMount() {
    this.setState({ userRole: getUserDetail('roles'), loading: true }, () => {
      Promise.all([getBuyerRequests(), getAllBuyersProject(getUserDetail('companyId'))]).then((values) => {
        var state = {};
        if (values[0].status === 200) {
          state.requests = values[0].data
        }
        if (values[1].status === 200) {
          state.getAllProjects = values[1].data
          state.loading = false
        } else {
          notification.open({ message: 'Error', description: 'There was an error while fetching your requests!' })
        }
        this.setState({ ...state }, () => {
          if (this.props.match.params.projectId && this.props.match.params.sellerId) {
            this.getMessages();
          }
        });
      });

    });

  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId || this.props.match.params.sellerId !== nextProps.match.params.sellerId) {
      this.getMessages();
    }
  }

  sendBuyerRequest(id, projectId, projectName, paid, callback = false) {
    let priceId = ''
    let productPrice = ''
    if (this.state.customerId === 'null' || this.state.customerId === '' || this.state.customerId === null) {
      notification.open({
        message: 'No card found',
        description: 'Please enter your billing details first!'
      })
      localStorage.setItem('priceId', priceId);
      this.props.history.push(`/billing?redirect=inbox/${this.props.match.params.projectId}`)
    } else {
      if (id === 1) {
        priceId = 'price_1HZHd9ED9o2d394hmZtkvNMC';
        productPrice = '£25'
      } else if (id === 2) {
        priceId = 'price_1HZHcoED9o2d394hpOLR25RF';
        productPrice = '£20'
      } else if (id === 3) {
        priceId = 'price_1HZHcWED9o2d394hh4yIlN97';
        productPrice = '£10'
      } else if (id === 4) {
        priceId = 'price_1HZHcAED9o2d394hL2uGuJkT';
        productPrice = '£15'
      }
      localStorage.setItem('priceId', priceId);
      const data = {
        projectId: projectId,
        projectName: projectName,
        companyId: getUserDetail('companyId'),
        companyName: getUserDetail('companyName'),
        premium: true,
        requestType: 2,
        leadStatus: paid === true ? 2 : 1,
        stripeSubscriptionPriceId: priceId
      }
      this.chargeCustomer(data, productPrice, callback);
    }
  }

  chargeCustomer(data, productPrice, callback = false) {
    swal({
      title: `You will be charged ${productPrice} for this lead.`,
      text: "Do you confirm?",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true,
    }).then((chargeYes) => {
      if (chargeYes) {
        postSellerProjectDetails(data).then(res => {
          if (res.status === 200) {
            notification.open({
              message: 'Success',
              description: `An amount of ${productPrice} been deducted from you account and buyer is notified!`
            });
            callback(true)
            // this.props.history.push(`/inbox/${this.state.projectId}`);
          } else if (res.response.status === 400) {
            callback(true)
          }
        }).catch(err => {
          notification.open({
            message: 'Error',
            description: 'There was an error while inbox buyer building type!'
          });
          callback(false)
        })
      }
    });
  }

  getMessages = () => {
    this.setState({ loading: true }, () => {
      Promise.all([
        getMessageBuyerProjectId(getUserDetail('companyId'), this.props.match.params.projectId),
        getProjectByProjectId(this.props.match.params.projectId),
      ]).then((values) => {
        var state = {}
        if (values[0] && values[0].data && values[0].data && values[0].data.messages && Object.keys(values[0].data.messages).length > 0) {
          var temp = values[0].data.messages[this.props.match.params.sellerId] && values[0].data.messages[this.props.match.params.sellerId][0] ? values[0].data.messages[this.props.match.params.sellerId][0] : {}
          if (Object.keys(temp).length > 0) {
            var _conversations = {
              messageId: 0,
              text: temp.text,
              receiverId: temp.receiverId,
              senderId: temp.senderId,
              deliveryTime: temp.deliveryTime,
              attachment: temp.attachment,
              isRead: temp.isRead,
              isSent: temp.isSent,
              messageType: temp.messageType,
              id: temp.id,
              createdDate: temp.createdDate,
              modifiedDate: temp.modifiedDate,
              createdBy: temp.createdBy,
              modifiedBy: temp.modifiedBy,
            }
            var messages = [_conversations, ...temp.conversations]
            temp.conversations = messages;
            var data = {
              getAllProjects: get(values[0], 'data'),
              messages: temp,
            }
            state = {
              getAllProjects: get(values[0], 'data'),
              messages: temp,
            }
          } else {
            this.props.history.push(`/buyer-inbox`)
          }
        } else {
          state.messages = []
        }
        state.projectDetail = values[1].data;
        const { requests } = this.state
        if (this.props.match.params.projectId) {
          var reqStatus = requests.find(data => data.projectId == parseInt(this.props.match.params.projectId))
          state.requestStatus = reqStatus.requestStatus
        }
        this.setState({ ...state, loading: false }, () => {
          var d = document.querySelector(".middle-section")
          d.scrollTop = d.scrollHeight;
          // this.getLatestMessages()
        })
      });
    })
  }

  getLatestMessages = () => {
    setInterval(() => {
      getMessageBuyerProjectId(getUserDetail('companyId'), this.props.match.params.projectId).then(res => {
        if (res && res.data && res.data.messages && Object.keys(res.data.messages).length > 0) {
          var temp = res.data.messages[this.props.match.params.sellerId] && res.data.messages[this.props.match.params.sellerId][0] ? res.data.messages[this.props.match.params.sellerId][0] : {}
          if (Object.keys(temp).length > 0) {
            var _conversations = {
              messageId: 0,
              text: temp.text,
              receiverId: temp.receiverId,
              senderId: temp.senderId,
              deliveryTime: temp.deliveryTime,
              attachment: temp.attachment,
              isRead: temp.isRead,
              isSent: temp.isSent,
              messageType: temp.messageType,
              id: temp.id,
              createdDate: temp.createdDate,
              modifiedDate: temp.modifiedDate,
              createdBy: temp.createdBy,
              modifiedBy: temp.modifiedBy,
            }
            var messages = [_conversations, ...temp.conversations]
            temp.conversations = messages;
            this.setState({ messages: temp, loading: false }, () => {
              if (this.state.newMsg) {
                var d = document.querySelector(".middle-section")
                d.scrollTop = d.scrollHeight;
                this.setState({ newMsg: false })
              }
            });
          } else {
            this.props.history.push(`/buyer-inbox`)
          }
        } else {
          this.setState({ loading: false })
        }
      }).catch(() => { })
    }, 2000);
  }


  sendMessage = () => {
    var links = []
    this.props.uploadLink && this.props.uploadLink.map((link, index) => {
      links.push({
        ...link,
        id: 0,
        messageId: this.state.messages.id || 0,
      })
    })
    const data = {
      id: this.state.messages.id || 0,
      projectId: this.props.match.params.projectId,
      senderId: parseInt(getUserDetail('companyId')),
      receiverId: this.props.match.params.sellerId,
      deliveryTime: new Date(),
      attachments: links,
      messageType: this.state.userRole === 'Buyer' ? 1 : 2,
    }

    if (this.formRef.current.getFieldValue('text')) {
      data.text = this.formRef.current.getFieldValue('text')
    }
    postMessage(data).then(res => {
      this.props.dispatch(getAllCompanyDetails('uploadLink', ''));
      this.formRef.current.setFieldsValue({ text: '' });
      this.setState({ newMsg: true }, () => {
        this.getLatestMessages();
      })
    }).catch(() => {
      this.formRef.current.setFieldsValue({ text: '' });
    });
  }

  renderAttachment = (attachment, preview = true) => {
    var link = attachment.link
    if (link) {
      var ext = link.split(/[#?]/)[0].split('.').pop().trim();
      if ((/(gif|jpe?g|tiff?|png|PNG|webp|bmp)$/i).test(ext)) {
        return <><div className={`selectedimgs message_document img`} style={{ backgroundImage: `url(${link})` }} />
          {preview && <span className="w-100">{moment(attachment.createdDate).format('HH:mm')}</span>}
        </>
      } else {
        return <>
          <div className={`selectedimgs message_document`} title={link}>
            <div className="attach_name">{attachment.name}</div>
            <div className="attach_doc_name">{bytesToSize(attachment.bytes)}</div>
            {preview && <div className="att_download_button">Download</div>}
          </div>
          {preview && <span className="w-100">{moment(attachment.createdDate).format('HH:mm')}</span>}
        </>
      }
    }
  }

  showRequestStatus = (requestStatus) => {
    var msg = ""
    if (!requestStatus && this.props.match.params.projectId) {
      msg = "Waiting For the Seller To Accept Your Project Request"
    } else if (requestStatus === 2) {
      msg = "The Seller Has Rejected To Work On This Project"
    }
    return msg && <div className="message_sec_space">
      <h2>{msg}</h2>
    </div>
  }

  showOverChat() {
    this.setState({ showOverLay: !this.state.showOverLay });
  }

  render() {

    const pathList = [{ to: "/inbox", title: "Inbox" }];
    const { messages, requests, projectDetail, requestStatus } = this.state
    const { TextArea } = Input;

    return (

      <div className="">
        {/* {this.state.loading ? <Loader /> : <> */}
        <BreadCrumbs title="Inbox" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <SideNav />
            </div>
            <div className="col-xl-9 col-lg-9 sptb">
              <div className="custom-card custom_chat_boxdata">
                <div className="row">
                  <div className={this.state.showOverLay ? "col-lg-4 side_panel_chat side_panel_active" : "col-lg-4 side_panel_chat"}>
                    <button className="side_dashbord_chat" onClick={() => this.showOverChat()}><i class="fa fa-comments-o" aria-hidden="true"></i></button>
                    <div className="over_overlay" onClick={() => this.showOverChat()}></div>
                    <div className="side_panel_title card-header">
                      <h3 className="card-title">Your Requests</h3>
                    </div>
                    <ul>
                      {requests && requests.length > 0 && requests.map((request, index) =>
                        <NavLink to={`/buyer-inbox/${request.projectId}/${request.companyId}`} className="dropdown-item">
                          <h6 className="user_sub_name">{request.projectName}</h6>
                          <p className="date_label_name">{request.companyName} <span>{moment(request.createdDate).fromNow()}</span></p>
                        </NavLink>
                      )}
                    </ul>
                  </div>
                  <div className={requests && requests.length > 0 ? "col-lg-8" : "col-12"}>
                    {this.state.loading ? <Loader /> :
                      <>
                        <div className="card">

                          {this.showRequestStatus(requestStatus)}

                          {projectDetail && <div className="card-body message_sec">
                            <div className="card-header card-gauge-section col-12 col-md-12 bg-background3 border-radius-4 text-white">
                              <h4 className="text-capitalize text-white z-index-10 m-0">{get(projectDetail, "title", "")} </h4>
                            </div>
                          </div>}

                          <div className={getUserDetail('roles') === 'Seller' ? "middle-section message_section" : "middle-section message_section  message_section_left"}>
                            <>
                              {messages && messages.conversations && messages.conversations.length > 0 &&
                                <ul id="your_div">
                                  <li>
                                    <div className="content w-100">
                                      {messages.conversations && messages.conversations.map(onlyText => (
                                        <>
                                          {onlyText.text && <div className={`message ${onlyText.messageType === 2 ? `left` : `right`}`}>
                                            <div>
                                              <div className="bubble">
                                                <p dangerouslySetInnerHTML={{ __html: onlyText.text }}></p>
                                              </div>
                                              <span>{moment(onlyText.createdDate).format('HH:mm')}</span>
                                            </div>
                                          </div>
                                          }
                                          <div className={`message ${onlyText.messageType === 2 ? `left` : `right`}`}>
                                            {onlyText.attachments && onlyText.attachments.length > 0 && onlyText.attachments.map((file, index) => {
                                              return this.renderAttachment(file)
                                            })}
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                  </li>
                                </ul>
                              }
                            </>

                            {!this.props.match.params.projectId &&
                              <div className="message_sec_space">
                                <span><i className="fa fa-paper-plane-o" aria-hidden="true"></i></span>
                                <h2>Your Messages</h2>
                              </div>}

                          </div>

                          {projectDetail && (requestStatus !== 2 && requestStatus !== null) && <div className="message-section">
                            <div className="bottom">
                              {this.props.uploadLink && this.props.uploadLink.length > 0 &&
                                <div className="">
                                  {this.props.uploadLink.map(link =>
                                    <div className="">
                                      {this.renderAttachment(link, false)}
                                    </div>
                                  )}
                                </div>
                              }
                              <Form className="position-relative" ref={this.formRef}>
                                <Form.Item name="text">
                                  <TextArea onPressEnter={(e) => this.sendMessage({ text: e.target.value })} rows={2}
                                    className="form-control" placeholder="Type your message here..." allowClear />
                                </Form.Item>
                                <ul className="message-option">
                                  <li className="d-box-icon">
                                    <DropBox disbleTextBox={true}>
                                      <button className="send-message mr-2"><i className="fa fa-dropbox" aria-hidden="true"  ></i></button>
                                    </DropBox>
                                  </li>
                                  <li>
                                    <Button type="primary" onClick={this.sendMessage} className="send-message border-0">
                                      <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                    </Button>
                                  </li>
                                </ul>
                              </Form>
                            </div>
                          </div>}
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </>} */}
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    uploadLink: state.signup.uploadLink
  };
};

export default connect(mapStateToProps)(InboxBuyer);