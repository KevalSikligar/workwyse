import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default function FAQ() {

    const pathList = [
        { to: "/faq", title: "FAQ" }
    ]
    return (
        <div>
            <BreadCrumbs title="FAQ" breadcrumbssegment={pathList} />

            <h3>
                How It Works
                Our powerful engine in the back room matches your requirements with firms that are able to cover your most important needs.
                Search - Browse our list of companies, see prices and much more using advanced filters, or you can post a project and define any requirements - Firms that have experience working with your industry are listed first (see Industry Focus under Seller profiles). - View company profiles, see company ratings that are pulled from all across the Internet.
                Speak - Send a message to your top matches or a 'Work With' request. - Discuss project particulars, share email addresses & contact information, upload documents.
                Select - Once you've found the right match, we'll leave you to it
                215/6.55
                Try it out
                Post a Project
                Find Buyer
                OOO
                FAQs
            </h3>
        </div>
    )
}
