import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function MyPostsDetails() {
    const pathList = [
        { to: "/posts-details", title: "My Posts Details" }
    ]
    return (
        <div>
            <BreadCrumbs title="My Posts Details" breadcrumbssegment={pathList} />
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-12 col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                        <div className="custom-card">
                            <div className="card">
                                <div className="card-header">
                                    <div className="filter-section">
                                        <div className="header-left">
                                            <h3 className="card-title">My Posts Details</h3>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
