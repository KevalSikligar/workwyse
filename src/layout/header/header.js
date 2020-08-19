/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false)
    console.log('showMenu => ', showMenu);


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
                                                    <a href="#" className="dropdown-item">English</a>
                                                    <a className="dropdown-item" href="#">Arabic</a>
                                                    <a className="dropdown-item" href="#">German</a>
                                                    <a href="#" className="dropdown-item" >Greek</a>
                                                    <a href="#" className="dropdown-item" >Spanish</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-sm-8 col-5">
                                <div className="top-bar-right">
                                    <ul className="custom">
                                        <li>
                                            <a href="#" className=""><i className="fa fa-user mr-1"></i>
                                                <span>Register</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className=""><i className="fa fa-sign-in mr-1"></i>
                                                <span>Login</span>
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="" data-toggle="dropdown"><i className="fa fa-home mr-1"></i>
                                                <span> My Dashboard</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                <a href="mydash.html" className="dropdown-item"><i className="dropdown-icon icon icon-user"></i> My Profile</a>
                                                <a className="dropdown-item" href="#"><i className="dropdown-icon icon icon-speech"></i> Inbox</a>
                                                <a className="dropdown-item" href="#"><i className="dropdown-icon icon icon-bell"></i> Notifications</a>
                                                <a href="mydash.html" className="dropdown-item" ><i className="dropdown-icon  icon icon-settings"></i> Account Settings</a>
                                                <a className="dropdown-item" href="#"><i className="dropdown-icon icon icon-power"></i> Log out</a>
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
                        <a href="index.html"><img src={require("../../assets/images/brand/logo.png")} alt="" /></a>
                    </div>
                    <nav className="horizontalMenu clearfix d-md-flex" onClick={(e) => closeDropdwn(e)} >
                        <div class="horizontal-overlapbg"></div>
                        <ul className="horizontalMenu-list">
                            <li><NavLink to="/about-us" activeClassName="active">About Us </NavLink></li>
                            <li><NavLink to="/faq" activeClassName="active">FAQ </NavLink></li>
                            <li><NavLink to="/how-it-works" activeClassName="active">How It Works </NavLink></li>
                            <li><NavLink to="/terms-of-service" activeClassName="active">Terms of Service </NavLink></li>
                            <li><NavLink to="/privacy-policy" activeClassName="active">Privacy Policy </NavLink></li>
                            {/* <li><NavLink to="/pricing" activeClassName="active">Pricing </NavLink></li> */}
                            <li className="dropdown d-none d-xl-inline-block">
                                <a href="#" className="" data-toggle="dropdown">
                                    <span>Settings<i className="fa fa-caret-down"></i></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <NavLink className="dropdown-item" to="/general-setting">General Settings</NavLink>
                                    <NavLink to="/profile-setting" className="dropdown-item">Profile Settings</NavLink>
                                    <NavLink className="dropdown-item" to="/location-setting">Location Settings</NavLink>
                                </div>
                            </li>
                        </ul>
                        <ul className="mb-0 pr-2">
                            <li className="d-none d-lg-flex">
                                <span><a className="btn btn-secondary ad-post mt-1" href="ad-posts.html"><i className="fa fa-briefcase"></i> Join as Seller</a></span>
                            </li>
                        </ul>
                        <ul className="mb-0 pl-2 create-resume-btn">
                            <li className="d-none d-lg-flex">
                                <span><a className="btn btn-info ad-post mt-1" href="create-resume.html"><i className="fa fa-edit"></i> Post a Project</a></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
