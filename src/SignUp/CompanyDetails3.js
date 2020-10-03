import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Input, Button } from "antd";

class CompanyDetails3 extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    onFinish = (values) => {
        console.log("Success:", values);
        this.props.nextStep();
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    render() {
        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1];
        const finalName = route.charAt(0).toUpperCase() + route.slice(1);
        const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];

        return (
            <>
                <BreadCrumbs
                    title={`${finalName} Sign Up`}
                    breadcrumbssegment={pathList}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar
                                    animated
                                    variant="primary"
                                    now={55}
                                />

                                <div className="card-header">
                                    <h3 className="card-title">
                                        Complete Your Profile
                                    </h3>
                                </div>
                                <Form
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                >
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6 border-width-5 pr-md-5">
                                                <div className="upload-img mb-5">
                                                    <img
                                                        src={require("../assets/images/upload-picture.png")}
                                                        className="logo-image img-fluid"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label className="form-label">
                                                        Upload Image
                                                </label>
                                                    <div className="custom-file">
                                                        <input
                                                            type="file"
                                                            className="custom-file-input"
                                                            name="example-file-input-custom"
                                                        />
                                                        <label className="custom-file-label">
                                                            Choose file
                                                    </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6 pl-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Company Tagline/Slogan
                                                </label>
                                                    <Form.Item
                                                        name="jobTitle"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your company tagline!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Company Description
                                                </label>
                                                    <Form.Item
                                                        name="jobTitle"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your company description!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <Form.Item>
                                            <Button
                                                className="btn btn-info mr-2"
                                                onClick={this.back}
                                            >Back
                                    </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                            >Next
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CompanyDetails3;
