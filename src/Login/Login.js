import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function Login(props) {
    return (
        <>
            <div className="modal fade modal-register" tabIndex="-1" id="ModalLogin" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                        <a href="https://www.linkedin.com/login" className="btn btn-secondary btn-linkdin-bg mb-sm-0"><i className="fa fa-linkedin fa-1x mr-2"></i> LinkedIn</a>
                                                    </div>
                                                </div>
                                                <hr className="divider" />
                                                <form id="login" className="card-body" tabIndex="500">
                                                    <div className="mail">
                                                        <input type="email" name="mail" className="form-control"/>
                                                        <label>Mail or Username</label>
                                                    </div>
                                                    <div className="passwd">
                                                        <input type="password" name="password" className="form-control"/>
                                                        <label>Password</label>
                                                    </div>
                                                    <p className="mb-2"><NavLink to="/forgot-password" onClick={() => props.history.push("/forgot-password")} data-dismiss="modal">Forgot Password</NavLink></p>
                                                    <div className="swticher-section">
                                                        <p className="mb-0">I am a :</p>
                                                        <label className="custom-switch">Buyer&nbsp;
                                                        <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                                            <span className="custom-switch-indicator"></span>
                                                            <span className="custom-switch-description">Seller</span>
                                                        </label>
                                                    </div>
                                                    <p className="text-dark mb-0">Don't have account?<NavLink to="sign-up/buyer" onClick={() => props.history.push("/sign-up/buyer")} className="text-primary ml-1" data-dismiss="modal" >Sign Up</NavLink></p>
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

export default withRouter(Login)