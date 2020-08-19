import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default function GeneralSettings() {

    const pathList = [
        { to: "/general-settings", title: "General Settings" }
    ]
    return (
        <div>
            <BreadCrumbs title="General Settings" breadcrumbssegment={pathList} />

        </div>
    )
}
