import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import SideNav from '../SideNav/SideNav'

export default function LocationSettings() {

    const pathList = [
        { to: "/location-setting", title: "Location Settings" }
    ]
    return (
        <div>
            <BreadCrumbs title="Location Settings" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <div className="card mb-0">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">Left</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
