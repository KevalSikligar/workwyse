import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default function ForgotPassword() {

    const pathList = [
        { to: "/forgot-password", title: "Forgot Password" }
    ]
    return (
        <div>
            <BreadCrumbs title="Forgot Password" breadcrumbssegment={pathList} />
            <section className="sptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                            <div className="single-page w-100 p-0" >
                                <div className="wrapper wrapper2">
                                    <form id="forgotpsd" className="card-body">
                                        <h3 className="pb-2">Forgot password</h3>
                                        <div className="mail">
                                            <input type="email" name="mail" />
                                            <label>Mail or Username</label>
                                        </div>
                                        <div className="submit">
                                            <a className="btn btn-primary btn-block" href="index.html">Send</a>
                                        </div>
                                        <div className="text-center text-dark mb-0">
                                            Forget it, <a href="login.html">send me back</a> to the sign in.
									</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
