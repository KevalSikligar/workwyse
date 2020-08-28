import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token, addresses) => {
    console.log({ "token": token, "addresses": addresses })
}
export default function Billings() {
    const pathList = [
        { to: "/billings", title: "Billings" }
    ]
    return (
        <div>
            <BreadCrumbs title="Billings" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <StripeCheckout
                            amount='5'
                            currency='EUR'
                            name="Hamza Datoo"
                            // billingAddress
                            // shippingAddress
                            token={onToken}
                            stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
