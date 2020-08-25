import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';

export default function ProfileSettings() {
    const pathList = [
        { to: "/profile-settings", title: "Profile Settings" }
    ]
    return (
        <div>
            <BreadCrumbs title="Profile Settings" breadcrumbssegment={pathList} />
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