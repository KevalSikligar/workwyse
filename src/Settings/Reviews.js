import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { Form, notification, Button } from 'antd';
import { editSellerDetails } from '../Services/SellerService';
import { getUserInfo } from '../Services/Authentication';
import { editBuyerDetails } from '../Services/BuyerService';
import { Link } from 'react-router-dom';
import { getUserDetail, setUserDetail } from '../const';

class Reviews extends Component {

  state = {
    storeReviews: [],
    userDetails: null,
    disabled: false,
    trustpilotConnectedUrl: '',
    glassdoorConnnectedUrl: '',
    connectFacebookBusinessUrl: ''
  }

  componentDidMount() {
    this.setState({
      userDetails: getUserDetail(),
      trustpilotConnectedUrl: getUserDetail('trustpilotConnectedUrl'),
      glassdoorConnnectedUrl: getUserDetail('glassdoorConnnectedUrl'),
      connectFacebookBusinessUrl: getUserDetail('connectFacebookBusinessUrl')
    });
    // DO NOT REMOVE THIS CODE AS IT IS BEING USED IN REVIEWS SEGMENT. DO NOT REMOVE ANY HTML AS WELL!!!
    // getReviewBySellerId().then(res => {
    //   this.setState({ storeReviews: res.data })
    //   console.log('res getReviewBySellerId=> ', res);
    // }).catch(err => {
    //   notification.open({
    //     message: 'Error',
    //     description: 'There was an error while fetching Reviews!'
    //   });
    //   console.log('err => ', err);
    // })
  }

  changeHandler = (key, event) => {
    this.setState({ disabled: true }, () => {
      if (key === 'trustpilotConnectedUrl') {
        this.setState({ trustpilotConnectedUrl: event })
      } else if (key === 'glassdoorConnnectedUrl') {
        this.setState({ glassdoorConnnectedUrl: event });
      } else if (key === 'connectFacebookBusinessUrl') {
        this.setState({ connectFacebookBusinessUrl: event });
      }
    });
  }

