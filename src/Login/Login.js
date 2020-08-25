import React from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="modal fade modal-register" tabindex="-1" id="ModalLogin" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <section className="">
                            <div className="customerpage">
                                <div className="row">
                                    <div className="single-page" >
                                        <div className="d-block mx-auto">
                                            <div className="wrapper wrapper2">
                                                <div className="p-4 mb-5">
                                                    <div className="modal-header">
                                                        <h4 className="text-left font-weight-semibold fs-16 mb-0">Login With</h4>
                                                        <button type="button" className="close py-0" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="btn-list d-sm-flex">
                                                        <a href="https://www.google.com/gmail/" className="btn btn-primary mb-sm-0"><i className="fa fa-google fa-1x mr-2"></i> Google</a>
                                                        <a href="https://twitter.com/" className="btn btn-secondary mb-sm-0"><i className="fa fa-twitter fa-1x mr-2"></i> Twitter</a>
                                                        <a href="https://www.facebook.com/" className="btn btn-info mb-0"><i className="fa fa-facebook fa-1x mr-2"></i> Facebook</a>
                                                        <a href="https://www.linkedin.com/" className="btn btn-dark mb-0"><i className="fa fa-linkedin fa-1x mr-2"></i> LinkedIn</a>
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
                                                    {/* <div className="submit">
                                                        <NavLink to="/about-us" className="btn btn-primary btn-block">Login</NavLink>
                                                    </div>
                                                    <div className="toggle-switch">
                                                        <label className="switch">
                                                            I am a Buyer
                                                            <input type="checkbox" checked />
                                                            <span className="slider round"></span>
                                                            Seller
                                                        </label>
                                                    </div> */}
                                                    <p className="mb-2"><NavLink to="/forgot-password" >Forgot Password</NavLink></p>
                                                    <p className="text-dark mb-0">Don't have account?<a href="register.html" className="text-primary ml-1">Sign Up</a></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
};