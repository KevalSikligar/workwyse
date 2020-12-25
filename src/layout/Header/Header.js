import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Login from "../../Login/Login";
import PostProject from "../../PostProject/PostProject";
import swal from "sweetalert";
import { connect } from "react-redux";
import { logout } from "../../redux/action/User/UserAction";
import { getKey } from "../../redux/action/Category/CategoryAction";
import { clearAllData, clearProjectData, getPostAProjectData } from "../../redux/action/PostAProject/PostAProject";
import { clearSignupData } from "../../redux/action/SignUp/SignUpAction";
import { getBuyerRequests, getSellerRequests } from "../../Services/Message";
import { notification } from "antd";
import moment from 'moment';
import { setProjectRequests } from "../../redux/action/Headers/HeadersAction";
import { getUserDetail } from "../../const";
import { getToken } from "../../accessToken";
class Header extends React.Component {

  state = {
    showModal: false,
    showModalLogin: false,
    requests: [],
    userDetails: null,
    currentStep: 0,
    isInit: true
  };

  componentDidMount() {
    setTimeout(() => {
      if (getToken()) {
        this.setState({ userDetails: getUserDetail() })
        this.getRequests();
      }
    }, 3000);
  }

  componentDidUpdate = () => {
    if (this.state.isInit) {
      this.getRequests()
    }
  }

  getRequests = () => {
    if (getUserDetail('roles') === 'Seller') {
      getSellerRequests().then(res => {
        if (res.status === 200) {
          this.setState({ isInit: false });
          this.props.dispatch(setProjectRequests(res.data))
        }
      }).catch(() => {
        notification.open({
          message: 'Error',
          description: 'There was an error while fetching leads for sellers!'
        });
      });
    } else if (getUserDetail('roles') === 'Buyer') {
      getBuyerRequests().then(res => {
        if (res.status === 200) {
          this.setState({ isInit: false });
          this.props.dispatch(setProjectRequests(res.data))
        }
      }).catch(() => {
        notification.open({
          message: 'Error',
          description: 'There was an error while fetching leads for buyers!'
        });
      });
    }
  }

  feedBackForm() {
    window.open('https://forms.gle/ZdC5bdWVqxXki3KKA', '_blank');
  }

  storeLocal = () => {
    this.props.dispatch(getPostAProjectData('class', true))
  }

  dispatchFalse = () => {
    this.props.dispatch(getPostAProjectData('class', false))
  }

