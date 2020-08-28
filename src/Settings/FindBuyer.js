import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import GaugeChart from 'react-gauge-chart'

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
                        {/* <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                            <GaugeChart id="gauge-chart5"
                                nrOfLevels={420}
                                arcsLength={[0.3, 0.5, 0.2]}
                                colors={['#5BE12C', '#F5CD19', '#EA4228']}
                                percent={0.37}
                                arcPadding={0.02}
                                hideText
                            />
                        </div> */}
                        <div className="custom-card">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Find Buyer</h3>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="card mb-4 box-shadow-none">
                                        <div className="card-header inner-card-header p-4">
                                            <div className="card-header-content">
                                                <div className="card-header-left-section">
                                                    <h3 className="card-title text-capitalize fs-18 font-font-weight-semibold-text">New Website Required </h3>
                                                    <p className="font-weight-semibold fs-16">11:45AM 27th August 2020</p>
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
                                                        <p><b>E-commerce:</b> Shopify.<b> Products:</b> 1,000+</p>
                                                        <p><b>Go live/Be updated:</b>  Within a week</p>
                                                        <p><b>Goals/Targets: </b>Sell more of my Product/Service </p>
                                                    </div>
                                                    <div className="buyer-desc-right-section ml-auto">
                                                        <div className="buyerbutton-list">
                                                            <button className="service-btn mw-100  px-5 ready-hire-btn active d-block">
                                                                <span className="star-icon fs-20 pr-3"><i class="fa fa-star-o" aria-hidden="true"></i></span>
                                                                Ready to Hire
                                                            </button>
                                                            <button className="service-btn mw-100  px-5 ready-hire-btn my-4  d-block active">Web Design </button>
                                                            <div className="service-btn mw-100  px-5 ready-hire-btn text-center  d-block">£5,000 - £10,000 </div>
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
                                                    <p class="text-dark fs-16">11:45AM 27th August 2020</p>
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
                                                        <p>'NWebsite overhaul required'. 'Project' basis.</p>
                                                        <p>Create a new website.</p>
                                                        <p><b>Need help with: </b> Full Web designer/Development</p>
                                                        <p><b>E-commerce:</b> Shopify.<b> Products:</b> 1,000+</p>
                                                        <p><b>Go live/Be updated:</b>  Within a week</p>
                                                        <p><b>Goals/Targets: </b>Sell more of my Product/Service </p>
                                                    </div>
                                                    <div className="buyer-desc-right-section ml-auto">
                                                        <div className="buyerbutton-list">
                                                            <button className="service-btn mw-100  px-5 ready-hire-btn d-block">
                                                                {/* <div className="service-btn mw-100  px-5 ready-hire-btn text-center  d-block">£5,000 - £10,000 </div> */}
                                                                Looking for Quotes
                                                            </button>
                                                            <button className="service-btn mw-100  px-5 ready-hire-btn my-4 active d-block">Website Design </button>
                                                            <div className="service-btn mw-100  px-5 ready-hire-btn text-center  d-block">£5,000 - £10,000 </div>
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
