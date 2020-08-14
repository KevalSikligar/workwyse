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
                <h3>
                    Pricing
                    We've kept things simple here.
                    Sign Up Completely free, always
                    Free Leads Buyers who aren't certain of hiring just yet can be freely contacted. You can see the buying stage next to the project details; - Very likely to hire - I'm doing my research - Looking for quotes
                    Find Buyer
                    Paid Leads Buyers who are at the latest buying stage / lower down the sales funnel will have 'Ready to Hire' with a small star next to the project details, To contact these leads, there is a fixed cost of £5 to contact them. Sellers are billed on a weekly basis for the number of leads they have requested to work with.
                    FAQs
                    What customer details do I get? When you respond to a lead, you'll get the customer's email address and can contact them freely via Workwyse's messaging service or via email. Sometimes, leads also add in a contact number
                    Do I get charged per message? No, only the initial 'WorkWith' request message has a cost associated of £5. This is for requests sent to you, or requests that you send;
                </h3>
            </div>
        )
    }
}
