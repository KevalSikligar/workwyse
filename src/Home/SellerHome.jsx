import React, { Component } from 'react'
import { sellerLeadHierarchy, postSellerProjectDetails } from '../Services/SellerService'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { getPriceId } from '../redux/action/Billing/BillingAction';
import { connect } from 'react-redux';
import { notification } from 'antd';
import swal from 'sweetalert';
import { getUserDetail } from '../const';
import Loader from '../Loader/Loader';
import { postMessage } from '../Services/Message';
import { getProjectDetailsWithBuyerCredentials } from '../Services/PostAProjectService';
class SellerHome extends Component {

  state = {
    sellerLeadHierarchy: [],
    userDetails: null,
    customerId: getUserDetail('stripeCustomerId'),
    projectId: '',
    loading: false
  }

  componentDidMount() {
    this.setState({ userDetails: getUserDetail(), loading: true }, () => {
      sellerLeadHierarchy().then(res => {
        console.log('res => ', res);
        if (res.status === 200) {
          this.setState({ sellerLeadHierarchy: res.data, loading: false });
        }
      }).catch(err => {
        // notification.open({
        //   message: 'Error',
        //   description: 'There was an error while fetching leads for sellers!'
        // });
      });
    });
    getProjectDetailsWithBuyerCredentials(1).then(Res => {
      console.log('Res => ', Res);

    }).catch(Err => {
      console.log('Err => ', Err);

    })
  }

  sendToNotifications() {
    this.props.history.push('/notifications');
  }

  sendBuyerRequest(id, projectId, projectName, paid, projectDetails) {
    let priceId = ''
    let productPrice = ''
    this.setState({ projectId });
    if (this.state.customerId === 'null' || this.state.customerId === '' || this.state.customerId === null) {
      notification.open({
        message: 'No card found',
        description: 'Please enter your billing details first!'
      });
      this.props.dispatch(getPriceId(priceId));
      localStorage.setItem('priceId', priceId);
      this.props.history.push('/billing?redirect=seller')
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
      this.chargeCustomer(data, productPrice, projectDetails, priceId);
    }
  }

