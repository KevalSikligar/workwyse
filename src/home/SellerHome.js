import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default function SellerHome() {

    const pathList = [
        { to: "/dashboard-seller", title: "Seller Home Page" }
    ];

    return (
        <div>
            <BreadCrumbs title="Seller Home Page" breadcrumbssegment={pathList} />

        </div>
    )
}
