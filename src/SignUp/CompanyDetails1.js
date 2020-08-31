/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProgressBar from 'react-bootstrap/ProgressBar'

class CompanyDetails1 extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {

        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1]
        const finalName = route.charAt(0).toUpperCase() + route.slice(1);
        const pathList = [
            { to: `/sign-up/${route}`, title: `Sign Up` }
        ]

        return (
            <>
                <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={20} />
                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile </h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Surname</label>
                                                <input type="text" className="form-control" placeholder="Surname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Email Address</label>
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Phone Number</label>
                                                <input type="text" className="form-control" placeholder="Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Company Number</label>
                                                <input type="text" className="form-control position-relative" placeholder="Number" />
                                                <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Company Name</label>
                                                <input type="text" className="form-control position-relative" placeholder="Name" />
                                                <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Trading As</label>
                                                <input type="text" className="form-control" placeholder="Trading" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Job Title</label>
                                                <input type="text" className="form-control" placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12">
                                            <label className="form-label text-dark fs-16">Show me Seller</label>
                                            <div className="custom-controls-stacked rdb-steps-1">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6 col-sm-12">
                                                        <label className="custom-control custom-radio mb-5">
                                                            <input type="radio" className="custom-control-input" defaultChecked name="example-radios3" value="option1" />
                                                            {/* <span className="">Visible to everyone</span> */}
                                                            <div className="custom-control-label d-md-flex w-100 align-items-center  ml-4">
                                                                <select className="form-control w-50">
                                                                    <option>20 miles</option>
                                                                    <option>40 miles</option>
                                                                    <option>60 miles</option>
                                                                </select>
                                                                <span className="px-5 form-label text-dark fs-16">of</span>
                                                                <div className="form-group w-50 mb-0">
                                                                    <input type="text" className="form-control position-relative" placeholder="Location" />
                                                                    <span className="map-icon"><img src={require('../assets/images/svg/gps.svg')} className="location-gps" alt="img" /></span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <label className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" name="example-radios3" value="option2" />
                                                            {/* <span className="custom-control-label">Visible to only my Customers</span> */}
                                                            <div className="custom-control-label d-md-flex w-100 align-items-center  ml-4">
                                                                <select className="form-control w-50">
                                                                    <option>20 miles</option>
                                                                    <option>40 miles</option>
                                                                    <option>60 miles</option>
                                                                </select>
                                                                <span className="px-5 form-label text-dark fs-16">of</span>
                                                                <div className="form-group w-50 mb-0">
                                                                    <input type="text" className="form-control position-relative" placeholder="Location" />
                                                                    <span className="map-icon"><img src={require('../assets/images/svg/gps.svg')} className="location-gps" alt="img" /></span>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue}>Next</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default CompanyDetails1;