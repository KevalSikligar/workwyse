/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';

export default function Inbox() {

    const pathList = [
        { to: "/inbox", title: "Inbox" }
    ]

    return (
        <div>
            <BreadCrumbs title="Inbox" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <div className="custom-card">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Paid Advertising</h3>
                                </div>
                                <div className="card-body">
                                    <div className="middle-section">
                                        <ul>
                                            <li>
                                                <div className="content">
                                                    <div className="message">
                                                        <div className="bubble">
                                                            <p>Hi, I’m interested in working with you on your project -  '..............'.</p>
                                                            <p> Let’s talk further once you’re available :)</p>
                                                            <p>A little about us:</p>
                                                            <p>- We have an excellent team of developers, with a focus on  front-end web development.</p>
                                                            <p>- We’ve been trading for 20 years as of 2020, with over 1000 satisfied clients who are with us still due to the excellent service we provide.</p>
                                                            <p><b>Portfolio:</b></p>
                                                            <p>www.marketing.inc/portfolio</p>
                                                            <p>www.marketing/inc/case-studies</p>
                                                        </div>
                                                    </div>
                                                    <span>07:30PM</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <div className="message">
                                                        <div className="bubble">
                                                            <p>Hi, I’m interested in hiring Marketing.Inc!</p>
                                                            <p>Post Title: ‘New website required’</p>
                                                            <p>Industry: Wholesale </p>
                                                            <p>Our requirements are: Create a new website.</p>
                                                            <p>‘Project’ basis. Budget: £2,500 - £5,000 </p>
                                                            <p>Need help with: Full web design/development</p>
                                                            <p>E-commerce: Shopify. Products: 100+</p>
                                                            <p>Go live/be updated: Within a week </p>
                                                            <p>Goals/targets: Sell more of my product/service</p>
                                                            <p>Soft Drinks Plc are Ready To Hire Now!</p>
                                                            <p>Please contact me to discuss further,</p>
                                                            <p>Kind regards,</p>
                                                            <p>Name: Tom Sellick</p>
                                                            <p>Email: tom.sellick@softdrinksplc.com</p>
                                                            <p>Phone: 07*** *****</p>
                                                        </div>
                                                    </div>
                                                    <span>07:30PM</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="message-section">
                                        <div class="bottom">
                                            <form className="position-relative">
                                                <textarea className="form-control" placeholder="Type message..." rows="2"></textarea>
                                                <ul className="message-option">
                                                    <li><a href="!#" className="send-message mr-2"><i className="fa fa-link" aria-hidden="true"></i></a></li>
                                                    <li><a href="#!" className="send-message"><i className="fa fa-paper-plane" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </form>
                                        </div>
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
