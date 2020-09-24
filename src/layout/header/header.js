import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Login from '../../Login/Login';
import PostProject from '../../PostProject/PostProject';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { logout } from '../../redux/action/User/UserAction';

class Header extends React.Component {

    state = {
        showModal: false,
        showMenu: false
    }

    render() {

        return (
            <>
                <div className="header-main">
                    <div className="top-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-7 col-sm-4 col-7">
                                    <div className="top-bar-left d-flex">
                                        <div className="clearfix">
                                            <ul className="socials">
                                                <li><Link className="social-icon text-dark" ><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link className="social-icon text-dark" ><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link className="social-icon text-dark" ><i className="fa fa-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="clearfix">
                                            <ul className="contact border-left">
                                                <li className="d-lg-none">
                                                    <Link className="callnumber text-dark">
                                                        <span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-sm-8 col-5">
                                    <div className="top-bar-right">
                                        <ul className="custom">
                                            <li className="dropdown">
                                                {this.props.isLoggedIn ? <Link className="" data-toggle="dropdown"><i className="fa fa-user mr-1"></i>
                                                    <span>{this.props.username}</span>
                                                </Link> : <>
                                                        <Link className="" data-toggle="dropdown"><i className="fa fa-user mr-1"></i>
                                                            <span>Sign Up</span>
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                            <NavLink to="/sign-up/buyer" className="dropdown-item"><i className="dropdown-icon icon icon-user"></i> As Buyer</NavLink>
                                                            <NavLink to="/sign-up/seller" className="dropdown-item" ><i className="dropdown-icon icon icon-user"></i> As Seller</NavLink>
                                                        </div>
                                                    </>}
                                            </li>
                                            {!this.props.isLoggedIn &&
                                                <li>
                                                    <span data-toggle="modal" data-target="#ModalLogin" className="cursor-pointer text-white">Login</span>
                                                </li>
                                            }
                                            <li className="dropdown">
                                                <Link className="" data-toggle="dropdown"><i className="fa fa-home mr-1"></i>
                                                    <span>My Dashboard</span>
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow py-0">
                                                    <NavLink to="/general-setting" className="dropdown-item"><i className="dropdown-icon  icon icon-settings"></i> Settings</NavLink>
                                                    <button className="logout-btn" onClick={() => this.onLogOut()}><NavLink to="/home" className="dropdown-item" ><i className="dropdown-icon icon icon-power"></i> Logout</NavLink></button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky">
                        <div className="horizontal-header clearfix">
                            <div className="container">
                                <Link id="horizontal-navtoggle" className="animated-arrow" onClick={(e) => this.DisplayMenu(e)}><span></span></Link>
                                <span className="smllogo"><img src={require("../../assets/images/brand/logo.png")} width="120" alt="img" /></span>
                                <Link className="callusbtn bg-light"><i className="fa fa-bell text-body" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-style horizontal-main clearfix">
                    <div className="horizontal-mainwrapper container clearfix">
                        <div className="desktoplogo">
                            <NavLink to="/home"><img src={require("../../assets/images/brand/logo.png")} alt="Brand Logo" /></NavLink>
                        </div>
                        <nav className="horizontalMenu clearfix d-md-flex" onClick={(e) => this.closeDropdwn(e)} >
                            <div className="horizontal-overlapbg"></div>
                            <ul className="horizontalMenu-list">
                                <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                                <li><NavLink to="/dashboard-buyer" activeClassName="active">Switch to Buyer/Seller</NavLink></li>
                                <li className="dropdown">
                                    <Link data-toggle="dropdown">About</Link>
                                    <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                        <li><NavLink to="/about-us" activeClassName="active">About WorkWyse </NavLink></li>
                                        <li><NavLink to="/faq" activeClassName="active">FAQ </NavLink></li>
                                        <li><NavLink to="/terms-of-service" activeClassName="active">Terms of Service </NavLink></li>
                                        <li><NavLink to="/privacy-policy" activeClassName="active">Privacy Policy </NavLink></li>
                                        <li><NavLink to="/how-it-works" activeClassName="active">How It Works </NavLink></li>
                                        <li><NavLink to="/pricing" activeClassName="active">Pricing </NavLink></li>
                                        <li><NavLink to="/news" activeClassName="active">News </NavLink></li>
                                    </div>
                                </li>
                                <li><NavLink to="/how-it-works" activeClassName="active">How It Works </NavLink></li>
                                <li><NavLink to="/pricing" activeClassName="active">Pricing </NavLink></li>
                            </ul>
                            <ul className="mb-0 pr-2">
                                <li className="d-none d-lg-flex">
                                    <span><NavLink to="/sign-up/seller" className="btn btn-secondary add-post mt-1"><i className="fa fa-briefcase"></i> Join as Seller</NavLink></span>
                                </li>
                            </ul>
                            <ul className="mb-0 pl-2 create-resume-btn">
                                <li className="d-none d-lg-flex">
                                    <button className="btn btn-success add-post mt-1" onClick={() => this.toggleModal()}>
                                        <i className="fa fa-edit"></i> Post a Project</button>
                                    <PostProject isOpenModal={this.state.showModal} onClose={() => this.toggleModal()} />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Login id="ModalLogin"></Login>
                </div>
            </>
        )
    }

    onLogOut = () => {
        this.props.dispatch(logout());
    }

    DisplayMenu = (e) => {
        e.preventDefault()
        this.setState({ showMenu: true });
        document.body.classList.add('active');
    }

    toggleModal = () => {
        if (this.state.showModal === true) {
            this.setState({ showModal: false })
        } else {
            this.setState({ showModal: true })
        }
        if (this.state.showModal === true) {
            swal("Are you sure you want to Quit the process??", {
                buttons: { cancel: "Continue", catch: "OK" },
            }).then((value) => {
                switch (value) {
                    case "catch":
                        this.setState({ showModal: false });
                        break;
                    default:
                        this.setState({ showModal: true });
                }
            });
        }
    }

    closeDropdwn = (e) => {
        e.preventDefault()
        if (document.body.classList.contains('active')) {
            document.body.classList.remove('active');
        }
    }

}

const mapStateToProps = state => {
    console.log('state => ', state);

    return {
        username: state.user.user,
        isLoggedIn: state.user.isLoggedIn
    }
}


export default connect(mapStateToProps)(Header)


