import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
export default function MyCompany() {
    const pathList = [
        { to: "/my-company", title: "My Company" }
    ]
    return (
        <div>
            <BreadCrumbs title="My Company" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <div className="card mb-0">
                            {/* <div className="card-header">
                                <h3 className="card-title">My Company</h3>
                            </div> */}
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
                                                <div className="company-name fs-18 mb-1 font-weight-semibold">Narola Solution</div>
                                                <div className="company-name fs-18 font-weight-semibold">Surat Gujarat</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12">
                                        <label className="form-label text-dark fs-16 mb-5">A Multi-Service Marketing Agency. We specialise in the FMCG, wholesale and local business sectors.</label>
                                        <div className="custom-controls-stacked rdb-steps-1">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Company Name</label>
                                                        <input type="text" className="form-control position-relative" placeholder="Company Name (Via API)" />
                                                        <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Company Number</label>
                                                        <input type="text" className="form-control position-relative" placeholder="Number" value="654321" />
                                                        <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">VAT Number</label>
                                                        <input type="text" className="form-control" placeholder="VAT Number" value="123456" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Company Size</label>
                                                        <select className="form-control">
                                                            <option>5 -15</option>
                                                            <option>15 -50</option>
                                                            <option>50 -100</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Operation(s)</label>
                                                        <select className="form-control">
                                                            <option>Local</option>
                                                            <option>Data Operator</option>
                                                            <option>Project Manager</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Service Focus</label>
                                                        <select className="form-control">
                                                            <option>Web Design</option>
                                                            <option>Graphics Design</option>
                                                            <option>Application Design</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Industry Focus</label>
                                                        <select className="form-control">
                                                            <option>wholesale</option>
                                                            <option>Dealer</option>
                                                            <option>Buyer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Company Link</label>
                                                        <input type="text" className="form-control" placeholder="Number" value="www.marketing.inc" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">External Link 1</label>
                                                        <input type="text" className="form-control" placeholder="VAT Number" value="External Link 2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">External Link 2 </label>
                                                        <input type="text" className="form-control" placeholder="Number" value="External Link 3" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">External Link 3</label>
                                                        <input type="text" className="form-control" placeholder="VAT Number" value="External Link 4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-right">
                                <Button className="btn btn-danger  mr-2">Cancel</Button>
                                <Button className="btn btn-primary">Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
