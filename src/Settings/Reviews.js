import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
// import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, Annotations, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-react-circulargauge';
import ReactApexCharts from 'react-apexcharts'


const pathList = [
    { to: "/reviews", title: "Reviews" }
]
class Reviews extends Component {

    state = {
        series: [67],
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
                            color: 'white',
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
        return (
            <div>
                <BreadCrumbs title="Reviews" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12">
                            <SideNav />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 review-sec">
                            <div className="sptb pb-0">
                                <div className="card">
                                    {/* <div className="card-header">
                                        <h3 className="card-title">Marketing.Inc</h3>
                                    </div> */}
                                    <div className="card-body">
                                        <div className="card-header card-gauge-section col-12 col-md-12 bg-background3 border-radius-4 mb-md-5 mb-sm-3 p-4 text-white">
                                            <h3 className="text-white company-name fs-18 mb-1 font-weight-semibold z-index-10">WorkWyse Index Rating </h3>
                                            <div className="gauge-content">
                                                <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={100} width={120} />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="review-item">
                                                    <div className="review-img">
                                                        <img src={require('../assets/images/trustpilot-logo.png')} className="logo-image img-fluid" alt="img" />
                                                    </div>
                                                    <div className="review-content">
                                                        <button className="btn review-btn">Trustpilot Connected</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="review-item">
                                                    <div className="review-img">
                                                        <img src={require('../assets/images/glassdoor-logo.png')} className="logo-image img-fluid" alt="img" />
                                                    </div>
                                                    <div className="review-content">
                                                        <button className="btn review-btn">Glassdoor Connected</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="review-item">
                                                    <div className="review-img">
                                                        <img src={require('../assets/images/google-logo.png')} className="logo-image img-fluid" alt="img" />
                                                    </div>
                                                    <div className="review-content">
                                                        <button className="btn review-btn">Google Connected</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <div className="review-item">
                                                    <div className="review-img">
                                                        <img src={require('../assets/images/facebook-logo.png')} className="logo-image img-fluid" alt="img" />
                                                    </div>
                                                    <div className="review-content">
                                                        <button className="btn review-btn-colorChange bg-warning"> Connect Facebook Business</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sptb low-pad-top">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="sptb py-0">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h3 className="card-title">Received Reviews</h3>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="rview-block">
                                                                <div className="company-profile-head bg-background3">
                                                                    <h4>New Website & Social Media Advertising</h4>
                                                                </div>
                                                                <table class="table table-striped table-bordered">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>Reliability</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Communication</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Value for Money</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Trust</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="rview-comment">
                                                                    Mark Delivered the project on time, at the right place. what an absolute pleasure to work with!
                                                    </div>
                                                            </div>
                                                            <div className="rview-block">
                                                                <div className="company-profile-head bg-background3">
                                                                    <h4>New Website & Social Media Advertising</h4>
                                                                </div>
                                                                <table class="table table-striped table-bordered">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>Reliability</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Communication</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Value for Money</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Trust</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="rview-comment">
                                                                    Mark Delivered the project on time, at the right place. what an absolute pleasure to work with!
                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="sptb py-0">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h3 className="card-title">Given Reviews</h3>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="rview-block">
                                                                <div className="company-profile-head bg-background3">
                                                                    <h4>New Website & Social Media Advertising</h4>
                                                                </div>
                                                                <table class="table table-striped table-bordered">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>Reliability</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Communication</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Value for Money</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Trust</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="rview-comment">
                                                                    Mark Delivered the project on time, at the right place. what an absolute pleasure to work with!
                                            </div>
                                                            </div>
                                                            <div className="rview-block">
                                                                <div className="company-profile-head bg-background3">
                                                                    <h4>New Website & Social Media Advertising</h4>
                                                                </div>
                                                                <table class="table table-striped table-bordered">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>Reliability</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Communication</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Value for Money</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Trust</th>
                                                                            <td>
                                                                                <span className="review-stars">
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                    <i class="typcn typcn-star-full-outline"></i>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <div className="rview-comment">
                                                                    Mark Delivered the project on time, at the right place. what an absolute pleasure to work with!
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <Button className="btn btn-danger mr-2">Cancel</Button>
                                        <Button className="btn btn-primary">Save</Button>
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


export default Reviews;