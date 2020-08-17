import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="bg-dark text-white cover-image" data-image-src={require("../../assets/images/banners/banner3.jpg")}>                    <div class="text-white-50 border-top p-0">
                    <div class="container">
                        <div class="row d-flex">
                            <div class="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
                                Copyright © 2020 <a href="index.html" class="fs-14 text-white">Workwyse</a>. Designed by <a href="spruko.com" class="fs-14 text-white">Workwyse</a> All rights reserved.
							</div>
                            <div class="col-lg-4 col-sm-12 ml-auto mb-2 mt-2 d-none d-lg-block">
                                <ul class="social mb-0">
                                    <li><a class="social-icon" href=""><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="social-icon" href=""><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="social-icon" href=""><i class="fa fa-rss"></i></a></li>
                                    <li><a class="social-icon" href=""><i class="fa fa-youtube"></i></a></li>
                                    <li><a class="social-icon" href=""><i class="fa fa-linkedin"></i></a></li>
                                    <li><a class="social-icon" href=""><i class="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="text-white p-0 border-top">
                        <div class="container">
                            <div class="p-2 text-center footer-links">
                                <a class="btn btn-link"><Link to="/about-us" class="active">About Us </Link></a>
                                <a class="btn btn-link"><Link to="/faq">FAQ </Link></a>
                                <a class="btn btn-link"><Link to="/how-it-works">How It Works </Link></a>
                                <a class="btn btn-link"><Link to="/terms-of-service">Terms of service </Link></a>
                                <a class="btn btn-link"><Link to="/privacy-policy">Privacy Policy </Link></a>
                                <a class="btn btn-link"><Link to="/pricing" >Pricing </Link></a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
