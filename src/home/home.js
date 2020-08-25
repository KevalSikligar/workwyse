import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ReCaptcha } from 'react-recaptcha-google'

export default class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
    componentDidMount() {
        if (this.captchaDemo) {
            console.log("started, just a second...")
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }
    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }
    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!  
        console.log(recaptchaToken, "<= your recaptcha token")
    }
    render() {
        return (
            <div>
                <div className="sptb">
                    <div className="bannerimg cover-image bg-background3 sptb-2">
                        <div class="header-text mb-0">
                            <div class="container">
                                <div class="text-center text-white mb-7">
                                    <h1 class="mb-1">Find Verified Marketing And Advertising Firms</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable.</p>
                                </div>
                                <div class="row">
                                    <div class="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                                        <div class="search-background bg-transparent">
                                            <div className="form row no-gutters">
                                                <div className="form-group  col-xl-4 col-lg-3 col-md-12 mb-0 bg-white ">
                                                    <input type="text" className="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="What service are you looking for?" />
                                                </div>
                                                <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-white">
                                                    <input type="text" className="form-control input-lg br-md-0" id="text5" placeholder="PostCode/City" />
                                                    <span><img src={require('../assets/images/svg/gps.svg')} className="location-gps" alt="img" /></span>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-12 mb-0">
                                                    <a href="!#" className="btn btn-lg btn-block btn-secondary br-tl-md-0 br-bl-md-0"><i className="fa fa-search mr-1"></i>Post A Project</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sptb container">
                        <div className="row">
                            <div class="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
                                <div className="single-page">
                                    <div class="wrapper wrapper2">
                                        <div class="p-4 mb-5">
                                            <h4 class="text-left font-weight-semibold fs-16">Login With</h4>
                                            <div class="btn-list d-sm-flex">
                                                <a href="https://www.linkedin.com/login" class="btn btn-secondary btn-linkdin-bg mb-sm-0"><i class="fa fa-linkedin fa-1x mr-2"></i> LinkedIn</a>
                                            </div>
                                        </div>
                                        <hr class="divider" />
                                        <form id="login" class="card-body" tabindex="500">
                                            <div class="mail">
                                                <input type="email" name="mail" />
                                                <label>Mail or Username</label>
                                            </div>
                                            <div class="passwd">
                                                <input type="password" name="password" />
                                                <label>Password</label>
                                            </div>
                                            <div class="submit">
                                                <NavLink to="/home" class="btn btn-primary btn-block">Login</NavLink>
                                            </div>
                                            <div class="remeber-password">
                                                <p class="mb-0">
                                                    <label class="custom-control custom-checkbox mb-0">
                                                        <input type="checkbox" class="custom-control-input" name="checkbox1" value="option1" />
                                                        <span class="custom-control-label">
                                                           Remember Me
                                                        </span>
                                                    </label>
                                                </p>
                                                <p class="mb-0"><NavLink to="/forgot-password">Forgot Password</NavLink></p>
                                            </div>
                                            <hr className="my-5" />
                                            <div className="swticher-section">
                                                <p className="mb-0">I am a :</p>
                                                <label class="custom-switch">
                                                    <input type="checkbox" name="custom-switch-checkbox" class="custom-switch-input"/>
                                                    <span class="custom-switch-indicator"></span>
                                                    <span class="custom-switch-description">Buyer/Seller</span>
                                                </label>                                                
                                            </div>
                                            <hr className="my-5" />
                                            <div className="clearfix"></div>
                                            {/* <div>
                                                <ReCaptcha
                                                    ref={(el) => { this.captchaDemo = el; }}
                                                    size="normal"
                                                    data-theme="dark"
                                                    render="explicit"
                                                    sitekey="your_site_key"
                                                    onloadCallback={this.onLoadRecaptcha}
                                                    verifyCallback={this.verifyCallback}
                                                />
                                            </div> */}
                                            <p class="text-dark mb-0">Don't have account?<a href="register.html" class="text-primary ml-1">Sign UP</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12 col-12 d-block">

                                <div className="post-project-video">
                                    <iframe title="Post Project" src="https://www.youtube.com/embed/QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    };
};
