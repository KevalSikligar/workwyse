import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { Link } from 'react-router-dom';
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
                                                <Link to="/"></Link>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span className="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <Link to="/"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</Link>
                                                    <Link to="/"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</Link>
                                                    <div className="ml-auto">
                                                        <Link className="mr-0" to="/"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</Link>
                                                    </div>
                                                </div>
                                                <Link to="/" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></Link>
                                                <p className="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <Link to="/" className="btn btn-primary btn-sm mt-4">Read More</Link>
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
                                                <Link to="/"></Link>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span className="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <Link to="/"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</Link>
                                                    <Link to="/"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</Link>
                                                    <div className="ml-auto">
                                                        <Link className="mr-0" to="/"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</Link>
                                                    </div>
                                                </div>
                                                <Link to="/" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></Link>
                                                <p className="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <Link to="/" className="btn btn-primary btn-sm mt-4">Read More</Link>
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
                                                <Link to="/"></Link>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span className="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <Link to="/"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</Link>
                                                    <Link to="/"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</Link>
                                                    <div className="ml-auto">
                                                        <Link className="mr-0" to="/"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</Link>
                                                    </div>
                                                </div>
                                                <Link to="/" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></Link>
                                                <p className="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <Link to="/" className="btn btn-primary btn-sm mt-4">Read More</Link>
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
                                                <Link to="/"></Link>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span className="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <Link to="/"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</Link>
                                                    <Link to="/"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</Link>
                                                    <div className="ml-auto">
                                                        <Link className="mr-0" to="/"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</Link>
                                                    </div>
                                                </div>
                                                <Link to="/" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></Link>
                                                <p className="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <Link to="/" className="btn btn-primary btn-sm mt-4">Read More</Link>
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
                                                <Link to="/"></Link>
                                                <img src={require('../assets/images/products/v3.png')} alt="img" className="cover-image" />
                                                <div className="item7-card-text"> <span className="badge badge-warning">Jobs</span> </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-12 col-md-12">
                                            <div className="card-body">
                                                <div className="item7-card-desc d-flex mb-1">
                                                    <Link to="/"><i className="fa fa-calendar-o text-muted mr-2"></i>Dec-03-2018</Link>
                                                    <Link to="/"><i className="fa fa-user text-muted mr-2"></i>Nissy Sten</Link>
                                                    <div className="ml-auto">
                                                        <Link className="mr-0" to="/"><i className="fa fa-comment-o text-muted mr-2"></i>4 Comments</Link>
                                                    </div>
                                                </div>
                                                <Link to="/" className="text-dark"><h4 className="font-weight-semibold mb-3">Excepteur occaecat cupidatat</h4></Link>
                                                <p className="mb-1">Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum exercitationem </p>
                                                <Link to="/" className="btn btn-primary btn-sm mt-4">Read More</Link>
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








