import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs'

export default function LocationSettings() {

    const pathList = [
        { to: "/location-project", title: "Location Settings" }
    ]
    return (
        <div>
            <BreadCrumbs title="Location Settings" breadcrumbssegment={pathList} />

        </div>
    )
}
