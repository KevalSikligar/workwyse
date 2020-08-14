import React from 'react'
import { withRouter } from 'react-router-dom'
import BreadCrumbs from '../breadcrumbs/breadcrumbs';

function AboutUs(props) {

    const pathList = [
        { to: "/about-us", title: "About Us" }
    ]
    return (
        <>
            <BreadCrumbs title="About Us" breadcrumbssegment={pathList} />
            <div>
                <div class="sptb bg-white">
                    <div class="container">
                        <div class="section-title center-block text-center">
                            <h1>Our Information</h1>
                            <p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
                        </div>
                        <div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="">
                                    <div class="mb-lg-0 mb-4">
                                        <div class="service-card text-center">
                                            <div class="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/megaphone.png')} alt="img" />
                                            </div>
                                            <div class="servic-data mt-3">
                                                <h4 class="font-weight-semibold mb-2">General Account</h4>
                                                <h5>team@workwyse.io</h5>
                                                <p class="text-muted mb-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="">
                                    <div class="mb-lg-0 mb-4">
                                        <div class="service-card text-center">
                                            <div class="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/technical.png')} alt="img" />
                                            </div>
                                            <div class="servic-data mt-3">
                                                <h4 class="font-weight-semibold mb-2">Help Technical Issues</h4>
                                                <h5>support@workwyse.io</h5>
                                                <p class="text-muted mb-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="">
                                    <div class="mb-lg-0 mb-4">
                                        <div class="service-card text-center">
                                            <div class="bg-light icon-bg icon-service text-purple about">

                                                <img src={require('../assets/images/products/about/billing.png')} alt="img" />
                                            </div>
                                            <div class="servic-data mt-3">
                                                <h4 class="font-weight-semibold mb-2">Billing Inquiries</h4>
                                                <h5>billing@workwyse.io</h5>
                                                <p class="text-mute mb-0">Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(AboutUs)
