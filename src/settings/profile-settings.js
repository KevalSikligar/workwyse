import React from 'react'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

export default function ProfileSettings() {
    const pathList = [
        { to: "/profile-settings", title: "Profile Settings" }
    ]
    return (
        <div>
            <BreadCrumbs title="Profile Settings" breadcrumbssegment={pathList} />
        </div>
    )
}