  render() {

    const { requests } = this.props;

    return (
      <>
        <div className="header-main">
          <div className="top-bar">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-sm-4 col-4">
                  <div className="top-bar-left d-flex">
                    <div className="clearfix">
                      <ul className="socials">
                        <li>
                          <a className="social-icon text-dark" target="_blank" href="https://www.facebook.com/workwyse/"> <i className="fa fa-facebook"></i> </a>
                        </li>
                        <li>
                          <a className="social-icon text-dark" target="_blank" href="https://twitter.com/WorkWyse"> <i className="fa fa-twitter"></i> </a>
                        </li>
                        <li>
                          <a className="social-icon text-dark" target="_blank" href="https://uk.linkedin.com/company/workwyse"> <i className="fa fa-linkedin"></i> </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-sm-8 col-8">
                  <div className="top-bar-right">
                    <ul className="custom">
                      {this.props.isLoggedIn && <li className="dropdown">
                        {requests.length > 0 ?
                          <div className="notification_dropdown">
                            <Link data-toggle="dropdown">
                              <i className="fa fa-bell mr-1"></i>
                              <span>Project Requests</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow py-0" style={{ height: 200, overflowY: "scroll" }}>
                              {requests.map((request) => <NavLink to={`/inbox/${request.projectId}`} className="dropdown-item" style={{ width: 250 }}>
                                <b>{request.projectName}</b>
                                <p style={{ fontSize: 12, margin: 0, display: "flex", justifyContent: "space-between" }}>{request.companyName} <span>{moment(request.createdDate).fromNow()}</span></p>
                              </NavLink>)}
                              <NavLink key={"requests"} to="/requests" className="dropdown-item">
                                <i className="fa fa-eye" aria-hidden="true"></i> View All
                              </NavLink>
                            </div>
                          </div>
                          : <>
                            <Link data-toggle="dropdown">
                              <i className="fa fa-bell mr-1"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow py-0 " style={{ height: 200, overflowY: "scroll" }}>
                              No Project Request
                            </div>
                          </>}
                      </li>}
                      <li className="dropdown">
                        {this.props.isLoggedIn ? (
                          <Link data-toggle="dropdown">
                            <i className="fa fa-user mr-1"></i>
                            <span>{getUserDetail('userName') ? getUserDetail('userName') : ''}</span>
                          </Link>)
                          : (
                            <>
                              <Link data-toggle="dropdown" to="/sign-up/seller">
                                <i className="fa fa-user mr-1"></i>
                                <span>Sign Up</span>
                              </Link>
                              <div
                                className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                <NavLink to="/sign-up/buyer" className="dropdown-item"> <i className="dropdown-icon icon icon-user"></i>As Buyer</NavLink>
                                <NavLink to="/sign-up/seller" className="dropdown-item"> <i className="dropdown-icon icon icon-user"></i>As Seller</NavLink>
                              </div>
                            </>
                          )}
                      </li>
                      {!this.props.isLoggedIn && (
                        <li>
                          <span data-toggle="modal" onClick={() => this.setState({ showModalLogin: true })}
                            className="cursor-pointer text-white"> Login</span>
                        </li>
                      )}
                      {this.props.isLoggedIn && (
                        <>
                          <li className="dropdown">
                            <Link data-toggle="dropdown">
                              <i className="fa fa-home mr-1"></i>
                              <span>My Dashboard</span>
                            </Link>
                            <div
                              className="dropdown-menu dropdown-menu-right dropdown-menu-arrow py-0 ">
                              <NavLink to="/general-setting" className="dropdown-item"> <i className="dropdown-icon icon icon-settings"></i> Settings </NavLink>
                              {getUserDetail('roles') === 'Seller' ?
                                <NavLink to="/find-buyer" className="dropdown-item"> <i className="dropdown-icon icon icon-user"></i> Find Buyer </NavLink>
                                :
                                <NavLink to="/inbox" className="dropdown-item"> <i className="dropdown-icon icon fa fa-inbox"></i>Inbox </NavLink>
                              }
                            </div>
                          </li>
                          <li className="dropdown">
                            <Link className="ml-1" onClick={() => this.onLogOut()}>
                              <i className="dropdown-icon icon icon-power"></i>
                              <span>Logout</span>
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky">
            <div className="horizontal-header clearfix">
              <div className="container">
                <Link to="#" className="animated-arrow" onClick={() => this.storeLocal()}>
                  <span></span>
                </Link>
                <Link to="/home" className="responsive_logo">
                  <span className="smllogo">
                    <img src={require("../../assets/images/brand/logo.png")} width="120" alt="img" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header-style horizontal-main clearfix">
          <div className="horizontal-mainwrapper container clearfix">
            <div className="desktoplogo">
              <NavLink to="/home">
                <img src={require("../../assets/images/brand/logo.png")} alt="Brand Logo" />
              </NavLink>
            </div>
            <nav className="horizontalMenu clearfix d-md-flex" onClick={(e) => this.closeDropdwn(e)}>
              <div className="horizontal-overlapbg" onClick={() => this.dispatchFalse()}></div>
              <ul className="horizontalMenu-list">
                {getUserDetail('roles') !== 'Seller' &&
                  <li>
                    <NavLink to="/home" activeClassName="active"> Home</NavLink>
                  </li>}
                {getUserDetail('roles') === 'Seller' &&
                  <li>
                    <NavLink to="/seller" activeClassName="active">Seller Dashboard</NavLink>
                  </li>}
                <li><a>About <span className="fa fa-caret-down m-0"></span></a>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/contact-us" onClick={() => this.dispatchFalse()}> Contact Us</NavLink>
                    </li>
                    <li><NavLink to="/faq" onClick={() => this.dispatchFalse()}>FAQ</NavLink></li>
                    <li><NavLink to="/pricing"
                      onClick={() => this.dispatchFalse()}>Pricing</NavLink></li>
                    <li>
                      <a href="javascript:void(0)">Legal <i
                        className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
                      <ul className="sub-menu">
                        <li><a href="javascript:void(0)">Terms <i
                          className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
                          <ul className="sub-menu">
                            <li><NavLink to="/terms-of-service" onClick={() => this.dispatchFalse()}>Terms of services</NavLink></li>
                            <li><NavLink to="/terms-and-conditions" onClick={() => this.dispatchFalse()}>Terms & conditions</NavLink></li>
                            <li><NavLink to="/privacy-policy" onClick={() => this.dispatchFalse()}>Privacy Policy</NavLink>
                            </li>
                          </ul>
                        </li>
                        <li><a href="javascript:void(0)">Privacy <i
                          className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
                          <ul className="sub-menu">
                            <li><NavLink to="/cookies" onClick={() => this.dispatchFalse()}>Cookies</NavLink> </li>
                          </ul>
                        </li>
                        <li><NavLink to="/acceptable-use" onClick={() => this.dispatchFalse()}>Acceptable Use</NavLink></li>
                      </ul>
                    </li>
                    <li><NavLink to="/news" onClick={() => this.dispatchFalse()}>News</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="/how-it-works" activeClassName="active" onClick={() => this.dispatchFalse()}>How It Works</NavLink></li>
                <li><NavLink to="/pricing" activeClassName="active" onClick={() => this.dispatchFalse()}>Pricing</NavLink></li>
                <li className="last-two-btn" onClick={() => this.dispatchFalse()}>
                  <span>
                    <NavLink to={getUserDetail('roles') === 'Seller' ? "/sign-up/buyer" : "/sign-up/seller"} className="btn btn-secondary add-post mt-1">
                      <i className="fa fa-briefcase mr-2"></i> {getUserDetail('roles') === 'Seller' ? 'Join as Buyer' : 'Join as Seller'}
                    </NavLink>
                  </span>
                </li>
                {getUserDetail('roles') !== 'Seller' &&
                  <li>
                    <button className="btn btn-success add-post mt-1" onClick={() => this.toggleModal("header")}> <i className="fa fa-edit"></i> Post a Project </button>
                  </li>}
              </ul>
            </nav>
          </div>
          <PostProject
            isOpenModal={this.state.showModal}
            closeModal={this.closeModal}
            currentStep={this.state.currentStep}
            onClose={(reset) => this.toggleModal("header", reset)}
          />
          <Login isOpenModalLogin={this.state.showModalLogin} onCloseLogin={() => this.setState({ showModalLogin: !this.state.showModalLogin })} />
        </div>
      </>
    );
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  onLogOut = () => {
    this.props.dispatch(logout());
    this.props.history.push('/home');
  };

  toggleModal = (key, resetCallback = () => { }) => {
    console.log('resetCallback =>', resetCallback)
    if (localStorage.getItem('buyerId') && localStorage.getItem('projectIdDashboard')) {
      this.props.dispatch(logout());
      this.props.dispatch(getPostAProjectData('current', 0))
      this.props.dispatch(clearSignupData());
      this.props.dispatch(clearAllData());
      this.props.dispatch(clearProjectData());
    }
    this.props.dispatch(getKey(key))
    if (this.state.showModal) {
      swal("Are you sure you want to Quit the process?", {
        buttons: { cancel: "No", catch: "Yes" },
        icon: "error",
      }).then((value) => {
        console.log('this.state.current => ', this.state.current);
        switch (value) {
          case "catch":
            this.setState({ showModal: false }, () => {
              this.props.dispatch(getPostAProjectData('current', 0))
              this.props.dispatch(clearSignupData());
              this.props.dispatch(clearAllData());
              this.props.dispatch(clearProjectData());
              resetCallback()
            });
            break;
          case "cancel":
            // this.setState({showModal: false, currentStep: currentStep});
            // break;
            return;
          default:
            this.setState({ showModal: true, });
        }
      });
    } else {
      this.setState({ showModal: true });
    }

  };

  closeDropdwn = (e) => {
    e.preventDefault();
    if (document.body.classList.contains("active")) {
      document.body.classList.remove("active");
    }
  };

}

const mapStateToProps = (state) => {
  return {
    requests: state.header.requests,
    isLoggedIn: localStorage.getItem('projectIdDashboard') ? false : state.user.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(Header));