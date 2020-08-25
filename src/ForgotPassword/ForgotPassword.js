import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

export default function ForgotPassword() {

    const pathList = [
        { to: "/forgot-password", title: "Forgot Password" }
    ]
    return (
        <div>
            <BreadCrumbs title="Forgot Password" breadcrumbssegment={pathList} />
            <section class="sptb">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                            <div class="single-page w-100 p-0" >
                                <div class="wrapper wrapper2">
                                    <form id="forgotpsd" class="card-body">
                                        <h3 class="pb-2">Forgot password</h3>
                                        <div class="mail">
                                            <input type="email" name="mail" />
                                            <label>Mail or Username</label>
                                        </div>
                                        <div class="submit">
                                            <a class="btn btn-primary btn-block" href="index.html">Send</a>
                                        </div>
                                        <div class="text-center text-dark mb-0">
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
