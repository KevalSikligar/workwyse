import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import SideNav from '../SideNav/SideNav';

export default function GeneralSettings() {

    const pathList = [
        { to: "/general-settings", title: "General Settings" }
    ]

    const blurEventFunc = (e) => {
        document.getElementById("myDIV").style.borderColor = "#ddd";
    }

    const myFunction = (e) => {
        document.getElementById("myDIV").style.borderColor = "#5e59e9";
        document.getElementById("myDIV").addEventListener('blur', blurEventFunc);
    }

    return (
        <div>
            <BreadCrumbs title="General Settings" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12">
                        <div className="sptb pb-0">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h3 className="card-title">Edit Profile</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-12 bg-background3 border-radius-4 mb-md-5 mb-sm-3">
                                            <div className="company-profile-head">
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
                                                    <div className="company-name fs-18 mb-1 font-weight-semibold">Robert McLean</div>
                                                    <div className="company-name fs-18 font-weight-semibold">London, United Kingdom</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="form-label">Email</label>
                                            <input type="text" className="form-control" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" placeholder="07*** *****/ 01166 ******" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label className="form-label">Post</label>
                                            <input type="text" className="form-control" placeholder="Sales Director" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-danger  mr-2">Cancel</Button>
                                    <Button className="btn btn-primary">Save</Button>
                                </div>
                            </div>
                        </div>
                        <div className="sptb low-pad-top">
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h3 className="card-title">Account Settings</h3>
                                </div>
                                {/* Connect with linkedin */}
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="text" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Current Password</label>
                                        <input type="password" className="form-control" placeholder="Current Password" />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <label className="form-label">New Password</label>
                                            <input type="password" className="form-control" placeholder="New Password" />
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <label className="form-label">Confirm Password</label>
                                            <input type="password" className="form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Seller Template <span className="ml-2 edittemplate"><i class="typcn typcn-edit fs-20" onClick={() => myFunction()}></i></span></label>
                                        <p id="myDIV" contentEditable="true" className="templatedata" onClick={() => myFunction()}>
                                            Hi, I'm interested in working with you on your project.
                                        <br />
                                        Our relationship with you is rooted in pragmatism. We respect confidentiality yet discuss your challenges honestly with you. We tell you things you may not want to heat but need to because such knowledge is vital.
                                        </p>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-danger mr-2">Cancel</Button>
                                    <Button className="btn btn-primary">Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
