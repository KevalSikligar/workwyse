import React, { Component } from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default class HowItWorks extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         videoURL: 'https://www.youtube.com/watch?v=M8iQq7A9pXc'
    //     }
    // }

    render() {
        const pathList = [
            { to: "/how-it-works", title: "How It Works" }
        ]
        return (
            <div>
                <BreadCrumbs title="How It Works" breadcrumbssegment={pathList} />
                <div>
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
            </div>
                <iframe src="https://www.youtube.com/embed/QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> </iframe>
            </div>
        )
    }
}
