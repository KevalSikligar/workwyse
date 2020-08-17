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
                <div class="sptb">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-4 col-md-6 col-sm-12 col-lg-3">
                                <div class="pricingTable2 primary h-100">
                                    <div class="pricingTable2-header">
                                        <h3>BUYERS</h3> <span>Completely free for Buyers , Forever</span>
                                    </div>
                                    <div class="pricing-plans">
                                        <span class="price-value1"><span>£0.00</span></span>
                                        <span class="month">/month</span>
                                    </div>
                                    <div class="pricingContent2">
                                        <ul>
                                            <li><b>Project</b> Posts</li>
                                            <li><b>x5</b> Contact Requests per Project</li>
                                            <li><b>Messaging</b> System</li>
                                            <li><b>Admin</b> Dashboard</li>
                                            <li><b>Accept/Reject</b> Responses</li>
                                        </ul>
                                    </div>
                                    <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-primary">Post A Project</a> </div>
                                </div>
                            </div>
                            {/* second card */}
                            <div class="col-xl-4 col-md-6 col-sm-12 col-lg-3">
                                <div class="pricingTable2 orange h-100">
                                    <div class="pricingTable2-header"> <h3>SELLERS</h3>
                                        <span>&nbsp;</span>
                                    </div>
                                    <div class="pricing-plans">
                                        <span class="price-value1"><span>£19</span></span>
                                        <span class="month">/month</span> </div> <div class="pricingContent2">
                                        <ul>
                                            <li><b>Notifications</b> on leads</li>
                                            <li><b>(via</b> email/browser)</li>
                                            <li><b>x25 Contact Request</b> (per week)</li>
                                            <li><b>Messaging</b> System</li>
                                            <li><b>Admin</b> dashboard</li>
                                        </ul>
                                    </div>
                                    <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-secondary">Sign up</a> </div>
                                </div>
                            </div>
                            {/* third card */}
                            <div class="col-xl-4 col-md-6 col-sm-12 col-lg-3">
                                <div class="pricingTable2 green h-100">
                                    <div class="pricingTable2-header"> <h3>SELLERS</h3> <span>What does cost</span> </div>
                                    <div class="pricing-plans">
                                        <span class="price-value1"><span>£5.00</span></span>
                                        <span class="month">/premium lead</span>
                                    </div>
                                    <div class="pricingContent2">
                                        <ul>
                                            <li><b>Contact requests to/from buyers </b> that are ready to hire now.</li>
                                            <li><b>Purchase as many premium </b> leads as you wish and</li>
                                            <li><b>Pay at the end of</b> each week</li>
                                            <li><b>Receive buyer contact</b> and <b>project details</b></li>
                                            <li><b>Secure Payment</b> via Stripe</li>
                                        </ul>
                                    </div>
                                    <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-success">sign up</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
