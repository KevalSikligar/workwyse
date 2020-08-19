import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark text-white cover-image" data-image-src={require("../../assets/images/banners/banner3.jpg")}>                    <div className="text-white-50 border-top p-0">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
                                Copyright © 2020 <a href="index.html" className="fs-14 text-white">Workwyse</a>. Designed by <a href="spruko.com" className="fs-14 text-white">Workwyse</a> All rights reserved.
							</div>
                            <div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2 d-none d-lg-block">
                                <ul className="social mb-0">
                                    <li className="social-icon"><i className="fa fa-facebook"></i></li>
                                    <li className="social-icon"><i className="fa fa-twitter"></i></li>
                                    <li className="social-icon"><i className="fa fa-rss"></i></li>
                                    <li className="social-icon"><i className="fa fa-youtube"></i></li>
                                    <li className="social-icon"><i className="fa fa-linkedin"></i></li>
                                    <li className="social-icon"><i className="fa fa-google-plus"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="text-white p-0 border-top">
                        <div className="container">
                            <div className="p-2 text-center footer-links">
                                <Link className="btn btn-link active" to="/about-us" >About Us </Link>
                                <Link className="btn btn-link" to="/faq">FAQ </Link>
                                <Link className="btn btn-link" to="/how-it-works">How It Works </Link>
                                <Link className="btn btn-link" to="/terms-of-service">Terms of service </Link>
                                <Link className="btn btn-link" to="/privacy-policy">Privacy Policy </Link>
                                <Link className="btn btn-link" to="/pricing" >Pricing </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
