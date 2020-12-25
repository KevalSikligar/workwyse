import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
// import SignInLinkedIn from '../SignUp/SignInLinkedIn';
import { Form, Button, Typography, notification } from 'antd';
import swal from "sweetalert";
import { deactivateUserAccount, getUserInfo } from '../Services/Authentication';
import { editBuyerDetails, editBuyerTemplate } from '../Services/BuyerService';
import { editSellerDetails, editSellerTemplate } from '../Services/SellerService';
import debounce from 'lodash/debounce';
import { companyId, getUserDetail, setUserDetail } from '../const';
export default class GeneralSettings extends React.Component {

  constructor(props) {
    super(props);
    this.changeHandler = debounce(this.changeHandler, 800);
  }

  state = {
    userDetails: null,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userEmail: '',
    enableButton: false,
    enableButtonTemplate: false,
    storeTemplateDetails: '',
    updatedTemplateDetails: [],
    location: ''
  }

  componentDidMount() {
    this.setState({
      userDetails: getUserDetail()
    }, () => {
      this.setState({
        firstName: getUserDetail('foreName'),
        lastName: getUserDetail('surName'),
        phoneNumber: getUserDetail('phoneNumber'),
        userEmail: getUserDetail('email'),
        storeTemplateDetails: getUserDetail('sellerTemplate') ? getUserDetail('sellerTemplate') : getUserDetail('buyerTemplate'),
        location: getUserDetail('location')
      });
      // console.log('this.state.userDetails => ', this.state.userDetails);
    });
  }

  deActivateAccount = () => {
    swal({
      title: "Are you sure you want to delete your account",
      text: "Once deleted, you will not be able to recover this account and its associated data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deactivateUserAccount().then(res => {
          if (res.status === 200) {
            localStorage.clear();
            this.props.history.push('/home');
          }
        }).catch(err => {
          notification.open({
            message: 'Error',
            description: 'There was an error while deactivating your account!'
          })
        })
      } else {
        swal("Your Account is safe!");
      }
    });
  }

  editUserDetails = () => {
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
      trustpilotConnectedUrl: getUserDetail('trustpilotConnectedUrl'),
      glassdoorConnnectedUrl: getUserDetail('glassdoorConnnectedUrl'),
      connectFacebookBusinessUrl: getUserDetail('connectFacebookBusinessUrl'),
      active: true,
      industryId: getUserDetail('industryId'),
      companyUserId: getUserDetail('companyUserId'),
      jobTitle: getUserDetail('jobTitle'),
      userDto: {
        id: getUserDetail('userId'),
        foreName: this.state.firstName,
        surName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        email: this.state.userEmail,
        password: '',
        photoPath: null
      }
    }
    if (getUserDetail('roles') === 'Buyer') {
      data.buyerTemplate = this.state.storeTemplateDetails ? this.state.storeTemplateDetails : getUserDetail('buyerTemplate')
      editBuyerDetails(data).then(res => {
        if (res.status === 200) {
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
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
      })
    } else if (getUserDetail('roles') === 'Seller') {
      data.sellerCategoryId = getUserDetail('sellerCategoryId')
      data.sellerTemplate = this.state.storeTemplateDetails ? this.state.storeTemplateDetails : getUserDetail('sellerTemplate')
      editSellerDetails(data).then(res => {
        if (res.status === 200) {
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
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
      })
    }
  }

  changeUserDetails = (key, event) => {
    this.setState({ enableButton: true })
    if (key === 'firstName') {
      this.setState({ firstName: event });
    } else if (key === 'lastName') {
      this.setState({ lastName: event });
    } else if (key === 'phoneNumber') {
      this.setState({ phoneNumber: event });
    }
  }

  discardAllUpdates = () => {
    this.setState({
      firstName: getUserDetail('foreName'),
      lastName: getUserDetail('surName'),
      phoneNumber: getUserDetail('phoneNumber'),
      enableButton: false
    });
  }

  changeHandler = (event) => {
    this.setState({ enableButton: true })
    const data = {
      companyId: getUserDetail('companyId'),
      template: event
    };
    this.setState({ storeTemplateDetails: event, updatedTemplateDetails: data, enableButtonTemplate: true });
  }

  render() {

    const pathList = [{ to: "/general-settings", title: "General Settings" }];

    return (

      <div className="custom-ant-form general_settings">
        <BreadCrumbs title="General Settings" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <SideNav />
            </div>

            <div className="col-xl-9 col-lg-9">
              <div className="sptb pb-0">
                <div className="card mb-0">
                  <Form initialValues={{ remember: false }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-12 border-radius-4 mb-md-5 mb-sm-3">
                          <div className="company-profile-head bg-background3">
                            <div className="company-img">
                              <div className="profile-pic">
                                <div className="profile-pic-img">
                                  <span className="edit-profile-img dots" data-toggle="tooltip" data-placement="top" title="Edit picture">
                                    <i className="fa fa-pencil" aria-hidden="true"></i>
                                  </span>
                                  <img src={require('../assets/images/users/male/25.jpg')} className="brround" alt="user" />
                                </div>
                              </div>
                            </div>
                            <div className="company-content">
                              <div className="company-name fs-18 font-weight-semibold">{getUserDetail('userName')}</div>
                              <div className="company-name fs-18 font-weight-semibold">{this.state.location}</div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-sm-6 custom-typography">
                          <label className="form-label">First Name</label>
                          <Typography.Text className="typography-text" editable={{ onChange: e => { this.changeUserDetails('firstName', e) } }}>{this.state.firstName}</Typography.Text>
                        </div>
                        <div className="form-group col-sm-6 custom-typography">
                          <label className="form-label">Last Name</label>
                          <Typography.Text className="typography-text" editable={{ onChange: e => { this.changeUserDetails('lastName', e) } }}>{this.state.lastName}</Typography.Text>
                        </div>
                        <div className="form-group col-sm-6 custom-typography">
                          <label className="form-label">Email</label>
                          <Typography.Text className="typography-text" editable={false}>{this.state.userEmail}</Typography.Text>
                        </div>
                        <div className="form-group col-sm-6 custom-typography">
                          <label className="form-label">Mobile Number</label>
                          <Typography.Text className="typography-text" editable={{ onChange: e => { this.changeUserDetails('phoneNumber', e) } }}>{this.state.phoneNumber}</Typography.Text>
                        </div>
                        <div className="form-group col-sm-6 custom-typography">
                          <label className="form-label">{getUserDetail('roles') + " " + 'Template'}</label>
                          <Typography.Text editable={{ onChange: e => { this.changeHandler(e) } }} >{this.state.storeTemplateDetails}</Typography.Text>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer text-right">
                      <Form.Item>
                        <Button className="btn btn-danger mr-2" onClick={() => this.discardAllUpdates()}>Discard Changes</Button>
                        <Button className="btn btn-primary" disabled={!this.state.enableButton} onClick={() => this.editUserDetails()}>Update User Details</Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>

              <div className="sptb low-pad-top">
                <div className="card mb-0">
                  <div className="card-header d-flex justify-content-end ">
                    <button className="btn btn-danger" onClick={() => this.deActivateAccount()}>Deactivate Your Account</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}