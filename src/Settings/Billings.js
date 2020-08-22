import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';

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

                    </div>
                </div>
            </div>
        </div>
    )
}
