import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';

export default function MyPosts() {

    const pathList = [
        { to: "/posts", title: "My Posts" }
    ]

    return (
        <div>
            <BreadCrumbs title="My Posts" breadcrumbssegment={pathList} />
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
                                            <h3 className="card-title">My Posts</h3>
                                        </div>
                                        <div className="header-right">
                                            <div className="dropdown-search d-md-flex">
                                                <div className="form-group mb-0 position-relative mr-4">
                                                    <input type="text" className="form-control position-relative search-buyer" placeholder="Search Posts" />
                                                    <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                </div>
                                                <div className="filter-dropodwn">
                                                    <select className="form-control">
                                                        <option>All</option>
                                                        <option>Tittle 1</option>
                                                        <option>Tittle 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="filter-section filter-caresoule">
                                        <div className="ads-tabs w-100">
                                            <div className="tabs-menu">
                                                <ul className="nav panel-tabs">
                                                    <OwlCarousel
                                                        className="owl-theme"
                                                        loop={false}
                                                        dots={false}
                                                        items={4}
                                                        margin={10}
                                                        nav >
                                                        <div className="item">
                                                            <li><a href="#tab1" class="active" data-toggle="tab">All Services (20)</a></li>
                                                        </div>
                                                        <div className="item">
                                                            <li><a href="#tab2" data-toggle="tab">Designer (08)</a></li>
                                                        </div>
                                                        <div className="item">
                                                            <li><a href="#tab3" data-toggle="tab">Graphics(12)</a></li>
                                                        </div>
                                                        <div className="item">
                                                            <li><a href="#tab3" data-toggle="tab">Marketing(4)</a></li>
                                                        </div>
                                                        <div className="item">
                                                            <li><a href="#tab3" data-toggle="tab">Housing(4)</a></li>
                                                        </div>
                                                    </OwlCarousel>
                                                    <OwlCarousel
                                                        className="owl-theme"
                                                        loop={false}
                                                        dots={false}
                                                        items={3}
                                                        margin={10}
                                                        nav>
                                                        <div className="item">
                                                            <li><a href="#tab4" data-toggle="tab">Active (13)</a></li>
                                                        </div>
                                                        <div className="item">
                                                            <li><a href="#tab5" data-toggle="tab">Paused (05)</a></li>
                                                        </div>
                                                        <div className="item">
                                                            <li><a href="#tab6" data-toggle="tab">Completed (02)</a></li>
                                                        </div>
                                                    </OwlCarousel>
                                                </ul>
                                            </div>
                                            <div className="tab-content">
                                                <div className="tab-pane table-responsive border-top userprof-tab active">
                                                    <div className="table table-bordered table-hover mb-0 text-nowrap">
                                                        <thead>
                                                            <tr>
                                                                <th className="w-100">My Posts</th>
                                                                <th>Budget</th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Buyer Title</td>
                                                                <td>$100 - $500</td>
                                                                <td><a href="!#" class="badge badge-warning">Published</a></td>
                                                                <td>
                                                                    <NavLink to="/home" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></NavLink>
                                                                    <NavLink to="/home" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></NavLink>
                                                                    <NavLink to="/posts-details" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></NavLink>                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Buyer Title 1</td>
                                                                <td>$100 - $500</td>
                                                                <td><a href="!#" class="badge badge-warning">Published</a></td>
                                                                <td>
                                                                    <NavLink to="/home" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></NavLink>
                                                                    <NavLink to="/home" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></NavLink>
                                                                    <NavLink to="/posts-details" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></NavLink>                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Buyer Title 2</td>
                                                                <td>$500 - $1000</td>
                                                                <td><a href="!#" class="badge badge-warning">Published</a></td>
                                                                <td>
                                                                    <NavLink to="/home" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></NavLink>
                                                                    <NavLink to="/home" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></NavLink>
                                                                    <NavLink to="/posts-details" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></NavLink>                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Buyer Title 2</td>
                                                                <td>$500 - $1000</td>
                                                                <td><a href="!#" class="badge badge-primary">Published</a></td>
                                                                <td>
                                                                    <NavLink to="/home" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></NavLink>
                                                                    <NavLink to="/home" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></NavLink>
                                                                    <NavLink to="/posts-details" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></NavLink>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </div>
                                                </div>
                                            </div>
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
