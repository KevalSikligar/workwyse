import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import Loader from '../Loader/Loader';
import moment from 'moment';
import { sellerLeadHierarchy, postSellerProjectDetails } from '../Services/SellerService';
import { getUserDetail } from '../const';
import swal from 'sweetalert';
import { acceptRejectProjectRequest, postMessage } from '../Services/Message';
import { notification } from 'antd';
import { connect } from 'react-redux';
import { getPriceId } from '../redux/action/Billing/BillingAction';
class FindBuyer extends React.Component {

  state = {
    buyerProjectDetails: [],
    loading: false,
    customerId: getUserDetail('stripeCustomerId')
  }

  componentDidMount() {
    this.setState({ userDetails: getUserDetail(), loading: true }, () => {
      sellerLeadHierarchy().then(res => {
        console.log('res.data => ', res.data);

        if (res.status === 200) {
          this.setState({ buyerProjectDetails: res.data, loading: false })
        }
      }).catch(err => {
        // console.log('err => ', err);
      })
    });
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
      this.chargeCustomer(data, productPrice, projectDetails);
    }
  }

  chargeCustomer(data, productPrice, projectDetails) {
    swal({
      title: `You will be charged ${productPrice} for this lead.`,
      text: "Do you confirm the charges?",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true,
    }).then((chargeYes) => {
      if (chargeYes) {
        postSellerProjectDetails(data).then(res => {
          if (res.status === 200) {
            // acceptRejectProjectRequest({
            //   projectId: projectDetails.id,
            //   companyId: parseInt(getUserDetail('companyId')),
            //   requestStatus: 1,
            //   stripeSubscriptionPriceId: priceId
            // }).then(res => {
            //   if (res.status === 200) {
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
                this.props.history.push(`/inbox/${projectDetails.id}`)
              }
            }).catch(err => { })
            // }
            // }).catch(err => {
            //   console.log('err => ', err);

            //   notification.open({
            //     message: 'Error',
            //     description: 'There was an error while sending request to a Buyer!'
            //   });
            // })
          } else if (res.response.status === 400) {
            console.log('res.message.error => ', res.response);

            notification.open({ message: 'Error', description: res.response.data });
          }
        }).catch((err) => {
          console.log('err => ', err);

          notification.open({ message: 'Error', description: 'There was an error while accepting this project!' })
        });
      }
    });
  }

  render() {

    const pathList = [{ to: "/find-buyer", title: "Find Buyer" }];

    return (
      <div>
        {this.state.loading ? <Loader /> : <>
          <BreadCrumbs title="Find Buyer" breadcrumbssegment={pathList} />
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <SideNav />
              </div>
              <div className="col-xl-9 col-lg-9 sptb">
                <div className="custom-card">
                  <div className="card">
                    <div className="card-header card-gauge-section col-12 col-md-12 bg-background3 border-radius-4 p-4 text-white">
                      <h3 className="text-white company-name fs-18 font-weight-semibold m-0 z-index-10">Find Buyer</h3>
                    </div>
                    <div className="card-body p-0">
                      <div className="card-body pb-0">
                        {this.state.buyerProjectDetails.length > 0 ? this.state.buyerProjectDetails.map(details => (
                          <div className="card mb-4 box-shadow-none">
                            <div className="card-header inner-card-header p-4">
                              <div className="card-header-content">
                                <div className="card-header-left-section">
                                  <h3 className="card-title">{details.title ? details.title : '-'} </h3>
                                  <p className="font-weight-semibold">{moment(details.createdDate).format('h:mm A, MMMM Do YYYY')}</p>
                                </div>
                                <div className="card-header-right-section">
                                  <div className="card-header-buttons">
                                    <button className="btn service-btn find_buyer_f">
                                      <span className="star-icon"><i className="fa fa-star-o" aria-hidden="true"></i></span>{details.projectHireTypeId === 1 ? 'Ready to Hire' : '' || details.projectHireTypeId === 2 ? 'Very likely to Hire' : '' || details.projectHireTypeId === 3 ? 'I’m doing my research' : '' || details.projectHireTypeId === 4 ? 'I’m looking for quotes' : ''}</button>
                                    <button className="btn service-btn find_buyer_f active" onClick={() => this.sendBuyerRequest(details.projectHireTypeId, details.id, details.title, details.paid, details)}>Work With</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="card-find-buyer-content">
                                <div className="card-find-buyer-details">
                                  <div className="buyer-desc">
                                    {details.description && <p><b>Description: </b> {details.description}</p>}
                                    {details.categoryName && <p><b>Need help with: </b> {details.categoryName}</p>}
                                    {details.endDate && <p><b>Go live/Be updated:</b> {details.endDate && moment(details.endDate).format('MMMM Do YYYY')}</p>}
                                    {details.tagName && <p><b> Services:</b> {details.tagName}</p>}
                                    <p>
                                      {details.monthlyRate &&
                                        <p className="icons font-weight-semibold text-body mr-4">
                                          <strong>Monthly Rate : </strong> {details.monthlyRate === 1 && "£250 - £1000" || details.monthlyRate === 2 && "£1,000 - £2,000" || details.monthlyRate === 3 && "£2,000 - £5,000" || details.monthlyRate && "£5,000 - £10,000+"}
                                        </p>}
                                      {details.oneOffRate &&
                                        <p className="icons font-weight-semibold text-body mr-4">
                                          <strong>One off Rate : </strong>{details.oneOffRate === 1 && "£250 - £1000" || details.oneOffRate === 2 && "£1,000 - £2,000" || details.oneOffRate === 3 && "£2,000 - £5,000" || details.oneOffRate === 4 && "£5,000 - £10,000+"}
                                        </p>}
                                      {details.hourlyStartRate &&
                                        <p className="icons font-weight-semibold text-body mr-4">
                                          <strong>Hourly Start Rate : </strong>{'£' + " " + details.hourlyStartRate}
                                        </p>}
                                      {details.hourlyEndRate &&
                                        <p className="icons font-weight-semibold text-body mr-4">
                                          <strong>Hourly End Rate : </strong> {'£' + " " + details.hourlyEndRate}
                                        </p>}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )) :
                          <div className="card-body">
                            <div className="buyer-desc">
                              <h3>No Leads Currently</h3>
                              <h4><span><i className="fa fa-cog" aria-hidden="true"></i></span> - Increase the number of Services under the 'Services' tab</h4>
                              <h4><span><i className="fa fa-cog" aria-hidden="true"></i></span> - Enable notifications under the 'Notifications' tab</h4>
                              <div className="row justify-content-center">
                                <div className="col-md-4 temphome_checkbox">
                                  <span className="custom-switch-description text-dark fs-16">Browser (Push)</span>
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
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> </>}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    priceIdInfindBuyer: state
  };
};

export default connect(mapStateToProps)(FindBuyer);