import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Menu, Dropdown } from "antd";

class CompanyDetails2 extends Component {

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

    handleButtonClick(e) {
        console.info("Click on left button.");
        console.log("click left button", e);
    }

    render() {

        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1];
        const finalName = route.charAt(0).toUpperCase() + route.slice(1);
        const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];

        const companySize = (
            <Menu onClick={(e) => this.handleMenuClick(e)}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    1-5
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    6-15
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    16-30
                </Menu.Item>
            </Menu>
        );

        const companyScale = (
            <Menu onClick={(e) => this.handleMenuClick(e)}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Local
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    National
                </Menu.Item>
                <Menu.Item key="3" icon={<UserOutlined />}>
                    Global
                </Menu.Item>
            </Menu>
        );

        return (
            <>
                <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={35} />
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
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Company Size
                                                    </label>
                                                    <Dropdown
                                                        overlay={companySize}
                                                    >
                                                        <Button>
                                                            Select Company Size
                                                            <DownOutlined />
                                                        </Button>
                                                    </Dropdown>
                                                    {/* <select className="form-control">
                                                        <option>
                                                            Select Company Size
                                                    </option>
                                                        <option>1-5</option>
                                                        <option>6-15</option>
                                                        <option>15-60</option>
                                                    </select> */}
                                                </div>
                                            </div>

                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        What is the scale of
                                                        your operation(s)?
                                                    </label>
                                                    <Dropdown
                                                        overlay={companyScale}
                                                    >
                                                        <Button>
                                                            Select Company Size
                                                            <DownOutlined />
                                                        </Button>
                                                    </Dropdown>
                                                    {/* <select className="form-control">
                                                        <option>Local</option>
                                                        <option>National</option>
                                                        <option>Global</option>
                                                    </select> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        External Link 1
                                                    </label>
                                                    <Form.Item
                                                        name="firstname"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter external link 1!",
                                                            }
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        External Link 2
                                                    </label>
                                                    <Form.Item
                                                        name="firstname"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter external link 2!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        External Link 3
                                                    </label>
                                                    <Form.Item
                                                        name="firstname"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter external link 3!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        External Link 4
                                                    </label>
                                                    <Form.Item
                                                        name="firstname"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter external link 4!",
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
                                            >
                                                Back
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

export default CompanyDetails2;