  chargeCustomer(data, productPrice, projectDetails, priceId) {
    swal({
      title: `You will be charged ${productPrice} for this lead.`,
      text: "Do you confirm the charges?",
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
            var data = {
              projectId: projectDetails.id,
              senderId: parseInt(getUserDetail('companyId')),
              receiverId: projectDetails.buyerId,
              text: `<ul>
              <li><i class="fa fa-circle" aria-hidden="true"></i> Hi, I’m interested in working with you on your project ${projectDetails.title}.</li>
              <li><i class="fa fa-circle" aria-hidden="true"></i> Let’s talk further once you’re available thanks :)</li>
              <li><i class="fa fa-circle" aria-hidden="true"></i> Here is my information. Please feel free to contact me</li>
              <li><i class="fa fa-circle" aria-hidden="true"></i> Phone Number: ${getUserDetail('phoneNumber')}</li>
              <li><i class="fa fa-circle" aria-hidden="true"></i> Email: ${getUserDetail('email')}</li>
                </ul>`,
              deliveryTime: "",
              attachment: '',
              messageType: 2,
              id: 0
            }
            postMessage(data).then(resp => {
              if (resp.status === 200) {
                getProjectDetailsWithBuyerCredentials(projectDetails.id).then(Res => {
                  if (Res.status === 200) {
                    var str = ""
                    Res.data.questionnaires && Res.data.questionnaires.map(questions => (
                      str = str + `
                        <li>Question: ${questions.question}</li>
                        <li>Answer: ${questions.answer}</li>
                      `
                    ))
                    var data = {
                      id: resp.data.id,
                      projectId: projectDetails.id,
                      senderId: projectDetails.buyerId,
                      receiverId: getUserDetail('companyId'),
                      text: `<ul>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Hi, I’m interested in working with you on project ${projectDetails.title || ""}.</li>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Let’s talk further once you’re available thanks :)</li>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Here are some of my project aspects: ${str}</li>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Here is my information. Please feel free to contact me</li$>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Category Name: ${Res.data && Res.data.categoryName}</li>
                        ${Res.data && Res.data.tagName && `<li><i class="fa fa-circle" aria-hidden="true"></i> Tag Name: ${Res.data.tagName}</li>`}
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Industry: ${Res.data && Res.data.industryName}</li>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Phone Number: ${Res.data && Res.data.buyerPhoneNumber ? Res.data.buyerPhoneNumber : Res.data.buyerContactNumber}</li>
                        <li><i class="fa fa-circle" aria-hidden="true"></i> Email: ${Res.data && Res.data.buyerEmail}</li>
                      </ul>`,
                      deliveryTime: "",
                      attachment: '',
                      messageType: 1,
                    }
                    postMessage(data).then(resp => {
                      if (resp.status === 200) {
                        // this.props.history.push(`/buyer-inbox/${this.props.match.params.projectId}/${sellerId}`)
                        this.props.history.push(`/inbox/${projectDetails.id}`)
                      } else {
                        notification.error({
                          message: 'Error',
                          description: 'There was an error while sending message to the seller!'
                        });
                      }
                    }).catch(err => {
                      // console.log('postMessage err =>', err)
                    })
                  }
                }).catch(Err => {
                })
              }
            }).catch(err => { })
          }
          else if (res.response.status === 400) {
            // console.log('res.response.message => ', res.error.message);
            notification.error({
              message: 'Error',
              description: `${res.response.data}`
            });
          }
        }).catch((err) => {
          notification.error({
            message: 'Error',
            description: 'There was an error while sending project request to the buyer!'
          })
        });
      }
    });
  }

  render() {

    const pathList = [{ to: "/seller", title: "Seller Dashboard" }];

    return (
      <div>
        <BreadCrumbs title="Seller Dashboard" breadcrumbssegment={pathList} />
        <section className="sptb">
          {this.state.loading ? <Loader /> :
            <div className="container">
              {this.state.sellerLeadHierarchy && this.state.sellerLeadHierarchy.length > 0 ?
                <div className="section-title center-block text-center">
                  <h1>Latest Jobs</h1>
                </div> : ''}
              <div className="panel-body">
                <div className="tab-content">
                  <div className="tab-pane active show" id="index1">
                    <div className="row">
                      {this.state.sellerLeadHierarchy && this.state.sellerLeadHierarchy.length > 0 ? this.state.sellerLeadHierarchy.map(projectDetails => (
                        <div className="col-xl-4 col-md-6">
                          <div className="card overflow-hidden custom_card_sec mb-5">
                            <div className="card-body service-card-head">
                              <div className="item-card7-desc">
                                <div className="item-card7-text">
                                  <div className="text-white"><h4 className="text-white font-weight-semibold m-0">{projectDetails.title}</h4></div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body py-2">
                              <span className="icons font-weight-semibold text-body"> <strong>Charges : </strong>{projectDetails.projectTypeId === 1 ? 'One Off' : '' || projectDetails.projectTypeId === 2 ? 'Monthly' : '' || projectDetails.projectTypeId === 3 ? 'Hourly' : ''}</span>
                            </div>
                            {projectDetails.monthlyRate &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>Monthly Rate : </strong>{projectDetails.monthlyRate === 1 ? "£250 - £1000" : '' || projectDetails.monthlyRate === 2 ? "1,000 - £2,000" : '' || projectDetails.monthlyRate === 3 ? "2,000 - £5,000" : '' || projectDetails.monthlyRate === 4 ? "£5,000 - £10,000+" : ''}</span>
                              </div>}
                            {projectDetails.oneOffRate &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>One Off Rate : </strong> {projectDetails.oneOffRate === 1 ? "£250 - £1000" : '' || projectDetails.oneOffRate === 2 ? "1,000 - £2,000" : '' || projectDetails.oneOffRate === 3 ? "2,000 - £5,000" : '' || projectDetails.oneOffRate === 4 ? "£5,000 - £10,000+" : ''}</span>
                              </div>}
                            {projectDetails.hourlyStartRate &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>Hourly Start Rate : </strong>{'£' + " " + projectDetails.hourlyStartRate}</span>
                              </div>}
                            {projectDetails.hourlyEndRate &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>Hourly End Rate : </strong> {'£' + " " + projectDetails.hourlyEndRate} </span>
                              </div>}
                            <div className="card-body py-2">
                              <span className="icons font-weight-semibold text-body">
                                <strong>Category : </strong> {projectDetails.categoryName ? projectDetails.categoryName : '-'} </span>
                            </div>
                            {projectDetails.tagName &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>Service : </strong> {projectDetails.tagName ? projectDetails.tagName : '-'} </span>
                              </div>}
                            {projectDetails.industryName &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>Industry Focus : </strong> {projectDetails.industryName ? projectDetails.industryName : '-'} </span>
                              </div>}
                            {projectDetails.projectHireTypeId &&
                              <div className="card-body py-2">
                                <span className="icons font-weight-semibold text-body">
                                  <strong>Buying Stage : </strong>{projectDetails.projectHireTypeId === 1 ? 'Ready to Hire' : '' || projectDetails.projectHireTypeId === 2 ? 'Very likely to Hire' : '' || projectDetails.projectHireTypeId === 3 ? 'I’m doing my research' : '' || projectDetails.projectHireTypeId === 4 ? 'I’m looking for quotes' : ''} </span>
                              </div>}
                            <div className="card-body py-2">
                              <div className="service-cat-section">
                                <div className="d-flex justify-content-end">
                                  <div className="text-muted">
                                    <button className="btn btn-primary text-white ml-2" onClick={() => this.sendBuyerRequest(projectDetails.projectHireTypeId, projectDetails.id, projectDetails.title, projectDetails.paid, projectDetails)}>Work with</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )) :
                        <>
                          <div className="col-md-12">
                            <div className="temphome_section">
                              <h3>No Leads Currently</h3>
                              <h4><span><i className="fa fa-cog" aria-hidden="true"></i></span> - Increase the number of Services under the 'Services' tab</h4>
                              <h4><span><i className="fa fa-cog" aria-hidden="true"></i></span> - Enable notifications under the 'Notifications' tab</h4>
                              <div className="row justify-content-center">
                                <div className="col-md-4 temphome_checkbox">
                                  <span className="custom-switch-description text-dark fs-16" >Browser (Push)</span>
                                  <input type="checkbox" checked={true} name="custom-switch-checkbox" className="custom-switch-input" />
                                  <span className="custom-switch-indicator" onClick={() => this.sendToNotifications()}></span>
                                </div>
                                <div className="col-md-4 temphome_checkbox">
                                  <span className="custom-switch-description text-dark fs-16">Email</span>
                                  <input type="checkbox" checked={true} name="custom-switch-checkbox" className="custom-switch-input" />
                                  <span className="custom-switch-indicator" onClick={() => this.sendToNotifications()}></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    priceIdInTempHome: state
  };
};

export default connect(mapStateToProps)(SellerHome);
