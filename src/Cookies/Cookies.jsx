import React, { Component } from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default class Cookies extends Component {

    render() {
        const pathList = [{ to: "/cookies", title: "Cookie Policy" }];
        return (
            <div>
                <BreadCrumbs title="Cookie Policy" breadcrumbssegment={pathList} />
                <div className="sptb bg-white">
                    <div className="container">
                        <div className="section-title center-block text-center">
                            <h2>COOKIE POLICY</h2>
                        </div>
                        <div className="data-section">
                            <p className="data-sec-p"> Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
                            <p className="data-sec-p">A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.</p>
                            <p className="data-sec-p">We use the following cookies:</p>
                            <ul className="list_data">
                                <li>
                                    <p className="data-sec-p"><span className="data-title">Strictly necessary cookies.</span> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</p>
                                </li>
                                <li>
                                    <p className="data-sec-p"><span className="data-title">Analytical or performance cookies.</span> These allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</p>
                                </li>
                                <li>
                                    <p className="data-sec-p"><span className="data-title">Functionality cookies.</span> These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</p>
                                </li>
                                <li>
                                    <p className="data-sec-p"><span className="data-title">Targeting cookies.</span> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. You can find more information about the individual cookies we use and the purposes for which we use them in the table below:</p>
                                </li>
                            </ul>
                            <p className="data-sec-p">You can find more information about the individual cookies we use and the purposes for which we use them in the table below:</p>

                            <table className="data_table_sec table-responsive">
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="data-title">
                                                <p className="data-sec-p"> Cookie Title Cookie Name</p>
                                            </span>
                                        </th>
                                        <th>
                                            <span className="data-title">Purpose</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="data-sec-p">
                                                Persistent
                                            Cookies</p>
                                        </td>
                                        <td>
                                            <p className="data-sec-p">Examples of purposes for which a cookie may be used :</p>
                                            <p className="data-sec-p">This cookie is essential for our site to :</p>
                                            <p className="data-sec-p">(a) Estimate our audience size and usage pattern.</p>
                                            <p className="data-sec-p">(b) Store information about your preferences, and so allow us to
                                            customise our site and to provide you with offers that are targeted to your
                                            individual interests.</p>
                                            <p className="data-sec-p">(c) Speed up your searches.</p>
                                            <p className="data-sec-p">(d) Recognise you when you return to our site.</p>
                                            <p className="data-sec-p">(e) Allow you to use our site in a way that makes your browsing
                                            experience more convenient, for example, by allowing you to store items
                                            in an electronic shopping basket between visits. If you register with us or
                                            complete our online forms, we will use cookies to remember your details
                                            during your current visit, and any future visits provided the cookie was
                                            not deleted in the interim.</p>
                                            <p className="data-sec-p">(f) to save your registration ID and login password for future logins to the
                                            Service. We may use “session ID cookies” to enable certain features of the Service, to better understand how you interact with the Service and to
                                            monitor aggregate usage and web traffic routing on the Service. You can
                                            instruct your browser, by changing its options, to stop accepting cookies</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="data-sec-p ">
                                                <span className="color-data">
                                                    Insert other
                                                    relevant
                                                    cookies once
                                                    speaking with
                                                    the technical
                                                    and software
                                            team</span></p>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="data-sec-p">Please note that the following third parties may also use cookies, over which we have no control. These named third parties may include, for example, advertising networks and providers of external services like web traffic analysis services. These third-party cookies are likely to be analytical cookies or performance cookies or targeting cookies:.</p>
                            <p className="data-title mb-0">LinkedIn</p>
                            <p className="data-title mb-0">Companies House</p>
                            <p className="data-title mb-0">Dynatrace</p>
                            <p className="data-title mb-0">Google</p>
                            <p className="data-title mb-0">Facebook</p>
                            <p className="data-title mb-0">Trustpilot</p>
                            <p className="data-title mb-0">Glassdoor</p>
                            <p className="data-title mb-0">Quora</p>
                            <p className="data-title">Landbot.io</p>
                            <p className="data-sec-p">You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our website.</p>
                            <p className="data-sec-p">Except for essential cookies, all cookies will expire after <span className="data-title"> 30 days</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}