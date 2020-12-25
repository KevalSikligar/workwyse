import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { Link } from 'react-router-dom';
export default class ContactUs extends Component {
  render() {
    const pathList = [{ to: "/contact-us", title: "Contact Us" }];
    return (
      <div>
        <BreadCrumbs title="Contact Us" breadcrumbssegment={pathList} />
        <div className="sptb bg-white">
          <div className="container">
            <div className="section-title center-block text-center">
              <h2>Contact Us</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services-item">
                  <div className="mb-lg-0 mb-4">
                    <div className="service-card text-center">
                      <div className="bg-light icon-bg icon-service text-purple about">
                        <img src={require("../assets/images/products/about/megaphone.png")} alt="img" />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">General Account</h4>
                        <h5>team@workwyse.io</h5>
                        {/* <p className="text-muted mb-0">
                          Reference site about Generate Account, giving information on its origins, as well as a random acc generator.
                        </p> */}
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
                        <img src={require("../assets/images/products/about/technical.png")} alt="img" />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">Help Technical Issues</h4>
                        <h5>support@workwyse.io</h5>
                        {/* <p className="text-muted mb-0">
                          Reference site about Technical Issues, giving information on its origins, as well as a random technical generator.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="services-item">
                  <div className="mb-lg-0 mb-4">
                    <div className="service-card text-center">
                      <div className="bg-light icon-bg icon-service text-purple about">
                        <img src={require("../assets/images/products/about/billing.png")} alt="img" />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">Billing Inquiries</h4>
                        <h5>billing@workwyse.io</h5>
                        <p className="text-mute mb-0">Reference site about Billing Inquiries, giving information on its origins, as well as a random billing psum generator. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="cover-image sptb bg-background-color contact-bg">
          <div className="content-text mb-0">
            <div className="container">
              <div className="text-center text-white section-title pb-7">
                <h1> Contact Form</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-white p-0">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 contact-us-desc">
                  <div className="filedlist">
                    <div className="contact-us-static-fields">
                      <h4>
                        <label>Full Name</label>
                        <input className="fa fa-address-card" />
                      </h4>
                      <hr className="mb-40" />
                    </div>
                    <div className="contact-us-static-fields">
                      <h4>
                        <label>What is your email address?</label>
                        <input className="fa fa-address-card" />
                      </h4>
                      <hr className="mb-40" />
                    </div>
                    <div className="contact-us-static-fields">
                      <h4>
                        <label>Are you a;</label>
                        <p className="btn btn-contact-us active">Buyer</p>
                        <p className="btn btn-contact-us active">Seller</p>
                        <p className="btn btn-contact-us active">Buyer and Seller</p>
                        <p className="btn btn-contact-us active">None of the above</p>
                      </h4>
                      <hr className="mb-40" />
                    </div>
                    <div className="contact-us-static-fields">
                      <h4>
                        <label>Your message to us;</label>
                        <textarea className="fa fa-map-marker" rows={5} columns={100}></textarea>
                      </h4>
                      <hr className="mb-40" />
                    </div>
                    <div className="mt-5">
                      <Link aria-current="page" className="btn btn-contact-us active" to="/contact-us">Submit</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}