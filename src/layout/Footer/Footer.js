import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Footer extends Component {

    render() {

        return (

            <div>
                <footer className="bg-dark text-white cover-image" data-image-src={require("../../assets/images/banners/banner3.jpg")}>
                    <div className="text-white-50 border-top p-0">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left "> Copyright © 2020
                                     <Link to="/home" className="fs-14 text-white"> Workwyse</Link>. Designed by
                                     <Link to="/home" className="fs-14 text-white"> Workwyse</Link> All rights reserved.
							    </div>
                                <div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2 d-none d-lg-block">
                                    <ul className="social mb-0">
                                        <a className="social-icon" target="_blank" href="https://www.facebook.com/workwyse/"><i className="fa fa-facebook mr-3"></i></a>
                                        <a className="social-icon" target="_blank" href="https://twitter.com/WorkWyse"><i className="fa fa-twitter mr-3"></i></a>
                                        <a className="social-icon" target="_blank" href="https://uk.linkedin.com/company/workwyse"><i className="fa fa-linkedin"></i></a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white p-0 border-top">
                        <div className="container">
                            <div className="p-2 text-center footer-links">
                                <Link className="btn btn-link active" to="/how-it-works" >About WorkWyse </Link>
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
