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
                <div className="sptb bg-white">
                    <div className="container">
                        <div className="section-title center-block text-center">
                            <h1>WHO ARE WE? THIS IS OUR STORY</h1>
                        </div>
                        <div className="about-desc pb-md-7 pb-0">
                            <p>Born during the Covid crisis of 2020, when offices were left empty with phones left to continuously ring.</p>
                            <p>Did you ever try cold calling or calling to buy services? I'm betting there were long hold times and voicemail responses.</p>
                            <h4 className="font-weight-semibold">We set out to create a platform that solves two things:</h4>
                            <p className="pl-4">1. Connect B2B buyers and sellers without having to search through multiple networking & review sites.</p>
                            <p className="pl-4">2. Qualifies leads for sales teams & doesn't cost an arm and a leg just to connect with them.</p>
                            <p>We like to keep things simple and tailored to our users. If you have any ideas on how can improve our service, we'd love to hear from you at< a href="#"> team@workwyse.io </a></p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="services-item">
                                    <div className="mb-lg-0 mb-4">
                                        <div className="service-card text-center">
                                            <div className="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/megaphone.png')} alt="img" />
                                            </div>
                                            <div className="servic-data mt-3">
                                                <h4 className="font-weight-semibold mb-2">General Account</h4>
                                                <h5>team@workwyse.io</h5>
                                                <p className="text-muted mb-0">Reference site about Generate Account, giving information on its origins, as well as a random acc generator.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="services-item">
                                    <div className="mb-lg-0 mb-4">
                                        <div className="service-card text-center">
                                            <div className="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/technical.png')} alt="img" />
                                            </div>
                                            <div className="servic-data mt-3">
                                                <h4 className="font-weight-semibold mb-2">Help Technical Issues</h4>
                                                <h5>support@workwyse.io</h5>
                                                <p className="text-muted mb-0">Reference site about Technical Issues, giving information on its origins, as well as a random technical generator.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="services-item">
                                    <div className="mb-lg-0 mb-4">
                                        <div className="service-card text-center">
                                            <div className="bg-light icon-bg icon-service text-purple about">
                                                <img src={require('../assets/images/products/about/billing.png')} alt="img" />
                                            </div>
                                            <div className="servic-data mt-3">
                                                <h4 className="font-weight-semibold mb-2">Billing Inquiries</h4>
                                                <h5>billing@workwyse.io</h5>
                                                <p className="text-mute mb-0">Reference site about Billing Inquiries, giving information on its origins, as well as a random billing psum generator. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cover-image sptb bg-background-color contact-bg">
                    <div className="content-text mb-0">
                        <div className="container">
                            <div className="text-center text-white section-title pb-7">
                                <h1>Workwyse is a registered association in Luzern, Switzerland </h1>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white p-0">
                                    <div className="about-map-section">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.1523816246!2d72.68221020433099!3d21.15914250210564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1597424132065!5m2!1sen!2sin" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 contact-us-desc">
                                    <h4 className="contact-us-title text-white"> Contact Details</h4>
                                    <div className="filedlist">
                                        <div className="contact-us-static-fields">
                                            <h4><i className="fa fa-address-card"></i>Workwyse Association</h4>
                                            <hr className="mb-40" />
                                        </div>
                                        <div className="contact-us-static-fields">
                                            <h4><i className="fa fa-phone"></i>+91 8866339158</h4>
                                            <hr className="mb-40" />
                                        </div>
                                        <div className="contact-us-static-fields">
                                            <h4><i className="fa fa-calculator"></i>654321</h4>
                                            <hr className="mb-40" />
                                        </div>
                                        <div className="contact-us-static-fields">
                                            <h4><i className="fa fa-map-marker"></i>Horw, 5058 Switzerland</h4>
                                            <hr className="mb-40" />
                                        </div>
                                        <div className="mt-5"> <a href="#" className="btn btn-contact-us">Contact Us</a> </div>
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
