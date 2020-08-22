import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideNav() {
    return (
        <div>
            <section className="sptb">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">My Dashboard</h3>
                    </div>
                    <div className="card-body text-center item-user border-bottom">
                        <div className="profile-pic">
                            <div className="profile-pic-img">
                                <span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
                                <img src={require('../assets/images/users/male/25.jpg')} className="brround" alt="user" />
                            </div>
                            <a href="!#" className="text-dark"><h4 className="mt-3 mb-0 font-weight-semibold">Robert McLean</h4></a>
                        </div>
                    </div>
                    <div className="item1-links mb-0">
                        <NavLink to="/find-buyer" activeClassName="active" className=" d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-briefcase fs-20"></i>
                            </span> Find Buyer
						</NavLink>
                        <a href="!#" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-cog-outline fs-20"></i>
                            </span> Settings
						</a>
                        <NavLink to="/general-setting" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-edit fs-20"></i>
                            </span> My Profile
						</NavLink>
                        <NavLink to="/my-company" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-edit fs-20"></i>
                            </span> My Company
						</NavLink>
                        <NavLink to="/service-setting" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-cog-outline fs-20"></i>
                            </span> Services
						</NavLink>
                        <NavLink to="/location-setting" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-cog-outline fs-20"></i>
                            </span> Location
						</NavLink>
                        <NavLink to="/notifications" activeClassName="active" className="d-flex  border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-folder fs-20"></i>
                            </span> Notifications
						</NavLink>
                        <NavLink to="/reviews" activeClassName="active" className=" d-flex  border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-credit-card fs-20"></i>
                            </span> Reviews
						</NavLink>
                        <NavLink to="/billings" activeClassName="active" className="d-flex  border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-shopping-cart fs-20"></i>
                            </span> Billings
						</NavLink>
                        <NavLink to="/inbox" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-flag-outline fs-20"></i>
                            </span> Inbox
						</NavLink>
                    </div>
                </div>
                {/* <section className="sptb bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-6 col-md-12">
                                <div className="sub-newsletter">
                                    <h3 className="mb-2"><i className="fa fa-paper-plane-o mr-2"></i> Subscribe To Our Onlinesletter</h3>
                                    <p className="mb-0">Get all latest information</p>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xl-6 col-md-12">
                                <div className="input-group sub-input mt-1">
                                    <input type="text" className="form-control input-lg " placeholder="Enter your Email" />
                                    <div className="input-group-append ">
                                        <button type="button" className="btn btn-primary btn-lg br-tr-3  br-br-3">
                                            Subscribe
								                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </section>
        </div>
    )
}
