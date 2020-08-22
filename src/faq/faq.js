import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';


export default class Faq extends Component {
    state = {
        index: null
    }

    onChange = (i) => {
        let res = this.state.index === i ? null : i
        this.setState({ index: res })
    }

    render() {

        const pathList = [
            { to: "/faq", title: "FAQ" }
        ];
        const data = [
            {
                mainHeading: "How do Buyers get in touch with Sellers?",
                heading: true,
                headingText: "There are two ways for Buyers to initiate contact:",
                privacy: true,
                headingId: "headingOne",
                collapseTarget: "collapseOne",
                onlyPara: false,
                ul: true,
                ulText: [
                    "Send a 'Work With' request that invites them to your project. You can send requests out to a maximum of 5 Sellers.",
                    "Alternatively, if you decide do not to send any requests. up to 5 Sellers can contact you.",
                    "Send a personalised message directly to Sellers",
                    "Feel free to share any details once you connect!"
                ]
            },
            {
                mainHeading: "How does it work for sellers?",
                heading: false,
                privacy: false,
                headingId: "headingTwo",
                collapseTarget: "collapseTwo",
                ul: false,
                onlyPara: true,
                onlyParaText: [
                    "You are matched with Buyers based on your company details. These are set during the sign-up proces. You can also amend your service tags under 'Location & Services' in the settings menu.",
                    "You can send a 'Work with' request to Buyers (limited to x25 a week). if a Buyer responds. you can then converse with them further .",
                    "We only charge for 'Replay to Hire' leads. This costs $5 each with the billing cycle at the end of each week. You can update your billing details under 'Billing' in the Settings menu. (See 'Pricing')",
                    "Leads that are not at the 'Ready to Hire' stage are free to contact. (See 'Pricing')",
                    "You can respond to direct messages sent from Buyers."
                ]
            },
            {
                mainHeading: "How do users communicate?",
                heading: false,
                privacy: false,
                headingId: "headingThree",
                collapseTarget: "collapseThree",
                ul: false,
                onlyPara: true,
                onlyParaText: [
                    "We provide an in-built messaging platform for smooth communication.",
                    "File links can be uploaded via Google Drive or Dropbox."
                ]
            },
            {
                mainHeading: "What is the (WWI) WorkWyseIndex rating and how are profiles rated?",
                heading: true,
                headingText: "Providing a median of the following scores.",
                privacy: true,
                headingId: "headingFour",
                collapseTarget: "collapseFour",
                ul: true,
                paragraph: true,
                onlyPara: false,
                paragraphText: [
                    "You can see written reviews by clicking the WWI icon.",
                    "We have our own algorithm that works based on the rating our users provide.",
                    "You never have to worry about reviews made by poorly rated users as they won't affect your score!",
                ],
                ulText: [
                    "Glassdoor rating",
                    "Trustpilot rating",
                    "Google Business rating",
                    "Facebook Page rating"
                ]
            }
        ]

        return (
            <div>
                <BreadCrumbs title="FAQ" breadcrumbssegment={pathList} />
                <div className="sptb">
                    <div className="container">
                        <div className="bs-example">
                            <div className="accordion" id="accordionExample">
                                {data.map((d, i) => (
                                    <div className="card" onClick={() => this.onChange(i)}>
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button type="button" className="btn btn-link" data-toggle="collapse" data-target={`#${d.collapseTarget}`}>{d.mainHeading}<i className={this.state.index === i ? "fa fa-minus" : "fa fa-plus"}></i></button>
                                            </h2>
                                        </div>
                                        <div id={d.collapseTarget} className="collapse" aria-labelledby={d.headingId} data-parent="#accordionExample">
                                            <div className="card-body">
                                                {d.privacy && <div className="privacy-sub-section">
                                                    <h4>{d.headingText}</h4>
                                                    {d.ul && <ul className="mb-md-5">
                                                        {d.ulText.map(dt => {
                                                            return <li>{dt}</li>
                                                        })}</ul>
                                                    }
                                                </div>
                                                }
                                                {d.onlyPara && <div>
                                                    {d.onlyParaText.map(p => {
                                                        return <p>{p}</p>
                                                    })}</div>
                                                }
                                                {d.paragraph && <div className="mt-5">
                                                    {d.paragraphText.map(dt => {
                                                        return <p>{dt}</p>
                                                    })}</div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}








