import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import SideNav from "../SideNav/SideNav";
import DropBox from "../DropBox/DropBox";
import {
  postMessage,
  getMessageSellerProjectId,
  getProjectStatus,
  acceptRejectProjectRequest,
  getSellerRequests
} from "../Services/Message";
import moment from 'moment';
import { Form, Input, Button, notification, Alert, Skeleton, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Loader from "../Loader/Loader";
import { sellerLeadHierarchy } from "../Services/SellerService";
import { connect } from "react-redux";
import { getUserDetail, bytesToSize } from "../const";
import { getProjectByProjectId, getProjectDetailsWithBuyerCredentials } from "../Services/PostAProjectService";
import { get } from "lodash";
import { NavLink } from "react-router-dom";
import { getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
class Inbox extends Component {

  formRef = React.createRef();
  messagesEnd = null
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
    intervalId: null,
    showOverLay: false
  }

  componentDidMount() {
    if (getUserDetail('roles') === 'Buyer') {
      this.props.history.push('/buyer-inbox')
      return
    }
    this.setState({ userRole: getUserDetail('roles'), loading: true }, () => {
      var arr = [getSellerRequests()]
      if (this.props.match.params.projectId) {
        arr.push(getProjectDetailsWithBuyerCredentials(this.props.match.params.projectId))
      }
      Promise.all(arr).then((values) => {
        console.log('values[1] => ', values[1]);

        var obj = { requests: values[0] && values[0].data ? values[0].data : [], loading: false }
        if (this.props.match.params.projectId) {
          obj.projectDetailOfBuyer = values[1] && values[1].data ? values[1].data : null;
        }
        this.setState({ ...obj });
      }).catch(err => {
      })
      if (this.props.match.params.projectId) {
        this.getMessages();
      }
    });
  }

  componentWillUnmount() {
    this.setState({ messages: null })
    clearInterval(this.state.intervalId)
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log('UNSAFE_componentWillReceiveProps nextProps => ', nextProps);
    console.log('UNSAFE_componentWillReceiveProps nextState=> ', nextState);

    if (nextProps.match.params.projectId && this.props.match.params.projectId !== nextProps.match.params.projectId) {
      console.log('UNSAFE_componentWillReceiveProps called => ');

      this.getMessages(nextProps.match.params.projectId);
    }
    else if (!nextProps.match.params.projectId) {
      this.setState({ messages: null })
    }
  }

  getMessages = (projectId = this.props.match.params.projectId) => {
    console.log('getMessages this.props => ', this.props);
    console.log('projectId => ', projectId);


    if (projectId) {
      this.setState({ loading: true }, () => {
        Promise.all([sellerLeadHierarchy(),
        getMessageSellerProjectId(getUserDetail('companyId'), projectId),
        getProjectByProjectId(projectId),
        getProjectStatus(getUserDetail('companyId'), projectId),
        ]).then((values) => {
          var temp = values && values[1] && values[1].data && values[1].data[0] ? values[1].data[0] : {}
          if (values && values[1] && values[1].data && values[1].data[0]) {
            var _conversations = {
              messageId: 0,
              text: values[1].data[0].text,
              receiverId: values[1].data[0].receiverId,
              senderId: values[1].data[0].senderId,
              deliveryTime: values[1].data[0].deliveryTime,
              attachment: values[1].data[0].attachment,
              isRead: values[1].data[0].isRead,
              isSent: values[1].data[0].isSent,
              messageType: values[1].data[0].messageType,
              id: values[1].data[0].id,
              createdDate: values[1].data[0].createdDate,
              modifiedDate: values[1].data[0].modifiedDate,
              createdBy: values[1].data[0].createdBy,
              modifiedBy: values[1].data[0].modifiedBy,
            }
            var messages = [_conversations, ...values[1].data[0].conversations]
            temp.conversations = messages;
          }
          this.setState({
            approved: get(values[3], "data.requestStatus", null),
            getAllProjects: get(values[0], 'data'),
            messages: temp,
            projectDetail: get(values[2], 'data'),
            loading: false
          }, () => {
            var d = document.querySelector(".middle-section")
            d.scrollTop = d.scrollHeight;
          })
        });
      })
    }
  }

  getLatestMessages = () => {
    var id = setInterval(() => {
      if (this.props.match.params.projectId) {
        getMessageSellerProjectId(getUserDetail('companyId'), this.props.match.params.projectId).then(res => {
          var temp = res.data[0];
          var _conversations = {
            messageId: 0,
            text: res.data[0].text,
            receiverId: res.data[0].receiverId,
            senderId: res.data[0].senderId,
            deliveryTime: res.data[0].deliveryTime,
            attachment: res.data[0].attachment,
            isRead: res.data[0].isRead,
            isSent: res.data[0].isSent,
            messageType: res.data[0].messageType,
            id: res.data[0].id,
            createdDate: res.data[0].createdDate,
            modifiedDate: res.data[0].modifiedDate,
            createdBy: res.data[0].createdBy,
            modifiedBy: res.data[0].modifiedBy,
          };
          var messages = [_conversations, ...res.data[0].conversations]
          temp.conversations = messages
          this.setState({ messages: temp }, () => {
            if (this.state.newMsg) {
              var d = document.querySelector(".middle-section")
              d.scrollTop = d.scrollHeight;
              this.setState({ newMsg: false })
            }
          });
        }).catch(() => { })
      }
    }, 1000);
    this.setState({ intervalId: id })
  }

  approveProject = (key) => {
    const { projectDetail } = this.state
    var stripeSubscriptionPriceId = ''
    switch (projectDetail.projectHireTypeId) {
      case 1:
        stripeSubscriptionPriceId = `price_1HZHd9ED9o2d394hmZtkvNMC`
        break;
      case 2:
        stripeSubscriptionPriceId = `price_1HZHcoED9o2d394hpOLR25RF`
        break;
      case 3:
        stripeSubscriptionPriceId = `price_1HZHcWED9o2d394hh4yIlN97`
        break;
      case 4:
        stripeSubscriptionPriceId = `price_1HZHcAED9o2d394hL2uGuJkT`
        break;
      default:
        break;
    }
    if (key === 2) {
      acceptRejectProjectRequest({
        id: 0,
        projectId: this.props.match.params.projectId,
        companyId: getUserDetail('companyId'),
        requestStatus: key,
        stripeSubscriptionPriceId
      }).then(res => {
        if (res.status === 200) {
          this.setState({ approved: get(res, "data.requestStatus", null) }, () => {
            this.getLatestMessages();
          });
        } else if (res.response.status === 400) {
          notification.open({ message: 'Error', description: 'Project Has Been Closed!' });
        }
      }).catch(() => {
        notification.open({ message: 'Error', description: 'There was an error while accepting this project!' })
      });
    } else {
      if (getUserDetail('stripeCustomerPaymentMethodLastFourDigits') === null) {
        notification.open({
          message: 'No card found',
          description: 'Please enter your billing details first!'
        })
        this.props.history.push(`/billing?redirect=inbox/${this.props.match.params.projectId}`)
      } else {
        acceptRejectProjectRequest({
          id: 0,
          projectId: this.props.match.params.projectId,
          companyId: getUserDetail('companyId'),
          requestStatus: key,
          stripeSubscriptionPriceId
        }).then(res => {
          if (res.status === 200) {
            var str = ""
            this.state.projectDetail.questionnaires && this.state.projectDetail.questionnaires.map(questions => (
              str = str + `
            <li>Question: ${questions.question}</li>
            <li>Answer: ${questions.answer}</li>
          `
            ))
            var data = {
              projectId: parseInt(this.props.match.params.projectId),
              senderId: this.state.projectDetail ? this.state.projectDetail.buyerId : '',
              receiverId: getUserDetail('companyId'),
              text: `<ul>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Hi, I’m interested in working with you on project ${this.state.projectDetail.storeProjectorInbox && this.state.projectDetail.storeProjectorInbox.title}.</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Let’s talk further once you’re available thanks :)</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Here are some of my project aspects: ${str}</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Here is my information. Please feel free to contact me</li$>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Category Name: ${this.state.projectDetail && this.state.projectDetail.categoryName}</li>
            ${this.state.projectDetail && this.state.projectDetail.tagName && `<li><i class="fa fa-circle" aria-hidden="true"></i> Tag Name: ${this.state.projectDetail.tagName}</li>`}
            <li><i class="fa fa-circle" aria-hidden="true"></i> Industry: ${this.state.projectDetail && this.state.projectDetail.industryName}</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Phone Number: ${get(this.state.projectDetailOfBuyer, "buyerPhoneNumber") ? get(this.state.projectDetailOfBuyer, "buyerPhoneNumber") : get(this.state.projectDetailOfBuyer, "buyerContactNumber")}</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Email: ${get(this.state.projectDetailOfBuyer, "buyerEmail", "")}</li>
          </ul>`,
              deliveryTime: "",
              attachment: '',
              messageType: 1,
              id: 0
            }
            postMessage(data).then(resp => {
              if (resp.status === 200) {
                var data = {
                  projectId: parseInt(this.props.match.params.projectId),
                  senderId: this.state.projectDetail ? this.state.projectDetail.buyerId : '',
                  receiverId: getUserDetail('companyId'),
                  text: `<ul>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Hi, I’m interested in working with you on project ${this.state.projectDetail.storeProjectorInbox && this.state.projectDetail.storeProjectorInbox.title}.</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Let’s talk further once you’re available thanks :)</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Here is my information. Please feel free to contact me</li$>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Phone Number: ${getUserDetail('phoneNumber')}</li>
            <li><i class="fa fa-circle" aria-hidden="true"></i> Email: ${getUserDetail('email')}</li>
          </ul>`,
                  deliveryTime: "",
                  attachment: '',
                  messageType: 2,
                  id: resp.data.id
                }
                postMessage(data).then(resp => {
                  if (resp.status === 200) {
                  }
                }).catch(Err => {
                })
                // this.props.history.push(`/buyer-inbox/${this.props.match.params.projectId}/${sellerId}`)
              } else {
                notification.error({
                  message: 'Error',
                  description: 'There was an error while sending message to the seller!'
                });
              }
            }).catch(err => {
              // console.log('postMessage err =>', err)
            })
            this.setState({ approved: get(res, "data.requestStatus", null) }, () => {
              this.getLatestMessages();
            });
          } else if (res.response.status === 400) {
            notification.open({ message: 'Error', description: 'Project Has Been Closed!' });
          }
        }).catch(() => {
          notification.open({ message: 'Error', description: 'There was an error while accepting this project!' })
        });
      }
    }
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
      projectId: parseInt(this.props.match.params.projectId),
      senderId: parseInt(getUserDetail('companyId')),
      receiverId: this.state.projectDetail.buyerId,
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
      this.setState({
        newMsg: true
      }, () => {
        this.getLatestMessages();
      })
      setTimeout(() => {
        // var d = document.querySelector(".middle-section")
        // d.scrollTop = d.scrollHeight;
      }, 1000);
    }).catch(() => {
      this.formRef.current.setFieldsValue({ text: '' });
    });
    // }
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

  showOverChat() {
    this.setState({ showOverLay: !this.state.showOverLay });
  }

  render() {

    const pathList = [{ to: "/inbox", title: "Inbox" }];
    const { messages, loading, approved = false, requests, projectDetail } = this.state
    const { TextArea } = Input;
    const { Meta } = Card;
    console.log('this.state => ', this.state);

    // console.log('this.state.projectDetailOfBuyer =>', this.state.projectDetailOfBuyer)
    return (
      <div>
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
                        <NavLink to={`/inbox/${request.projectId}`} className="dropdown-item">
                          <h6 className="user_sub_name">{request.projectName}</h6>
                          <p className="date_label_name">{request.companyName} <span>{moment(request.createdDate).fromNow()}</span></p>
                        </NavLink>
                      )}
                    </ul>
                  </div>
                  <div className={requests && requests.length > 0 ? "col-lg-8" : "col-12"}>
                    {this.state.loading ? <Loader /> :
                      <>
                        <div className={!approved && this.props.match.params.projectId ? "card over_lay_design" : "card"}>
                          {this.props.match.params.projectId &&
                            <div className="card-body message_sec">
                              <div className="card-header card-gauge-section col-12 col-md-12 bg-background3 border-radius-4 text-white">
                                <h4 className="text-capitalize z-index-10 text-white z-index-10 m-0">{get(this.state, "projectDetail.title", "")} </h4>
                              </div>
                            </div>}

                          {!approved && this.props.match.params.projectId &&
                            <div className="confirm_box_section">
                              <Card actions={[
                                <CheckOutlined key="checkMark" onClick={() => this.approveProject(1)} />,
                                <CloseOutlined key="closedOutLined" onClick={() => this.approveProject(2)} />
                              ]}>
                                <Skeleton loading={loading} avatar active>
                                  <Meta description="Do you confirm?"
                                    title={`You will be charged ${projectDetail && projectDetail.projectHireTypeId === 1 ? '£25' : '' || projectDetail && projectDetail.projectHireTypeId === 2 ? '£20' : '' || projectDetail && projectDetail.projectHireTypeId === 3 ? '£15' : '' || projectDetail && projectDetail.projectHireTypeId === 4 ? '£10' : ''} for this lead.`}
                                  />
                                </Skeleton>
                              </Card>
                            </div>}

                          {approved === 2 &&
                            <div className="chatbox_error_message">
                              <Alert message="Reject" description="This project has been rejected by you!" type={"info"} showIcon />
                            </div>}

                          <div className={getUserDetail('roles') === 'Seller' ? "middle-section message_section" : "middle-section message_section  message_section_left"}>
                            <>
                              {messages && messages.conversations && messages.conversations.length > 0 &&
                                <ul id="your_div">
                                  <li>
                                    <div className="content w-100">
                                      {messages.conversations && messages.conversations.map(onlyText => (
                                        <>
                                          {onlyText.text && <div className={`message ${onlyText.messageType === 1 ? `message left` : `right`}`}>
                                            <div>
                                              <div className="bubble">
                                                <p dangerouslySetInnerHTML={{ __html: onlyText.text }} />
                                              </div>
                                              <span>{moment(onlyText.createdDate).format('HH:mm')}</span>
                                            </div>
                                          </div>}
                                          <div className={`message ${onlyText.messageType === 1 ? `left` : `right`}`}>
                                            {
                                              onlyText.attachments && onlyText.attachments.length > 0 && onlyText.attachments.map((file, index) => {
                                                return this.renderAttachment(file)
                                              })
                                            }
                                          </div>
                                        </>
                                      ))}
                                    </div>
                                  </li>
                                </ul>
                              }
                              {!this.props.match.params.projectId &&
                                <div className="message_sec_space">
                                  <span><i className="fa fa-paper-plane-o" aria-hidden="true"></i></span>
                                  <h2>Your Messages</h2>
                                </div>}
                            </>
                          </div>
                          {approved && approved !== 2 && <div className="message_section">
                            <div className="bottom message_upload_sec">
                              {this.props.uploadLink && this.props.uploadLink.length > 0 &&
                                <div className="upload_section">
                                  {this.props.uploadLink.map(link =>
                                    <div className="upload_document">
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
                                  {/* <li className="g-icon">
                                    <GoogleDrive>
                                      <span>
                                        <button onClick={(e) => e.preventDefault()} className="google send-message mr-2">
                                          <img src={require("../assets/images/google-drive.png")} className="" alt="Google Send Message" />
                                        </button>
                                      </span>
                                      <div className="google"></div>
                                    </GoogleDrive>
                                  </li> */}
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

export default connect(mapStateToProps)(Inbox);
