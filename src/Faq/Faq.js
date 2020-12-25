import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';


export default class Faq extends Component {

    state = {
        index: null
    }

    render() {

        const pathList = [
            { to: "/faq", title: "FAQ" }
        ];

        const data = [
            {
                mainHeading: "How do Buyers get in touch with Sellers?",
                heading: false,
                privacy: true,
                headingId: "headingOne",
                collapseTarget: "collapseOne",
                onlyPara: false,
                ul: true,
                paragraph: true,
                onlyPara: false,
                ulText: [
                    "Create a post (Post A Project) and send a request to invite sellers to your project.",
                    "You can send requests out to a maximum of 5 Sellers, after which, your post is closed to new sellers.",
                    "Alternatively, if you decide not to send any requests, up to 5 Sellers can contact you.",
                ],
                paragraphText: [

                ]
            },
            {
                mainHeading: "Feel free to share any details once you connect!",
                heading: false,
                privacy: true,
                headingId: "headingTwo",
                collapseTarget: "collapseTwo",
                onlyPara: false,
                ul: false,
                paragraph: false,
                onlyPara: false,
            },
            {
                mainHeading: "How does it work for sellers?",
                heading: false,
                privacy: true,
                headingId: "headingThree",
                collapseTarget: "collapseThree",
                ul: true,
                paragraph: true,
                onlyPara: false,
                ulText: [
                    "You are matched with Buyers based on your company details.",
                    "You can send a request to directly to Buyers and communicate with them.",
                    "Send or accept requests from buyers - this is all we charge for (see Pricing). Communicate as much as you want after, go off platform, however you wish to work with each other.",
                    "Billing cycles are at the end of each week. You can update billing details under ‘Billing’.",
                    "You can send a 'Work with' request to Buyers (limited to x25 a week). If a Buyer responds, you can then converse with them further.",
                    "To ensure you don’t lose out on leads;"
                ],
                paragraphText: [
                    "Toggle your browser/email notifications to ‘On’",
                    "Ensure you add all your service offerings to the Services page.",
                    "Be sure to add in all your rates for your services.",
                ]
            },
            {
                mainHeading: "How do you communicate?",
                heading: true,
                headingText: "We provide an in-built messaging platform for smooth communication.",
                privacy: true,
                headingId: "headingFour",
                collapseTarget: "collapseFour",
                ul: false,
                onlyPara: true,
                onlyParaText: [
                    "File links can be uploaded via Google Drive or Dropbox."
                ]
            },
            {
                mainHeading: "How can I trust Sellers?",
                heading: true,
                headingText: "We ask our sellers to connect at least one of the following review sites.",
                privacy: true,
                headingId: "headingFive",
                collapseTarget: "collapseFive",
                ul: true,
                paragraph: true,
                onlyPara: false,
                paragraphText: [
                    "You can see ratings and reviews by clicking the provided links."
                ],
                ulText: [
                    "Glassdoor rating",
                    "Trustpilot rating",
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
                                                {d.paragraph && <div className="mt-md-5">
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

    onChange = (i) => {
        let res = this.state.index === i ? null : i
        this.setState({ index: res })
    }
}








