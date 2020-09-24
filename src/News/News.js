import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';


export default class News extends Component {

    render() {

        const pathList = [
            { to: "/news", title: "News" }
        ];

        return (
            <div>
                <BreadCrumbs title="News" breadcrumbssegment={pathList} />
                {/* <!-- main section --> */}
                <div className="sptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card overflow-hidden">
                                    <div className="ribbon ribbon-top-left text-warning"><span className="bg-warning">featured</span></div>
                                    <div className="row no-gutters blog-list">
                                        <div className="col-xl-3 col-lg-12 col-md-12">
                                            <div className="item7-card-img">
                                                <a href="jobs.html"></a>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span class="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <a href="#"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</a>
                                                    <a href="#"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</a>
                                                    <div className="ml-auto">
                                                        <a className="mr-0" href="#"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></a>
                                                <p class="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <a href="#" className="btn btn-primary btn-sm mt-4">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card overflow-hidden">
                                    <div className="ribbon ribbon-top-left text-warning"><span className="bg-warning">featured</span></div>
                                    <div className="row no-gutters blog-list">
                                        <div className="col-xl-3 col-lg-12 col-md-12">
                                            <div className="item7-card-img">
                                                <a href="jobs.html"></a>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span class="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <a href="#"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</a>
                                                    <a href="#"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</a>
                                                    <div className="ml-auto">
                                                        <a className="mr-0" href="#"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></a>
                                                <p class="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <a href="#" className="btn btn-primary btn-sm mt-4">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card overflow-hidden">
                                    <div className="ribbon ribbon-top-left text-warning"><span className="bg-warning">featured</span></div>
                                    <div className="row no-gutters blog-list">
                                        <div className="col-xl-3 col-lg-12 col-md-12">
                                            <div className="item7-card-img">
                                                <a href="jobs.html"></a>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span class="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <a href="#"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</a>
                                                    <a href="#"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</a>
                                                    <div className="ml-auto">
                                                        <a className="mr-0" href="#"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></a>
                                                <p class="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <a href="#" className="btn btn-primary btn-sm mt-4">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card overflow-hidden">
                                    <div className="ribbon ribbon-top-left text-warning"><span className="bg-warning">featured</span></div>
                                    <div className="row no-gutters blog-list">
                                        <div className="col-xl-3 col-lg-12 col-md-12">
                                            <div className="item7-card-img">
                                                <a href="jobs.html"></a>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span class="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <a href="#"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</a>
                                                    <a href="#"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</a>
                                                    <div className="ml-auto">
                                                        <a className="mr-0" href="#"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></a>
                                                <p class="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <a href="#" className="btn btn-primary btn-sm mt-4">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="card overflow-hidden">
                                    <div className="ribbon ribbon-top-left text-warning"><span className="bg-warning">featured</span></div>
                                    <div className="row no-gutters blog-list">
                                        <div className="col-xl-3 col-lg-12 col-md-12">
                                            <div className="item7-card-img">
                                                <a href="jobs.html"></a>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span class="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <a href="#"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</a>
                                                    <a href="#"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</a>
                                                    <div className="ml-auto">
                                                        <a className="mr-0" href="#"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></a>
                                                <p class="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <a href="#" className="btn btn-primary btn-sm mt-4">Read More</a>
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
}








