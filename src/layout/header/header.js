/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Login from '../../Login/Login';


export default function Header() {

    // eslint-disable-next-line no-unused-vars
    const [showMenu, setShowMenu] = useState(false);

    const DisplayMenu = (e) => {
        e.preventDefault()
        setShowMenu(true);
        document.body.classList.add('active');
    }

    const closeDropdwn = (e) => {
        e.preventDefault()
        if (document.body.classList.contains('active')) {
            document.body.classList.remove('active');
        }
    }

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
                                            <li><a className="social-icon text-dark" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="social-icon text-dark" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="social-icon text-dark" href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a className="social-icon text-dark" href="#"><i className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="clearfix">
                                        <ul className="contact border-left">
                                            <li className="d-lg-none">
                                                <a href="#" className="callnumber text-dark">
                                                    <span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span>
                                                </a>
                                            </li>
                                            <li className="dropdown d-none d-xl-inline-block">
                                                <a href="#" className="" data-toggle="dropdown">
                                                    <span>Language<i className="fa fa-caret-down"></i></span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                    <a href="!#" className="dropdown-item">English</a>
                                                    <a href="!#" className="dropdown-item">Arabic</a>
                                                    <a href="!#" className="dropdown-item">German</a>
                                                    <a href="!#" className="dropdown-item">Greek</a>
                                                    <a href="!#" className="dropdown-item">Spanish</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-sm-8 col-5">
                                <div className="top-bar-right">
                                    <ul className="custom">
                                        <li className="dropdown">
                                            <a href="javascript:void(0)" className="" data-toggle="dropdown"><i className="fa fa-user mr-1"></i>
                                                <span>Sign Up</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <NavLink to="/sign-up/buyer" className="dropdown-item"><i className="dropdown-icon icon icon-user"></i> As Buyer</NavLink>
                                                <NavLink to="/sign-up/seller" className="dropdown-item" ><i className="dropdown-icon icon icon-user"></i> As Seller</NavLink>
                                            </div>
                                        </li>
                                        <li>
                                            <span data-toggle="modal" data-target="#ModalLogin" className="cursor-pointer text-white">Login</span>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="" data-toggle="dropdown"><i className="fa fa-home mr-1"></i>
                                                <span>My Dashboard</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                {/* <NavLink to="/general-setting" className="dropdown-item"><i className="dropdown-icon icon icon-user"></i> My Profile</NavLink>
                                            <NavLink to="/inbox" className="dropdown-item" ><i className="dropdown-icon icon icon-speech"></i> Inbox</NavLink>
                                            <NavLink to="/notifications" className="dropdown-item" ><i className="dropdown-icon icon icon-bell"></i> Notifications</NavLink> */}
                                                <NavLink to="/general-setting" className="dropdown-item"><i className="dropdown-icon  icon icon-settings"></i> Settings</NavLink>
                                                <NavLink to="/" className="dropdown-item" ><i className="dropdown-icon icon icon-power"></i> Logout</NavLink>
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
                            <a id="horizontal-navtoggle" className="animated-arrow" onClick={(e) => DisplayMenu(e)}><span></span></a>
                            <span className="smllogo"><img src={require("../../assets/images/brand/logo.png")} width="120" alt="img" /></span>
                            <a href="#" className="callusbtn bg-light"><i className="fa fa-bell text-body" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-style horizontal-main clearfix">
                <div className="horizontal-mainwrapper container clearfix">
                    <div className="desktoplogo">
                        <NavLink to="/home"><img src={require("../../assets/images/brand/logo.png")} alt="Brand Logo" /></NavLink>
                    </div>
                    <nav className="horizontalMenu clearfix d-md-flex" onClick={(e) => closeDropdwn(e)} >
                        <div className="horizontal-overlapbg"></div>
                        <ul className="horizontalMenu-list">
                            <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                            <li className="dropdown">
                                <a href="!#" data-toggle="dropdown">About</a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <li><NavLink to="/about-us" activeClassName="active">About WorkWyse </NavLink></li>
                                    <li><NavLink to="/faq" activeClassName="active">FAQ </NavLink></li>
                                    <li><NavLink to="/terms-of-service" activeClassName="active">Terms of Service </NavLink></li>
                                    <li><NavLink to="/privacy-policy" activeClassName="active">Privacy Policy </NavLink></li>
                                    <li><NavLink to="/how-it-works" activeClassName="active">How It Works </NavLink></li>
                                    <li><NavLink to="/pricing" activeClassName="active">Pricing </NavLink></li>
                                </div>
                            </li>
                            <li><NavLink to="/how-it-works" activeClassName="active">How It Works </NavLink></li>
                            <li><NavLink to="/pricing" activeClassName="active">Pricing </NavLink></li>
                        </ul>
                        <ul className="mb-0 pr-2">
                            <li className="d-none d-lg-flex">
                                <span><NavLink to="/sign-up/seller" className="btn btn-secondary ad-post mt-1"><i className="fa fa-briefcase"></i> Join as Seller</NavLink></span>
                            </li>
                        </ul>
                        <ul className="mb-0 pl-2 create-resume-btn">
                            <li className="d-none d-lg-flex">
                                <span><NavLink className="btn btn-success ad-post mt-1" to="/post-a-project"><i className="fa fa-edit"></i> Post a Project</NavLink></span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Login id="ModalLogin"></Login>
            </div>
        </>
    )
}
