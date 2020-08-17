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
                        <div class="col-xl-3 col-md-6 col-sm-12 col-lg-3"> 
                            <div class="pricingTable2 primary"> 
                                <div class="pricingTable2-header"> 
                                    <h3>Free</h3> <span>Lorem ipsum dolor</span> 
                                </div> 
                                <div class="pricing-plans"> 
                                    <span class="price-value1"><i class="fa fa-usd"></i><span>0.00</span></span> 
                                    <span class="month">/month</span> 
                                </div> 
                                <div class="pricingContent2"> 
                                    <ul> 
                                        <li><b>Free</b> Ad posting</li> 
                                        <li><b>0</b> Featured Classes</li> 
                                        <li><b>100%</b> Secure</li> 
                                        <li><b>Custome</b> Reviews</li> 
                                        <li><b>24/7</b> Support</li> 
                                    </ul> 
                                </div>
                                <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-primary">sign up</a> </div> 
                            </div>                            
                        </div>
                         {/* second card */}
                         <div class="col-xl-3 col-md-6 col-sm-12 col-lg-3"> 
                                <div class="pricingTable2 orange"> 
                                    <div class="pricingTable2-header"> <h3>Premium</h3> <span>Lorem ipsum dolor</span> </div> 
                                    <div class="pricing-plans"> 
                                        <span class="price-value1"><i class="fa fa-usd"></i><span>19</span></span> 
                                        <span class="month">/month</span> </div> <div class="pricingContent2"> 
                                        <ul> 
                                            <li><b>Featured</b> Ad posting</li> 
                                            <li><b>20</b> Featured Classes</li> 
                                            <li><b>100%</b> Secure</li> 
                                            <li><b>Custome</b> Reviews</li> 
                                            <li><b>24/7</b> Support</li> 
                                        </ul> 
                                    </div>
                                    <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-secondary">sign up</a> </div> 
                                </div> 
                            </div>
                        {/* third card */}
                        <div class="col-xl-3 col-md-6 col-sm-12 col-lg-3"> 
                            <div class="pricingTable2 green"> 
                                <div class="pricingTable2-header"> <h3>Silver</h3> <span>Lorem ipsum dolor</span> </div> 
                                <div class="pricing-plans"> 
                                    <span class="price-value1"><i class="fa fa-usd"></i><span>67</span></span> 
                                    <span class="month">/month</span> 
                                </div> 
                                <div class="pricingContent2"> 
                                    <ul> 
                                        <li><b>Featured</b> Ad posting</li> 
                                        <li><b>30</b> Featured Classes</li> 
                                        <li><b>100%</b> Secure</li> <li><b>Custome</b> Reviews</li> 
                                        <li><b>24/7</b> Support</li> 
                                    </ul> 
                                </div> 
                                <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-success">sign up</a> </div>
                            </div> 
                        </div>
                        {/* fourth card */}
                        <div class="col-xl-3 col-md-6 col-sm-12 col-lg-3"> 
                            <div class="pricingTable2 info"> 
                                <div class="pricingTable2-header"> <h3>Gold</h3> <span>Lorem ipsum dolor</span> </div> 
                                <div class="pricing-plans"> 
                                    <span class="price-value1"><i class="fa fa-usd"></i><span>78</span></span> 
                                    <span class="month">/month</span> </div> <div class="pricingContent2"> 
                                    <ul> 
                                        <li><b>Featured</b> Ad posting</li> 
                                        <li><b>40</b> Featured Classes</li> 
                                        <li><b>100%</b> Secure</li> <li><b>Custome</b> Reviews</li> 
                                        <li><b>24/7</b> Support</li> 
                                    </ul> 
                                </div> 
                                <div class="pricingTable2-sign-up"> <a href="#" class="btn btn-block btn-info">sign up</a> </div>
                            </div> 
                        </div>
                        
                        
                        
                        </div>
            {/* row */}
                        
                    </div>
                </div>
                {/* <h3>
                    Pricing
                    We've kept things simple here.
                    Sign Up Completely free, always
                    Free Leads Buyers who aren't certain of hiring just yet can be freely contacted. You can see the buying stage next to the project details; - Very likely to hire - I'm doing my research - Looking for quotes
                    Find Buyer
                    Paid Leads Buyers who are at the latest buying stage / lower down the sales funnel will have 'Ready to Hire' with a small star next to the project details, To contact these leads, there is a fixed cost of £5 to contact them. Sellers are billed on a weekly basis for the number of leads they have requested to work with.
                    FAQs
                    What customer details do I get? When you respond to a lead, you'll get the customer's email address and can contact them freely via Workwyse's messaging service or via email. Sometimes, leads also add in a contact number
                    Do I get charged per message? No, only the initial 'WorkWith' request message has a cost associated of £5. This is for requests sent to you, or requests that you send;
                </h3> */}
            </div>
        )
    }
}
