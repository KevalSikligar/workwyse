import React, { Component } from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default class Pricing extends Component {

    render() {

        const pathList = [
            { to: "/pricing", title: "Pricing" }
        ]

        return (
            <div>
                <BreadCrumbs title="Pricing" breadcrumbssegment={pathList} />
                <div className="sptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-6 col-sm-12 col-lg-3">
                                <div className="pricingTable2 primary h-100">
                                    <div className="pricingTable2-header">
                                        <h3>BUYERS</h3> <span>Completely free for Buyers , Forever</span>
                                    </div>
                                    <div className="pricing-plans">
                                        <span className="price-value1"><span>£0.00</span></span>
                                        <span className="month">/month</span>
                                    </div>
                                    <div className="pricingContent2">
                                        <ul>
                                            <li><b>Project Posts</b></li>
                                            <li><b>x5> Contact Requests </b> per Project</li>
                                            <li><b>Messaging System</b> </li>
                                            <li><b>Admin Dashboard </b></li>
                                            <li><b>Accept/Reject Responses </b></li>
                                        </ul>
                                    </div>
                                    <div className="pricingTable2-sign-up"> <a href="#" className="btn btn-block btn-primary">Post A Project</a> </div>
                                </div>
                            </div>
                            {/* second card */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-lg-3">
                                <div className="pricingTable2 orange h-100">
                                    <div className="pricingTable2-header"> <h3>SELLERS</h3>
                                        <span>Freemium</span>
                                    </div>
                                    <div className="pricing-plans">
                                        <span className="price-value1"><span>£0.00</span></span>
                                        <span className="month">/month</span> </div> <div className="pricingContent2">
                                        <ul>
                                            <li><b>Notifications on leads </b></li>
                                            <li><b>(via</b> email/browser)</li>
                                            <li><b>x25 Contact Request</b> (per week)</li>
                                            <li><b>Messaging System</b></li>
                                            <li><b>Admin dashboard</b></li>
                                        </ul>
                                    </div>
                                    <div className="pricingTable2-sign-up"> <a href="#" className="btn btn-block btn-secondary">Sign up</a> </div>
                                </div>
                            </div>
                            {/* third card */}
                            <div className="col-xl-4 col-md-6 col-sm-12 col-lg-3">
                                <div className="pricingTable2 green h-100">
                                    <div className="pricingTable2-header"> <h3>SELLERS</h3> <span>What does cost</span> </div>
                                    <div className="pricing-plans">
                                        <span className="price-value1"><span>£5.00</span></span>
                                        <span className="month">/premium lead</span>
                                    </div>
                                    <div className="pricingContent2">
                                        <ul>
                                            <li><b>Contact requests to/from buyers that are ready to hire now. </b></li>
                                            <li><b>Purchase as many premium leads as you wish </b> and</li>
                                            <li><b>Pay at the end of</b> each week</li>
                                            <li><b>Receive buyer contact and project details</b></li>
                                            <li><b>Secure Payment</b> via Stripe</li>
                                        </ul>
                                    </div>
                                    <div className="pricingTable2-sign-up"> <a href="#" className="btn btn-block btn-success">sign up</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
