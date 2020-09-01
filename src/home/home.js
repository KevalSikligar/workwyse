import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { ReCaptcha } from 'react-recaptcha-google'
import { LinkedIn } from 'react-linkedin-login-oauth2';

export default class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }


    state = {
        code: '',
        errorMessage: '',
    };


    handleSuccess = (data) => {
        this.setState({
            code: data.code,
            errorMessage: '',
        });
    }

    handleFailure = (error) => {
        this.setState({
            code: '',
            errorMessage: error.errorMessage,
        });
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
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white mb-7">
                                    <h1 className="mb-1">Find Verified Marketing And Advertising Firms</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable.</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                                        <div className="search-background bg-transparent breadcrumb-search">
                                            <div className="form row no-gutters">
                                                <div className="form-group  col-xl-5 col-lg-4 col-md-4 col-sm-12 mb-0 bg-white">
                                                    <input type="text" className="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="What service are you looking for?" />
                                                </div>
                                                <div className="form-group  col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-0 bg-white">
                                                    <input type="text" className="form-control input-lg br-md-0" id="text5" placeholder="PostCode/City" />
                                                    <span><img src={require('../assets/images/svg/gps.svg')} className="location-gps" alt="img" /></span>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-4 mb-0">
                                                    <a href="!#" className="btn btn-lg btn-block btn-success br-tl-md-0 br-bl-md-0"><i className="fa fa-search mr-1"></i>Post A Project</a>
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
                            <div className="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
                                <div className="single-page">
                                    <div className="wrapper wrapper2">
                                        <div className="p-4 mb-5">
                                            <h4 className="text-left font-weight-semibold fs-16">Login With</h4>
                                            <div className="btn-list d-sm-flex">
                                                <LinkedIn
                                                    clientId="81lx5we2omq9xh"
                                                    onFailure={this.handleFailure}
                                                    onSuccess={this.handleSuccess}
                                                    redirectUri="http://localhost:3000/linkedin"
                                                >
                                                </LinkedIn>
                                            </div>
                                        </div>
                                        <hr className="divider" />
                                        <form id="login" className="card-body" tabindex="500">
                                            <div className="mail">
                                                <input type="email" name="mail" />
                                                <label>Mail or Username</label>
                                            </div>
                                            <div className="passwd">
                                                <input type="password" name="password" />
                                                <label>Password</label>
                                            </div>
                                            <div className="submit">
                                                <NavLink to="/home" className="btn btn-primary btn-block">Login</NavLink>
                                            </div>
                                            <div className="remeber-password">
                                                <p className="mb-0">
                                                    <label className="custom-control custom-checkbox mb-0">
                                                        <input type="checkbox" className="custom-control-input" name="checkbox1" value="option1" />
                                                        <span className="custom-control-label">
                                                            Remember Me
                                                        </span>
                                                    </label>
                                                </p>
                                                <p className="mb-0"><NavLink to="/forgot-password">Forgot Password</NavLink></p>
                                            </div>
                                            <hr className="my-5" />
                                            <div className="swticher-section">
                                                <p className="mb-0">I am a :</p>
                                                <label className="custom-switch">Buyer&nbsp;
                                                    <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                                    <span className="custom-switch-indicator"></span>
                                                    <span className="custom-switch-description">Seller</span>
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
                                            <p className="text-dark mb-0">Don't have account?<NavLink to="/sign-up/seller" className="text-primary ml-1">Sign Up</NavLink></p>
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
                </div>
            </div>
        )
    };
};
