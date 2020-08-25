/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class CompanyDetails5 extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1]
        const pathList = [
            { to: `/sign-up/${route}`, title: "Sign Up" }
        ]
        return (
            <>
                <BreadCrumbs title="Sign Up" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={85} />

                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile</h3>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="text-dark fs-16">Please select which review sites you would like to connect</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="review-item">
                                                <div className="review-img">
                                                    <img src={require('../assets/images/trustpilot-logo.png')} className="logo-image img-fluid" alt="img" />
                                                </div>
                                                <div className="review-content">
                                                    <button className="btn review-btn">Trustpilot Connected</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="review-item">
                                                <div className="review-img">
                                                    <img src={require('../assets/images/glassdoor-logo.svg')} className="logo-image img-fluid" alt="img" />
                                                </div>
                                                <div className="review-content">
                                                    <button className="btn review-btn">Glassdoor Connected</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="review-item">
                                                <div className="review-img">
                                                    <img src={require('../assets/images/google-logo.png')} className="logo-image img-fluid" alt="img" />
                                                </div>
                                                <div className="review-content">
                                                    <button className="btn review-btn">Google Connected</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="review-item">
                                                <div className="review-img">
                                                    <img src={require('../assets/images/facebook-logo.png')} className="logo-image img-fluid" alt="img" />
                                                </div>
                                                <div className="review-content">
                                                    <button className="btn review-btn">Facebook Connected</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="info-section">
                                                <p className="text-dark fs-18">Connecting review sites increases the ranking of your posts, ensuring a swifter response from our Sellers. You can complete this step anytime via Settings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-info mr-2" onClick={this.back} > Back </Button>
                                    <Button className="btn btn-warning mr-2" onClick={this.saveAndContinue} > Skip </Button>
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue} > Next </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}