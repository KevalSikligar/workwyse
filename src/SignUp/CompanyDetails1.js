import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Input, Select, Button } from "antd";
import Autosuggest from "react-autosuggest";
import { myCompanyNumber } from "../Services/MyCompany";
import swal from "sweetalert";
import axios from "axios";

class CompanyDetails1 extends Component {

    onFinish = (values) => {
        console.log("Success:", values);
        this.props.nextStep();
    };

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    state = {
        companyName: "",
        companyLocation: "",
        value: "",
        suggestions: [],
    };

    componentDidMount = async () => {
        myCompanyNumber().then((res) => {
            this.setState({
                companyName: res.data.company_name,
                companyLocation:
                    res.data.registered_office_address.locality,
            });
        }).catch((err) => {
            swal("There was an error while fetching company data");
        });
    };

    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0
            ? []
            : this.state.suggestions.filter(
                (companyName) =>
                    companyName.toLowerCase().slice(0, inputLength) ===
                    inputValue
            );
    };

    getSuggestionValue = (suggestion) => suggestion;

    renderSuggestion = (suggestion) => <div>{suggestion}</div>;

    onChange = (event, { newValue }) => {
        this.setState(
            {
                value: newValue,
            },
            async () => {
                const resp = await axios.get(
                    `http://localhost:5000/ByCompanyName/${this.state.value}`
                );
                var suggestions = [];
                resp.data.items.map((res) => {
                    return suggestions.push(res.title);
                });
                this.setState({ suggestions });
            }
        );
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(this.state.value),
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1];
        const finalName = route.charAt(0).toUpperCase() + route.slice(1);
        const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];

        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Company Name",
            value,
            onChange: this.onChange,
        };


        const { Option } = Select;

        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                </Select>
            </Form.Item>
        );

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
                                    now={20}
                                />
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Complete Your Profile
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <Form
                                        name="basic"
                                        initialValues={{ remember: true }}
                                        onFinish={this.onFinish}
                                        onFinishFailed={this.onFinishFailed} >
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        First Name
                                                    </label>
                                                    <Form.Item
                                                        name="firstname"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your firstname!",
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
                                                        Surname
                                                    </label>
                                                    <Form.Item
                                                        name="surname"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your surname!",
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
                                                        Email
                                                    </label>
                                                    <Form.Item
                                                        name="email"
                                                        rules={[
                                                            {
                                                                type: "email",
                                                                message:
                                                                    "The input is not valid E-mail!",
                                                            },
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please input your E-mail!",
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
                                                        Phone Number
                                                    </label>
                                                    <Form.Item
                                                        name="phone"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please input your phone number!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            addonBefore={
                                                                prefixSelector
                                                            }
                                                            style={{
                                                                width: "100%",
                                                            }}
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Company Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control position-relative"
                                                        placeholder="Number"
                                                    />
                                                    <button className="search-icon">
                                                        <i
                                                            className="fa fa-search"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Company Name
                                                    </label>
                                                    <Autosuggest
                                                        suggestions={
                                                            suggestions
                                                        }
                                                        onSuggestionsFetchRequested={
                                                            this.onSuggestionsFetchRequested
                                                        }
                                                        onSuggestionsClearRequested={
                                                            this.onSuggestionsClearRequested
                                                        }
                                                        getSuggestionValue={
                                                            this.getSuggestionValue
                                                        }
                                                        renderSuggestion={
                                                            this.renderSuggestion
                                                        }
                                                        inputProps={inputProps}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">
                                                        Trading As
                                                    </label>
                                                    <Form.Item
                                                        name="tradingAs"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter who you are trading as !",
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
                                                        Job Title
                                                    </label>
                                                    <Form.Item
                                                        name="jobTitle"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your Job Title!",
                                                            },
                                                        ]}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                                <label className="form-label text-dark fs-16">
                                                    Show me Seller
                                                </label>
                                                <div className="custom-controls-stacked rdb-steps-1">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-6 col-sm-12">
                                                            <label className="custom-control custom-radio mb-5">
                                                                <input
                                                                    type="radio"
                                                                    className="custom-control-input"
                                                                    defaultChecked
                                                                    name="example-radios3"
                                                                    value="option1"
                                                                />
                                                                {/* <span className="">Visible to everyone</span> */}
                                                                <div className="custom-control-label d-md-flex w-100 align-items-center  ml-4">
                                                                    <select className="form-control w-50">
                                                                        <option>
                                                                            20
                                                                            miles
                                                                        </option>
                                                                        <option>
                                                                            40
                                                                            miles
                                                                        </option>
                                                                        <option>
                                                                            60
                                                                            miles
                                                                        </option>
                                                                    </select>
                                                                    <span className="px-5 form-label text-dark fs-16">
                                                                        of
                                                                    </span>
                                                                    <div className="form-group w-50 mb-0">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control position-relative"
                                                                            placeholder="Location"
                                                                        />
                                                                        <span className="map-icon">
                                                                            <img
                                                                                src={require("../assets/images/svg/gps.svg")}
                                                                                className="location-gps"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <label className="custom-control custom-radio">
                                                                <input
                                                                    type="radio"
                                                                    className="custom-control-input"
                                                                    name="example-radios3"
                                                                    value="option2"
                                                                />
                                                                {/* <span className="custom-control-label">Visible to only my Customers</span> */}
                                                                <div className="custom-control-label d-md-flex w-100 align-items-center  ml-4">
                                                                    <select className="form-control w-50">
                                                                        <option>
                                                                            20
                                                                            miles
                                                                        </option>
                                                                        <option>
                                                                            40
                                                                            miles
                                                                        </option>
                                                                        <option>
                                                                            60
                                                                            miles
                                                                        </option>
                                                                    </select>
                                                                    <span className="px-5 form-label text-dark fs-16">
                                                                        of
                                                                    </span>
                                                                    <div className="form-group w-50 mb-0">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control position-relative"
                                                                            placeholder="Location"
                                                                        />
                                                                        <span className="map-icon">
                                                                            <img
                                                                                src={require("../assets/images/svg/gps.svg")}
                                                                                className="location-gps"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer text-right">
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit">Next</Button>
                                            </Form.Item>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CompanyDetails1;
