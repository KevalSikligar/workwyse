import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default function PostProject() {

    const pathList = [
        { to: "/post-a-project", title: "Post A Project" }
    ];

    return (
        <div>
            <BreadCrumbs title="Post A Project" breadcrumbssegment={pathList} />
        </div>
    )
}
