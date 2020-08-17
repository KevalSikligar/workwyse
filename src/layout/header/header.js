import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <>
                <div class="header-main">
                    <div class="top-bar">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-7 col-lg-7 col-sm-4 col-7">
                                    <div class="top-bar-left d-flex">
                                        <div class="clearfix">
                                            <ul class="socials">
                                                <li><a class="social-icon text-dark" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="social-icon text-dark" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="social-icon text-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
                                                <li><a class="social-icon text-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>

                                        <div class="clearfix">
                                            <ul class="contact border-left">
                                                <li class="d-lg-none">
                                                    <a href="#" class="callnumber text-dark">
                                                        <span><i class="fa fa-phone mr-1"></i>: +425 345 8765</span>
                                                    </a>
                                                </li>
                                                <li class="dropdown d-none d-xl-inline-block">
                                                    <a href="#" class="" data-toggle="dropdown">
                                                        <span>Language<i class="fa fa-caret-down"></i></span>
                                                    </a>
                                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                        <a href="#" class="dropdown-item">English</a>
                                                        <a class="dropdown-item" href="#">Arabic</a>
                                                        <a class="dropdown-item" href="#">German</a>
                                                        <a href="#" class="dropdown-item" >Greek</a>
                                                        <a href="#" class="dropdown-item" >Spanish</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-5 col-sm-8 col-5">
                                    <div class="top-bar-right">
                                        <ul class="custom">
                                            <li>
                                                <a href="#" class=""><i class="fa fa-user mr-1"></i>
                                                    <span>Register</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class=""><i class="fa fa-sign-in mr-1"></i>
                                                    <span>Login</span>
                                                </a>
                                            </li>
                                            <li class="dropdown">
                                                <a href="#" class="" data-toggle="dropdown"><i class="fa fa-home mr-1"></i>
                                                    <span> My Dashboard</span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                                    <a href="mydash.html" class="dropdown-item"><i class="dropdown-icon icon icon-user"></i> My Profile</a>
                                                    <a class="dropdown-item" href="#"><i class="dropdown-icon icon icon-speech"></i> Inbox</a>
                                                    <a class="dropdown-item" href="#"><i class="dropdown-icon icon icon-bell"></i> Notifications</a>
                                                    <a href="mydash.html" class="dropdown-item" ><i class="dropdown-icon  icon icon-settings"></i> Account Settings</a>
                                                    <a class="dropdown-item" href="#"><i class="dropdown-icon icon icon-power"></i> Log out</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sticky">
                        <div class="horizontal-header clearfix">
                            <div class="container">
                                <a id="horizontal-navtoggle" class="animated-arrow"><span></span></a>
                                <span class="smllogo"><img src={require("../../assets/images/brand/logo.png")} width="120" alt="img" /></span>
                                <a href="#" class="callusbtn bg-light"><i class="fa fa-bell text-body" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-style horizontal-main  clearfix">
                    <div class="horizontal-mainwrapper container clearfix">
                        <div class="desktoplogo">
                            <a href="index.html"><img src={require("../../assets/images/brand/logo.png")} alt="" /></a>
                        </div>
                        <nav class="horizontalMenu clearfix d-md-flex">
                            <ul class="horizontalMenu-list">
                                <li><NavLink to="/about-us" activeClassName="active">About Us </NavLink></li>
                                <li><NavLink to="/faq" activeClassName="active">FAQ </NavLink></li>
                                <li><NavLink to="/how-it-works" activeClassName="active">How It Works </NavLink></li>
                                <li><NavLink to="/terms-of-service" activeClassName="active">Terms of Service </NavLink></li>
                                <li><NavLink to="/privacy-policy" activeClassName="active">Privacy Policy </NavLink></li>
                                <li><NavLink to="/pricing" activeClassName="active">Pricing </NavLink></li>
                            </ul>
                            <ul class="mb-0 pr-2">
                                <li class="d-none d-lg-flex">
                                    <span><a class="btn btn-secondary ad-post mt-1" href="ad-posts.html"><i class="fa fa-briefcase"></i> Join as Seller</a></span>
                                </li>
                            </ul>
                            <ul class="mb-0 pl-2 create-resume-btn">
                                <li class="d-none d-lg-flex">
                                    <span><a class="btn btn-info ad-post mt-1" href="create-resume.html"><i class="fa fa-edit"></i> Post a Project</a></span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}
