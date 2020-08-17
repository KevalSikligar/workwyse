import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import * as $ from 'jquery';

export default function FAQ() {

    const pathList = [
        { to: "/faq", title: "FAQ" }
    ];

    return (
        <div>
            <BreadCrumbs title="FAQ" breadcrumbssegment={pathList} />
            <div class="sptb">
                <div class="container">
                    <div class="bs-example">
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                                            How do Buyers get in touch with Sellers?  <i class="fa fa-plus"></i>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">                                        
                                        <div class="privacy-sub-section">
                                        <h4>There are two ways for Buyers to initiate contact:</h4>
                                        <ul>
                                            <li>Send a 'Work With' request that invites them to your project. You can send requests out to a maximum of 5 Sellers.</li>
                                            <li>Alternatively, if you decide do not to send any requests. up to 5 Sellers can contact you.</li>
                                            <li>Send a personalised message directly to Sellers</li>
                                            <li>Feel free to share any details once you connect!</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h2 class="mb-0">
                                        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"> How does it work for sellers? <i class="fa fa-plus"></i></button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p>You are matched with Buyers based on your company details. These are set during the sign-up proces. You can also amend your service tags under 'Location & Services' in the settings menu.</p>
                                        <p>You can send a 'Work with' request to Buyers (limited to x25 a week). if a Buyer responds. you can then converse with them further .</p>
                                        <p>We only charge for 'Replay to Hire' leads. This costs $5 each with the billing cycle at the end of each week. You can update your billing details under 'Billing' in the Settings menu. (See 'Pricing')</p>
                                        <p>Leads that are not at the 'Ready to Hire' stage are free to contact. (See 'Pricing')</p>
                                        <p>You can respond to direct messages sent from Buyers.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h2 class="mb-0">
                                        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"> How do users communicate? <i class="fa fa-plus"></i></button>
                                    </h2>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <p>We provide an in-built messaging platform for smooth communication.</p>
                                        <p>File links can be uploaded via Google Drive or Dropbox.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingFour">
                                    <h2 class="mb-0">
                                        <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"> What is the (WWI) WorkWyseIndex rating and how are profiles rated? <i class="fa fa-plus"></i></button> 
                                    </h2>
                                </div>
                                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div class="card-body">
                                    <div class="privacy-sub-section">
                                        <h4> Providing a median of the following scores.</h4>
                                        <ul class="mb-md-5">                                            
                                            <li>Glassdoor rating</li>
                                            <li>Trustpilot rating	</li>
                                            <li>Google Business rating</li>
                                            <li>Facebook Page ratting</li>
                                        </ul>
                                        </div>
                                        <p>You can see written reviews by clicking the WWI icon.</p>
                                        <p>We have our own algorithm that works based on the rating our users provide.</p>
                                        <p>You never have to worry about reviews made by poorly rated users as they won't affect your score!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