  submitURLS = () => {
    const data = {
      id: getUserDetail('companyId'),
      businessType: 2,
      companyType: getUserDetail('roles') === 'Buyer' ? 1 : 2,
      companyEmail: getUserDetail('email'),
      companyName: getUserDetail('companyName'),
      companyContactNumber: getUserDetail('companyContactNumber'),
      companySize: getUserDetail('companySize'),
      operationScale: getUserDetail('operationScale'),
      distance: 50,
      latitude: getUserDetail('latitude'),
      longitude: getUserDetail('longitude'),
      location: getUserDetail('location'),
      trustpilotConnectedUrl: this.state.trustpilotConnectedUrl ? this.state.trustpilotConnectedUrl : getUserDetail('trustpilotConnectedUrl'),
      glassdoorConnnectedUrl: this.state.glassdoorConnnectedUrl ? this.state.glassdoorConnnectedUrl : getUserDetail('glassdoorConnnectedUrl'),
      connectFacebookBusinessUrl: this.state.connectFacebookBusinessUrl ? this.state.connectFacebookBusinessUrl : getUserDetail('connectFacebookBusinessUrl'),
      active: true,
      industryId: getUserDetail('industryId'),
      companyUserId: getUserDetail('companyUserId'),
      jobTitle: getUserDetail('jobTitle'),
      userDto: {
        id: getUserDetail('userId'),
        foreName: getUserDetail('foreName'),
        surName: getUserDetail('surName'),
        phoneNumber: getUserDetail('phoneNumber'),
        email: getUserDetail('email'),
        password: '',
        photoPath: null
      }
    }
    if (getUserDetail('roles') === 'Buyer') {
      data.buyerTemplate = getUserDetail('buyerTemplate')
      editBuyerDetails(data).then(res => {
        if (res.status === 200) {
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
            // localStorage.setItem('userDetails', JSON.stringify(userInfo.data));
          }).catch(err => {
            // console.log('err => ', err);
          });
          notification.open({
            message: 'Success',
            description: 'User details have successfully been updated!'
          });
        }
      }).catch(err => {
        // console.log('err => ', err);
      });
    } else if (getUserDetail('roles') === 'Seller') {
      data.sellerTemplate = getUserDetail('sellerTemplate')
      data.sellerCategoryId = getUserDetail('sellerCategoryId')
      editSellerDetails(data).then(res => {
        if (res.status === 200) {
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
            // localStorage.setItem('userDetails', JSON.stringify(userInfo.data));
          }).catch(err => {
            // console.log('err => ', err);
          });
          notification.open({
            message: 'Success',
            description: 'User details have successfully been updated!'
          });
        }
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: 'There was an error while updating user details'
        });
      });
    }
  }
  changeEditModeHandler = (key) => {
    this.setState({ [key]: true })
  }

  render() {
    console.log('this.state =>', this.state)
    const pathList = [{ to: "/reviews", title: "Reviews" }];

    return (
      <div>
        <BreadCrumbs title="Reviews" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <SideNav />
            </div>
            <div className="col-xl-9 col-lg-9 review-sec">
              <div className="sptb">
                <Form>
                  <div className="card">
                    <div className="card-body">
                      <div className="card-header card-gauge-section col-12 col-md-12 bg-background3 border-radius-4 p-4 text-white">
                        <h3 className="text-white company-name fs-18 font-weight-semibold m-0 z-index-10">Reviews</h3>
                      </div>

                      {/* pilot */}
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="review-item review-item-section reviewOnlyReviewPage">
                            <div className="review-img">
                              <img src={require('../assets/images/trustpilot-logo.png')} className="logo-image img-fluid" alt="img" title="https://uk.trustpilot.com/review/" />
                            </div>
                            <div className="website-text">
                              {this.state.trustpilot ?
                                <>
                                  {`https://uk.trustpilot.com/review/`}<input className="ant-input" type="text" autoFocus={true} name="trustpilot" onChange={(e) => { this.changeHandler('trustpilotConnectedUrl', e.target.value) }} onKeyUp={(e) => e.keyCode === 13 && this.setState({ trustpilot: false })} onBlur={(e) => { this.setState({ trustpilot: false }) }} />
                                </>
                                : <Link
                                  onClick={() => window.open(`https://uk.trustpilot.com/review/${this.state.trustpilotConnectedUrl}`, "_blank")}>
                                  {this.state.trustpilotConnectedUrl && this.state.trustpilotConnectedUrl.length > 0 ? `https://uk.trustpilot.com/review/${this.state.trustpilotConnectedUrl}` : "Click to add your TrustPilot review profile!"}
                                </Link>}
                              {!this.state.trustpilot ? <span className="input_review_s" onClick={() => this.changeEditModeHandler('trustpilot')}><i className="fa fa-edit"></i></span> : ""}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* glassdoor */}
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="review-item review-item-section reviewOnlyReviewPage">
                            <div className="review-img">
                              <img src={require('../assets/images/glassdoor-logo.png')} className="logo-image img-fluid" alt="img" title="https://www.glassdoor.co.uk/Reviews/" />
                            </div>
                            <div className="website-text">
                              {this.state.glassDoor ?
                                <>
                                  {`https://www.glassdoor.co.uk/Reviews/`}<input className="ant-input" type="text" autoFocus={true} name="glassDoor" onChange={(e) => { this.changeHandler('glassdoorConnnectedUrl', e.target.value) }} onKeyUp={(e) => e.keyCode === 13 && this.setState({ glassDoor: false })} onBlur={(e) => { this.setState({ glassDoor: false }) }} />
                                </>
                                : <Link
                                  onClick={() => window.open(`https://www.glassdoor.co.uk/Reviews/${this.state.glassdoorConnnectedUrl}`, "_blank")}>
                                  {this.state.glassdoorConnnectedUrl && this.state.glassdoorConnnectedUrl.length > 0 ? `https://www.glassdoor.co.uk/Reviews/${this.state.glassdoorConnnectedUrl}` : "Click to add your Glassdoor review profile!"}
                                </Link>}
                              {!this.state.glassDoor ? <span className="input_review_s" onClick={() => this.changeEditModeHandler('glassDoor')}><i className="fa fa-edit"></i></span> : ""}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* facebook */}
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <div className="review-item review-item-section reviewOnlyReviewPage">
                            <div className="review-img">
                              <img src={require('../assets/images/facebook-logo.png')} className="logo-image img-fluid" alt="img" title="https://facebook.com/" />
                            </div>
                            <div className="website-text">
                              {this.state.fb ?
                                <>
                                  {`https://www.facebook.com/`}<input type="text" className="ant-input" autoFocus={true} name="fb" onChange={(e) => { this.changeHandler('connectFacebookBusinessUrl', e.target.value) }} onKeyUp={(e) => e.keyCode === 13 && this.setState({ fb: false })} onBlur={(e) => { this.setState({ fb: false }) }} />
                                </>
                                : <Link
                                  onClick={() => window.open(`https://www.facebook.com/${this.state.connectFacebookBusinessUrl}`, "_blank")}>
                                  {this.state.connectFacebookBusinessUrl && this.state.connectFacebookBusinessUrl.length > 0 ? `https://www.facebook.com/${this.state.connectFacebookBusinessUrl}` : "Click to add your Facebook Business profile!"}
                                </Link>}
                              {!this.state.fb ? <span className="input_review_s" onClick={() => this.changeEditModeHandler('fb')}><i className="fa fa-edit"></i></span> : ""}
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="card-footer text-right">
                        <Form.Item>
                          <Button className="btn btn-primary" onClick={() => this.submitURLS()} disabled={!this.state.disabled}>Update Connected Sites</Button>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
              {/* <div className="sptb low-pad-top">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sptb py-0">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">{getUserDetail('roles') === 'Seller' ? 'Given Reviews' : 'Received Reviews'}</h3>
                            </div>
                            <div className="card-body">
                              <div className="rview-block">
                                {this.state.storeReviews.map(reviews => (
                                  <>
                                    <div className="company-profile-head bg-background3">
                                      <h4>{reviews.projectName ? reviews.projectName : 'No Title'}</h4>
                                    </div>
                                    <table className="table table-striped table-bordered">
                                      <tbody>
                                        <tr>
                                          <th>Reliability</th>
                                          <td>
                                            <Rating emptySymbol="fa fa-star-o fa-2x star-noactive" fullSymbol="fa fa-star fa-2x star-active"
                                              initialRating={reviews.reliability} readonly />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Communication</th>
                                          <td>
                                            <Rating emptySymbol="fa fa-star-o fa-2x star-noactive" fullSymbol="fa fa-star fa-2x star-active"
                                              initialRating={reviews.communication} readonly />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Value for Money</th>
                                          <td>
                                            <Rating emptySymbol="fa fa-star-o fa-2x star-noactive" fullSymbol="fa fa-star fa-2x star-active"
                                              initialRating={reviews.valueForMoney} readonly />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Trust</th>
                                          <td>
                                            <Rating emptySymbol="fa fa-star-o fa-2x star-noactive" fullSymbol="fa fa-star fa-2x star-active"
                                              initialRating={reviews.trust} readonly />
                                          </td>
                                        </tr>
                                        <tr>
                                          <th>Comment</th>
                                          <td>{reviews.comment} </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-danger mr-2">Cancel</button>
                    <button className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div> */}
            </div >
          </div >
        </div >
      </div >
    )
  }
}

export default Reviews;