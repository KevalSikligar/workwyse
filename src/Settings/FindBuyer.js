import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
// import GaugeChart from 'react-gauge-chart'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function FindBuyer() {

    const pathList = [
        { to: "/find-buyer", title: "Find Buyer" }
    ]

    return (
        <div>
            <BreadCrumbs title="Find Buyer" breadcrumbssegment={pathList} />
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
                                            <h3 className="card-title">Find Buyer</h3>
                                        </div>
                                        <div className="header-right">
                                            <div className="dropdown-search d-md-flex">
                                                <div className="form-group mb-0 position-relative mr-4">
                                                    <input type="text" className="form-control position-relative search-buyer" placeholder="Search Buyer" />
                                                    <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                </div>
                                                <div className="filter-dropodwn">
                                                    <select className="form-control">
                                                        <option>All</option>
                                                        <option>Looking for Quotes</option>
                                                        <option>Ready to Hire</option>
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
                                                                <th className="w-100">Title</th>
                                                                <th>Salary</th>
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
                                                                    <a href="!#" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                                    <a href="!#" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                                    <a href="!#" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Buyer Title 2</td>
                                                                <td>$500 - $1000</td>
                                                                <td><a href="!#" class="badge badge-warning">Published</a></td>
                                                                <td>
                                                                    <a href="!#" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                                    <a href="!#" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                                    <a href="!#" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Buyer Title 2</td>
                                                                <td>$500 - $1000</td>
                                                                <td><a href="!#" class="badge badge-primary">Published</a></td>
                                                                <td>
                                                                    <a href="!#" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-pencil"></i></a>
                                                                    <a href="!#" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                                                                    <a href="!#" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i class="fa fa-eye"></i></a>
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
