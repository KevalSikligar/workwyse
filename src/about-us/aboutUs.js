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
                            <h1>WHO ARE WE? THIS IS OUR STORY</h1>
                        </div>
                        <div class="about-desc pb-md-7 pb-0">
                            <p>Born during the Covid crisis of 2020, when offices were left empty with phones left to continuously ring.</p>
                            <p>Did you ever try cold calling or calling to buy services? I'm betting there were long hold times and voicemail responses.</p>
                            <h4 class="font-weight-semibold">We set out to create a platform that solves two things:</h4>
                            <p class="pl-4">1. Connect B2B buyers and sellers without having to search through multiple networking & review sites.</p>
                            <p class="pl-4">2. Qualifies leads for sales teams & doesn't cost an arm and a leg just to connect with them.</p>
                            <p>We like to keep things simple and tailored to our users. If you have any ideas on how can improve our service, we'd love to hear from you at< a href="#"> team@workwyse.io </a></p>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="services-item">
                                    <div class="mb-lg-0 mb-4">
                                        <div class="service-card text-center">
                                            <div class="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/megaphone.png')} alt="img" />
                                            </div>
                                            <div class="servic-data mt-3">
                                                <h4 class="font-weight-semibold mb-2">General Account</h4>
                                                <h5>team@workwyse.io</h5>
                                                <p class="text-muted mb-0">Reference site about Generate Account, giving information on its origins, as well as a random Lipsum generator.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="services-item">
                                    <div class="mb-lg-0 mb-4">
                                        <div class="service-card text-center">
                                            <div class="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/technical.png')} alt="img" />
                                            </div>
                                            <div class="servic-data mt-3">
                                                <h4 class="font-weight-semibold mb-2">Help Technical Issues</h4>
                                                <h5>support@workwyse.io</h5>
                                                <p class="text-muted mb-0">Reference site about Technical Issues, giving information on its origins, as well as a random Lipsum generator.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="services-item">
                                    <div class="mb-lg-0 mb-4">
                                        <div class="service-card text-center">
                                            <div class="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/billing.png')} alt="img" />
                                            </div>
                                            <div class="servic-data mt-3">
                                                <h4 class="font-weight-semibold mb-2">Billing Inquiries</h4>
                                                <h5>billing@workwyse.io</h5>
                                                <p class="text-mute mb-0">Reference site about Billing Inquiries, giving information on its origins, as well as a random Lipsum generator. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cover-image sptb bg-background-color contact-bg"> 
                    <div class="content-text mb-0"> 
                        <div class="container"> 
                            <div class="text-center text-white section-title pb-7">
                                <h1>Workwyse is a registered association in Luzern, Switzerland </h1>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12 bg-white p-0">
                                    <div class="about-map-section">
                                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1523816246!2d72.68221020433099!3d21.15914250210564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1597424132065!5m2!1sen!2sin"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                       </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-12 contact-us-desc">
                                    <h4 class="contact-us-title text-white"> Contact Details</h4>
                                    <div class="filedlist">
                                    <div class="contact-us-static-fields">
                                        <h4><i class="fa fa-address-card"></i>Workwyse Association</h4>
                                        <hr class="mb-40" />
                                    </div>
                                    <div class="contact-us-static-fields">
                                        <h4><i class="fa fa-phone"></i>+91 8866339158</h4>
                                        <hr class="mb-40" />
                                    </div>
                                    <div class="contact-us-static-fields">
                                        <h4><i class="fa fa-calculator"></i>654321</h4>
                                        <hr class="mb-40" />
                                    </div>
                                    <div class="contact-us-static-fields">
                                        <h4><i class="fa fa-map-marker"></i>Horw, 5058 Switzerland</h4>
                                        <hr class="mb-40" />
                                    </div>
                                    <div class="mt-5"> <a href="#" class="btn btn-contact-us">Contact Us</a> </div>
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
