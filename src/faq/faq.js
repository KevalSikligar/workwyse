import React, { useEffect } from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';
import $ from 'jquery';
export default function FAQ() {

    const pathList = [
        { to: "/faq", title: "FAQ" }
    ];


    useEffect(() => {
        $(document).ready(function () {
            // Add minus icon for collapse element which is open by default
            $(".collapse.show").each(function () {
                console.info("show")
                $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
            });

            // Toggle plus minus icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function () {
                console.info("show collapse")
                $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
            }).on('hide.bs.collapse', function () {
                console.info("hide bs collapse")
                $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
            });
        });
    })

    return (
        <div>
            <BreadCrumbs title="FAQ" breadcrumbssegment={pathList} />
            <div className="sptb">
                <div className="container">
                    <div className="bs-example">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
                                            How do Buyers get in touch with Sellers?  <i className="fa fa-plus"></i>
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="privacy-sub-section">
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
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo"> How does it work for sellers? <i className="fa fa-plus"></i></button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>You are matched with Buyers based on your company details. These are set during the sign-up proces. You can also amend your service tags under 'Location & Services' in the settings menu.</p>
                                        <p>You can send a 'Work with' request to Buyers (limited to x25 a week). if a Buyer responds. you can then converse with them further .</p>
                                        <p>We only charge for 'Replay to Hire' leads. This costs $5 each with the billing cycle at the end of each week. You can update your billing details under 'Billing' in the Settings menu. (See 'Pricing')</p>
                                        <p>Leads that are not at the 'Ready to Hire' stage are free to contact. (See 'Pricing')</p>
                                        <p>You can respond to direct messages sent from Buyers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"> How do users communicate? <i className="fa fa-plus"></i></button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>We provide an in-built messaging platform for smooth communication.</p>
                                        <p>File links can be uploaded via Google Drive or Dropbox.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"> What is the (WWI) WorkWyseIndex rating and how are profiles rated? <i className="fa fa-plus"></i></button>
                                    </h2>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="privacy-sub-section">
                                            <h4> Providing a median of the following scores.</h4>
                                            <ul className="mb-md-5">
                                                <li>Glassdoor rating</li>
                                                <li>Trustpilot rating</li>
                                                <li>Google Business rating</li>
                                                <li>Facebook Page rating</li>
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