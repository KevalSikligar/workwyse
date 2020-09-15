import React from 'react';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to="/inbox" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="fa fa-envelope fs-16"></i>
                            </span> Inbox
						</NavLink>
                        <NavLink to="/posts" activeClassName="active" className=" d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="fa fa-sticky-note fs-16"></i>
                            </span> Posts
						</NavLink>
                        <NavLink to="/general-setting" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-user fs-20"></i>
                            </span> My Profile
						</NavLink>
                        <NavLink to="/my-company" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="fa fa-building fs-16"></i>
                            </span> My Company
						</NavLink>
                        <NavLink to="/service-setting" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-cog-outline fs-20"></i>
                            </span> Services
						</NavLink>
                        <NavLink to="/location-setting" activeClassName="active" className="d-flex border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-location fs-20"></i>
                            </span> Location
						</NavLink>
                        <NavLink to="/notifications" activeClassName="active" className="d-flex  border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-bell fs-20"></i>
                            </span> Notifications
						</NavLink>
                        <NavLink to="/reviews" activeClassName="active" className=" d-flex  border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-star-outline fs-20"></i>
                            </span> Reviews
						</NavLink>
                        <NavLink to="/billings" activeClassName="active" className="d-flex  border-bottom">
                            <span className="icon1 mr-2">
                                <i className="typcn typcn-credit-card fs-20"></i>
                            </span> Billings
						</NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}
