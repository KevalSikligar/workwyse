import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { NavLink } from "react-router-dom";
import { Form, Input, Button } from "antd";
import Login from "../Login/Login";

export default function ForgotPassword() {
    const pathList = [{ to: "/forgot-password", title: "Forgot Password" }];

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <BreadCrumbs title="Forgot Password" breadcrumbssegment={pathList} />
            <section className="sptb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                            <div className="single-page w-100 p-0">
                                <div className="wrapper wrapper2">
                                    {/* <form id="forgotpsd" className="card-body">
                                        <h3 className="pb-2">Forgot password</h3>
                                        <div className="mail">
                                            <input type="email" name="mail" />
                                        </div>
                                        <div className="submit">
                                            <a className="btn btn-primary btn-block" href="index.html">Send</a>
                                        </div>
                                        
                                    </form> */}
                                    <h3 className="pb-2">Forgot password</h3>
                                    <Form name="basic" className="card-body"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}>
                                        <label>Mail or Username</label>
                                        <div className="mail">
                                            <Form.Item name="username"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "Please enter your username!"
                                                    }]}>
                                                <Input />
                                            </Form.Item>
                                        </div>
                                        <Form.Item className="submit">
                                            <Button type="primary" htmlType="submit">Submit</Button>
                                        </Form.Item>
                                        <div className="text-center text-dark mb-0">
                                            Forget it, <span data-toggle="modal" data-target="#ModalLogin">send me back </span>to the sign in.
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Login id="ModalLogin"></Login>
        </div>
    );
}
