import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ReactApexCharts from 'react-apexcharts'
import { Link } from 'react-router-dom';

export default class BuyerHome extends React.Component {

    state = {
        series: [50],
        options: {
            chart: {
                height: 100,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -150,
                    endAngle: 150,
                    dataLabels: {
                        name: {
                            fontSize: '20px',
                            color: 'white',
                            offsetY: 0
                        },
                        value: {
                            offsetY: -10,
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#6059e9',
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: [""]
        },
    };

    render() {

        const pathList = [
            { to: "/dashboard-buyer", title: "Buyer Home Page" }
        ];

        return (

            <div>
                <BreadCrumbs title="Buyer Home Page" breadcrumbssegment={pathList} />
                <section class="sptb">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class=" mb-lg-0">
                                    <div class="">
                                        <div class="item2-gl">
                                            <div class=" mb-0">
                                                <div className="card p-4 mb-0">
                                                    <div className="filter-section">
                                                        <div className="header-left">
                                                            {/* <h3 className="card-title">Find Buyer</h3> */}
                                                        </div>
                                                        <div className="header-right">
                                                            <div className="dropdown-search d-md-flex">
                                                                <div className="form-group mb-0 position-relative mr-4">
                                                                    <input type="text" className="form-control position-relative search-buyer" placeholder="Search Buyer" />
                                                                    <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                                </div>
                                                                <div className="filter-dropodwn">
                                                                    <div class="d-flex">
                                                                        <label class="mr-2 mt-2 mb-sm-1">Sort By:</label>
                                                                        <select className="form-control">
                                                                            <option value="1">Relavant</option>
                                                                            <option value="2">Newest First</option>
                                                                            <option value="3">Highest Paid</option>
                                                                            <option value="4">Lowest Paid</option>
                                                                            <option value="5">High Ratings</option>
                                                                            <option value="6">Popular</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-content company-list">
                                                <div class="tab-pane active" id="tab-11">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-12">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="item-card9 mt-3 mt-md-5 mr-sm-4">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-normal mb-1 mt-1">Web Spinners</h4></Link>
                                                                        <div className="company-location font-weight-semibold">
                                                                            <span className="location-icon"><i class="typcn typcn-location"></i></span> Leicester, UK
                                                                    </div>
                                                                        <p className="font-weghr-normal mb-0">
                                                                            A Multi-Service Marketing Agency. We specialise in the FMCG, wholesale and local business sectors.
                                                                    </p>
                                                                    </div>
                                                                    <div class="ml-auto align-self-center">
                                                                        <div className="gauge-meter">
                                                                            <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={120} width={140} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap ">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Services</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Amount</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> £5,000 - £10,000</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle  py-1"><span class="font-weight-semibold">Industry Focus</span></td>
                                                                                    <td class="p-1 align-middle"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>wholesale</option>
                                                                                            <option>wholesale 2</option>
                                                                                            <option>wholesale 3</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Operations</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>Local</option>
                                                                                            <option>Private</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Company Size</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>6-15</option>
                                                                                            <option>16-50</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div class="d-sm-flex">
                                                                            <Link class="btn btn-default mr-2" to={"javascript:void(0)"}>Not Interested</Link>
                                                                            <Link class="btn btn-next btn-primary" to={"javascript:void(0)"}>Send a Request</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="item-card9 mt-3 mt-md-5 mr-sm-4">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-normal mb-1 mt-1">Marketing.inc</h4></Link>
                                                                        <div className="company-location font-weight-semibold">
                                                                            <span className="location-icon"><i class="typcn typcn-location"></i></span> Leicester, UK
                                                                        </div>
                                                                        <p className="font-weghr-normal mb-0">
                                                                            A Multi-Service Marketing Agency. We specialise in the FMCG, wholesale and local business sectors.
                                                                        </p>
                                                                    </div>
                                                                    <div class="ml-auto align-self-center">
                                                                        <div className="gauge-meter">
                                                                            <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={120} width={140} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap ">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Services</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Amount</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> £5,000 - £10,000</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle  py-1"><span class="font-weight-semibold">Industry Focus</span></td>
                                                                                    <td class="p-1 align-middle"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>wholesale</option>
                                                                                            <option>wholesale 2</option>
                                                                                            <option>wholesale 3</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Operations</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>Local</option>
                                                                                            <option>Private</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Company Size</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>6-15</option>
                                                                                            <option>16-50</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div class="d-sm-flex">
                                                                            <Link class="btn btn-default mr-2" to={"javascript:void(0)"}>Not Interested</Link>
                                                                            <Link class="btn btn-next btn-primary" to={"javascript:void(0)"}>Send a Request</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="item-card9 mt-3 mt-md-5 mr-sm-4">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-normal mb-1 mt-1">Web Spinners</h4></Link>
                                                                        <div className="company-location font-weight-semibold">
                                                                            <span className="location-icon"><i class="typcn typcn-location"></i></span> Leicester, UK
                                                                    </div>
                                                                        <p className="font-weghr-normal mb-0">
                                                                            A Multi-Service Marketing Agency. We specialise in the FMCG, wholesale and local business sectors.
                                                                    </p>
                                                                    </div>
                                                                    <div class="ml-auto align-self-center">
                                                                        <div className="gauge-meter">
                                                                            <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={120} width={140} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap ">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Services</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Amount</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> £5,000 - £10,000</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle  py-1"><span class="font-weight-semibold">Industry Focus</span></td>
                                                                                    <td class="p-1 align-middle"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>wholesale</option>
                                                                                            <option>wholesale 2</option>
                                                                                            <option>wholesale 3</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Operations</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>Local</option>
                                                                                            <option>Private</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Company Size</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>6-15</option>
                                                                                            <option>16-50</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div class="d-sm-flex">
                                                                            <Link class="btn btn-default mr-2" to={"javascript:void(0)"}>Not Interested</Link>
                                                                            <Link class="btn btn-next btn-primary" to={"javascript:void(0)"}>Send a Request</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="item-card9 mt-3 mt-md-5 mr-sm-4">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-normal mb-1 mt-1">Marketing.inc</h4></Link>
                                                                        <div className="company-location font-weight-semibold">
                                                                            <span className="location-icon"><i class="typcn typcn-location"></i></span> Leicester, UK
                                                                        </div>
                                                                        <p className="font-weghr-normal mb-0">
                                                                            A Multi-Service Marketing Agency. We specialise in the FMCG, wholesale and local business sectors.
                                                                        </p>
                                                                    </div>
                                                                    <div class="ml-auto align-self-center">
                                                                        <div className="gauge-meter">
                                                                            <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={120} width={140} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap ">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Services</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Amount</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> £5,000 - £10,000</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle  py-1"><span class="font-weight-semibold">Industry Focus</span></td>
                                                                                    <td class="p-1 align-middle"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>wholesale</option>
                                                                                            <option>wholesale 2</option>
                                                                                            <option>wholesale 3</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Operations</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>Local</option>
                                                                                            <option>Private</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 align-middle py-1"><span class="font-weight-semibold">Company Size</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1">
                                                                                        <select className="form-control">
                                                                                            <option>6-15</option>
                                                                                            <option>16-50</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="card-footer">
                                                                        <div class="d-sm-flex">
                                                                            <Link class="btn btn-default mr-2" to={"javascript:void(0)"}>Not Interested</Link>
                                                                            <Link class="btn btn-next btn-primary" to={"javascript:void(0)"}>Send a Request</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="tab-12">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/img1.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">G Technicals Solutions</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (245 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 12 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/img2.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Pro.Meet Pvt Ltd</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (58 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Java designer, php developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 6 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/img3.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Infratech Pvt Ltd</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (82 Reviews)
																    </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Angular developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 78 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/img4.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Bahringer and Wyman</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="5" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (324 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Ui Designers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 64 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/img5.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Hardware Solutions</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (317 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, php developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 32 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-3">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/img6.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Flowtech Solutions</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="3" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (24 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 2 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-4">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/logo5.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Hardware Private Solutions</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (75 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Ui designer, Ux Designers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 25 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-4">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/logo2.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Wisoky-Dickens</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (75 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 36 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-12 col-xl-4">
                                                            <div class="card overflow-hidden br-0 overflow-hidden">
                                                                <div class="d-sm-flex card-body p-4">
                                                                    <div class="p-0 m-0 mr-3">
                                                                        <div class="">
                                                                            <Link to={"javascript:void(0)"}></Link>
                                                                            <img src="../assets/images/products/logo/logo3.jpg" alt="img" class="w-8 h-8" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="item-card9 mt-2">
                                                                        <Link to={"javascript:void(0)"} class="text-dark"><h4 class="font-weight-semibold mt-1">Job pvt ltd</h4></Link>
                                                                        <div class="rating-stars d-inline-flex">
                                                                            <input type="number" readonly="readonly" class="rating-value star" name="rating-stars-value" value="4" />
                                                                            <div class="rating-stars-container mr-2">
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                                <div class="rating-star sm">
                                                                                    <i class="fa fa-star"></i>
                                                                                </div>
                                                                            </div> (15 Reviews)
																</div>
                                                                    </div>
                                                                </div>
                                                                <div class="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                                                    <div class="card-body table-responsive border-top">
                                                                        <table class="table table-borderless w-100 m-0 text-nowrap">
                                                                            <tbody class="p-0">
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Positions</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span>Web designer, Web developers</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="px-0 py-1"><span class="font-weight-semibold">Address</span></td>
                                                                                    <td class="p-1"><span>:</span></td>
                                                                                    <td class="p-1"><span> 2767  Concord Street, Charlotte, NC</span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mt-3">
                                                                            <Link class="btn btn-primary" to={"javascript:void(0)"} data-toggle="modal" data-target="#Applynow">Apply Now</Link>
                                                                            <Link class="btn btn-light font-weight-semibold text-dark" to={"javascript:void(0)"}><i class="fa fa-briefcase"></i> 26 vacancies</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="center-block text-center">
                                            <ul class="pagination mb-5 mb-lg-0">
                                                <li class="page-item page-prev disabled">
                                                    <Link class="page-link" to={"javascript:void(0)"} tabIndex="-1">Prev</Link>
                                                </li>
                                                <li class="page-item active"><Link class="page-link" to={"javascript:void(0)"}>1</Link></li>
                                                <li class="page-item"><Link class="page-link" to={"javascript:void(0)"}>2</Link></li>
                                                <li class="page-item"><Link class="page-link" to={"javascript:void(0)"}>3</Link></li>
                                                <li class="page-item page-next">
                                                    <Link class="page-link" to={"javascript:void(0)"}>Next</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}