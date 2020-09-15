import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, Annotations, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-react-circulargauge';
import ReactApexCharts from 'react-apexcharts'


export default class FindBuyer extends React.Component {

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
                            fontSize: '20px',
                            fontWeight:'bold',
                            color: 'black',
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
                                                {/* <h3 className="card-title">Find Buyer</h3> */}
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
                                    <div className="card-body p-0">
                                        <div className="card-body pb-0">
                                            <div className="card mb-4 box-shadow-none">
                                                <div className="card-header inner-card-header p-4">
                                                    <div className="card-header-content">
                                                        <div className="card-header-left-section">

                                                            <h3 className="card-title text-capitalize fs-18 font-font-weight-semibold-text">New Website Required </h3>
                                                            <p className="font-weight-semibold fs-16 mb-0">11:45AM 27th August 2020</p>
                                                        </div>
                                                        <div className="card-header-right-section">

                                                            <div className="card-header-buttons">
                                                                <button className="btn service-btn mw-100 w-auto px-5 mr-3">Not Interested</button>
                                                                <button className="btn service-btn mw-100 w-auto px-5 active">Work With</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-find-buyer-content">
                                                        <div className="card-find-buyer-details">
                                                            <div className="buyer-desc">
                                                                <p>'New website required'. 'Project' basis.</p>
                                                                <p>Create a new website.</p>
                                                                <p><b>Need help with: </b> Full Web designer/Development</p>
                                                                <p><b>E-commerce:</b> Shopify.</p>
                                                                <p><b> Products:</b> 1,000+</p>
                                                                <p><b>Go live/Be updated:</b>  Within a week</p>
                                                                <p><b>Goals/Targets: </b>Sell more of my Product/Service </p>
                                                                <p><b> Services:</b> Web Design</p>
                                                                <p><b> Amount:</b> £5,000 - £10,000</p>
                                                            </div>
                                                            <div className="buyer-desc-right-section ml-auto">
                                                                <div className="gauge-meter">
                                                                <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={350} width={250} />

                                                                    {/* <CircularGaugeComponent style={{
                                                                        width: 200,
                                                                        height: 200
                                                                    }}>
                                                                        <Inject services={[Annotations]} />
                                                                        <AxesDirective>
                                                                            <AxisDirective lineStyle={{
                                                                                width: 2,
                                                                                color: '#fff'
                                                                            }} background='transparent'
                                                                                majorTicks={{
                                                                                    interval: 15,
                                                                                    color: '#766aec',
                                                                                    height: 3,
                                                                                    width: 3
                                                                                }} minorTicks={{
                                                                                    interval: 5,
                                                                                    color: '#766aec',
                                                                                    height: 5,
                                                                                    width: 2
                                                                                }}
                                                                                labelStyle={{
                                                                                    font: {
                                                                                        color: '#766aec',
                                                                                        size: 15,
                                                                                        fontWeight: 'normal'
                                                                                    }
                                                                                }}>
                                                                                <PointersDirective>
                                                                                    <PointerDirective value={45} pointerWidth={2} needleStartWidth={3} needleEndWidth={3} radius='80%' color='#766aec' cap={{
                                                                                        radius: 4,
                                                                                        color: '#766aec',
                                                                                        border: {
                                                                                            color: '#766aec',
                                                                                            width: 10
                                                                                        },
                                                                                    }} needleTail={{
                                                                                        length: '0%'
                                                                                    }}></PointerDirective>
                                                                                </PointersDirective>
                                                                                <AnnotationsDirective>
                                                                                    <AnnotationDirective content='<div><div><span>Pointer Value : 45</span></div></div>' />
                                                                                </AnnotationsDirective>
                                                                            </AxisDirective>
                                                                        </AxesDirective>
                                                                    </CircularGaugeComponent> */}
                                                                </div>
                                                                <div className="buyerbutton-list mt-5">
                                                                    <button className="service-btn mw-100  px-5 ready-hire-btn active d-block">
                                                                        <span className="star-icon fs-20 pr-3"><i class="fa fa-star-o" aria-hidden="true"></i></span>
                                                                        Ready to Hire
                                                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="card mb-4 box-shadow-none">
                                                <div className="card-header inner-card-header p-4">
                                                    <div className="card-header-content">
                                                        <div className="card-header-left-section">
                                                            <h3 className="card-title text-capitalize fs-18 font-font-weight-semibold-text">Website overhaul required</h3>
                                                            <p className="font-weight-semibold fs-16 mb-0">11:45AM 27th August 2020</p>
                                                        </div>
                                                        <div className="card-header-right-section">
                                                            <div className="card-header-buttons">
                                                                <button className="btn service-btn mw-100 w-auto px-5 mr-3">Not Interested</button>
                                                                <button className="btn service-btn mw-100 w-auto px-5 active">Work With</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-find-buyer-content">
                                                        <div className="card-find-buyer-details">
                                                            <div className="buyer-desc">
                                                                <p>'New Website overhaul required'. 'Project' basis.</p>
                                                                <p>Create a new website.</p>
                                                                <p><b>Need help with: </b> Full Web designer/Development</p>
                                                                <p><b>E-commerce:</b> Shopify.<b> Products:</b> 1,000+</p>
                                                                <p><b>Go live/Be updated:</b>  Within a week</p>
                                                                <p><b>Goals/Targets: </b>Sell more of my Product/Service </p>
                                                                <p><b> Services:</b> Web Design</p>
                                                                <p><b> Amount:</b> £5,000 - £10,000</p>
                                                            </div>
                                                            <div className="buyer-desc-right-section ml-auto">
                                                                <div className="gauge-meter">
                                                                <ReactApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={350} width={250} />
                                                                </div>
                                                                <div className="buyerbutton-list mt-5">
                                                                    <button className="service-btn mw-100  px-5 ready-hire-btn look-quote-btn d-block">
                                                                        {/* <div className="service-btn mw-100  px-5 ready-hire-btn text-center  d-block">£5,000 - £10,000 </div> */}
                                                                        Looking for Quotes
                                                            </button>

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
                </div>
            </div>
        )
    }
}
