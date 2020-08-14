import React from 'react'
import { withRouter } from 'react-router-dom'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

function AboutUs(props) {
    console.log('props => ', props);
    const pathList = [
        { to: "/about-us", title: "About Us" }
    ]
    return (
        <>
            <BreadCrumbs title="About Us" breadcrumbssegment={pathList} />
            <div>
                <div class="container">
                    <div class="section-title center-block text-center">
                        {/* <h1>About Us</h1> */}
                        <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                    </div>
                    <div class="row">
                        About
                        General team@workwyse.io
                        Born during the Covid crisis of 2020, when offices were left empty with phones left to continuously ring.
                        Help / Technical Issues support@workwyse.io
                        Did you ever try cold calling or calling to buy services? I'm betting there were long hold times and voicemail responses.
                        Billing Enquiries billing@workwyse.io
                        We set out to create a platform that solves two things; 1. Connect B2B buyers and sellers without having to search through multiple networking & review sites. 2. Qualifies leads for sales teams & doesn't cost an arm and a leg just to connect with them.
                        Registered Office; company address company address
                        EC12 XXX
                        We like to keep things simple and tailored to our users. If you have any ideas on how can improve our service, we'd love to hear from you at team@workwyse.io
                        Company no. 123456
                        Vat no. 654 321
                        Post a Project
                        Find Buyer
                </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(AboutUs)
