import React, { Component } from "react";
import { Form, Button } from "antd";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Select from "react-select";
import ProgressBar from "react-bootstrap/ProgressBar";

class CompanyDetails4 extends Component {
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
        const options = [
            {
                value: "advertising_marketing",
                label: "Advertising & Marketing",
            },
            { value: "Paid Advertising", label: "Paid Advertising" },
            { value: "web_design", label: "Web Design" },
            { value: "videography", label: "Videography" },
            { value: "market_research", label: "Market Research" },
        ];

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
                                    now={70}
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
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Services</label>
                                                    <Select
                                                        placeholder="Select Services"
                                                        isMulti
                                                        name="colors"
                                                        options={options}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer text-right">
                                        <Form.Item>
                                            <Button
                                                className="btn btn-info mr-2"
                                                onClick={this.back}
                                            >
                                                Back
                                            </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                className="btn btn-warning mr-2"
                                                onClick={this.saveAndContinue}
                                            >
                                                Skip
                                            </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                            >
                                                Next
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

export default CompanyDetails4;
