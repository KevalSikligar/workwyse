import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PostProject from '../PostProject/PostProject';
import { getKey } from '../redux/action/Category/CategoryAction';
import { clearAllData, clearProjectData, getPostAProjectData } from '../redux/action/PostAProject/PostAProject';
import { getUserDetail } from '../const';
import { clearSignupData } from '../redux/action/SignUp/SignUpAction';
import { logout } from '../redux/action/User/UserAction';

class SideNav extends React.Component {

    state = {
        userDetails: null,
        showModal: false
    };

    componentDidMount() {
        this.setState({ userDetails: getUserDetail() });
    }

    addOverLay = () => {
        this.props.dispatch(getPostAProjectData('sideNavOverLay', true))
        if (this.props.sidenav.postaproject.sideNavOverLay === true) {
            this.props.dispatch(getPostAProjectData('sideNavOverLay', false))
        } else {
            this.props.dispatch(getPostAProjectData('sideNavOverLay', true))
        }
    }

    render() {

        return (

            <div className={this.props.sidenav.postaproject.sideNavOverLay === true
                ? "side_dashbord_h side_menu_dashbord mydashbord_active" :
                "side_dashbord_h side_menu_dashbord"}>
                <button className="side_dashbord_b" onClick={() => this.addOverLay()}><i className="fa fa-user-circle-o" aria-hidden="true"></i></button>
                <div className="over_overlay" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}></div>
                <section className="sptb">
                    <div className="card box_s_n">
                        <div className="card-header">
                            <h3 className="card-title">My Dashboard</h3>
                        </div>
                        <div className="card-body text-center item-user border-bottom">
                            <div className="profile-pic">
                                <div className="profile-pic-img">
                                    <span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
                                    <img src={require('../assets/images/users/male/25.jpg')} className="brround" alt="user" />
                                </div>
                                <span className="text-dark"><h4 className="mt-3 mb-0 font-weight-semibold">{getUserDetail('userName') ? getUserDetail('userName') : ''}</h4></span>
                            </div>
                        </div>
                        <div className="item1-links mb-0">
                            {getUserDetail('roles') === 'Seller' &&
                                <NavLink to="/find-buyer" activeClassName="active" className=" d-flex border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                    <span className="icon1 mr-2">
                                        <i className="typcn typcn-briefcase fs-20"></i>
                                    </span> Find Buyer
                            </NavLink>}
                            <NavLink to="/inbox" activeClassName="active" className="d-flex border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                <span className="icon1 mr-2">
                                    <i className="fa fa-envelope fs-16"></i>
                                </span> Inbox
                                </NavLink>
                            {/* } */}
                            {getUserDetail('roles') === 'Buyer' &&
                                <NavLink to={() => false} activeClassName="active" className=" d-flex border-bottom" onClick={(e) => this.toggleModal("header")}>
                                    <span className="icon1 mr-2">
                                        <i className="fa fa-sticky-note fs-16"></i>
                                    </span> Post A Project
						    </NavLink>}
                            {getUserDetail('roles') === 'Buyer' &&
                                <NavLink to="/posts" activeClassName="active" className=" d-flex border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                    <span className="icon1 mr-2">
                                        <i className="fa fa-sticky-note fs-16"></i>
                                    </span> Posts
						    </NavLink>}
                            <NavLink to="/general-setting" activeClassName="active" className="d-flex border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                <span className="icon1 mr-2">
                                    <i className="typcn typcn-user fs-20"></i>
                                </span> My Profile
						    </NavLink>
                            <NavLink to="/my-company" activeClassName="active" className="d-flex border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                <span className="icon1 mr-2">
                                    <i className="fa fa-building fs-16"></i>
                                </span> My Company
						    </NavLink>
                            {getUserDetail('roles') === 'Seller' &&
                                <NavLink to="/service-setting" activeClassName="active" className="d-flex border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                    <span className="icon1 mr-2">
                                        <i className="typcn typcn-cog-outline fs-20"></i>
                                    </span> Services
						    </NavLink>}
                            <NavLink to="/notifications" activeClassName="active" className="d-flex  border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                <span className="icon1 mr-2">
                                    <i className="typcn typcn-bell fs-20"></i>
                                </span> Notifications
						    </NavLink>
                            <NavLink to="/reviews" activeClassName="active" className=" d-flex  border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                <span className="icon1 mr-2">
                                    <i className="typcn typcn-star-outline fs-20"></i>
                                </span> Reviews
						    </NavLink>
                            {getUserDetail('roles') === 'Seller' &&
                                <NavLink to="/billing" activeClassName="active" className="d-flex  border-bottom" onClick={() => this.props.dispatch(getPostAProjectData('sideNavOverLay', false))}>
                                    <span className="icon1 mr-2">
                                        <i className="typcn typcn-credit-card fs-20"></i>
                                    </span> Billing
						    </NavLink>}
                        </div>
                    </div>
                    <PostProject isOpenModal={this.state.showModal} closeModal={this.closeModal} currentStep={this.state.currentStep}
                        onClose={(currentStep) => this.toggleModal("header", currentStep)} />
                </section>
            </div>
        )
    }

    toggleModal = (key, currentStep = 0) => {
        this.props.dispatch(getPostAProjectData('sideNavOverLay', false));
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
                switch (value) {
                    case "catch":
                        this.setState({ showModal: false }, () => {
                            this.props.dispatch(getPostAProjectData('current', 0))
                            this.props.dispatch(clearSignupData());
                            this.props.dispatch(clearAllData());
                            this.props.dispatch(clearProjectData());
                        });
                        break;
                    case "cancel":
                        return;
                    default:
                        this.setState({ showModal: true, currentStep: currentStep });
                }
            });
        } else {
            this.setState({ showModal: true });
        }
    };
}

const mapStateToProps = (state) => {
    return {
        sidenav: state
    };
};

export default connect(mapStateToProps)(SideNav);