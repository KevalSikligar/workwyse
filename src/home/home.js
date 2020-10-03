import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PostProject from "../PostProject/PostProject";
import swal from "sweetalert";
import Autosuggest from "react-autosuggest";
import axios from "axios";
import { connect } from "react-redux";
import SignInLinkedIn from "../SignUp/SignInLinkedIn";
import debounce from 'lodash/debounce'
import { Form, Input, Button } from "antd";

class Home extends Component {

    state = {
        value: "",
        suggestions: []
    };

    render() {

        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: "Enter Post Code",
            value,
            onChange: this.onChange,
        };

        const onFinish = (values) => {
            console.log("Success:", values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log("Failed:", errorInfo);
        };

        return (
            <div>
                <div className="homepage-bg">
                    <div className="bannerimg cover-image banner-1 cover-image sptb-3 pb-14 sptb-tab bg-background2">
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white mb-7">
                                    <h1 className="mb-1 text-white">
                                        Find Verified Marketing And Advertising Firms
                                    </h1>
                                    <p className="text-white">
                                        It is a long established fact that a reader will be distracted by the readable.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                                        <div className="search-background bg-transparent breadcrumb-search">
                                            <div className="form row no-gutters">
                                                <div className="form-group col-xl-5 col-lg-4 col-md-4 col-sm-12 mb-0 bg-white">
                                                    <input
                                                        type="text"
                                                        className="form-control input-lg br-tr-md-0 br-br-md-0"
                                                        id="text4"
                                                        placeholder="What service are you looking for?" />
                                                </div>
                                                <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-0 bg-white">
                                                    <Autosuggest
                                                        suggestions={suggestions}
                                                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                        getSuggestionValue={this.getSuggestionValue}
                                                        renderSuggestion={this.renderSuggestion}
                                                        inputProps={inputProps} />
                                                    <span>
                                                        <img
                                                            src={require("../assets/images/svg/gps.svg")}
                                                            className="location-gps"
                                                            alt="img" />
                                                    </span>
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-4 mb-0">
                                                    <Link
                                                        className="btn btn-lg btn-block btn-success br-tl-md-0 br-bl-md-0"
                                                        onClick={() => this.toggleModal()}>
                                                        <i className="fa fa-search mr-1"></i>
                                                        Post A Project
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-slider-img">
                            <div className="container">
                                <OwlCarousel
                                    id="small-categories"
                                    className="owl-theme"
                                    loop={true}
                                    dots={false}
                                    items={4}
                                    margin={10}
                                    nav>
                                    <div className="item">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="cat-item d-flex">
                                                    <Link
                                                        to={
                                                            "javascript:void(0);"
                                                        }
                                                    ></Link>
                                                    <div className="cat-img mr-4 bg-warning-transparent p-3 brround">
                                                        <img
                                                            src={require("../assets/images/products/categories/operator.png")}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="cat-desc text-left">
                                                        <h5 className="mb-3 mt-0">
                                                            Call Center
                                                        </h5>
                                                        <small className="badge badge-pill badge-primary mr-2">
                                                            7,485 Jobs
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="cat-item d-flex">
                                                    <Link to={"javascript:void(0);"}></Link>
                                                    <div className="cat-img mr-4 bg-success-transparent p-3 brround">
                                                        <img
                                                            src={require("../assets/images/products/categories/nurse.png")}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="cat-desc text-left">
                                                        <h5 className="mb-3 mt-0">
                                                            Nurse
                                                        </h5>
                                                        <small className="badge badge-pill badge-success mr-2">
                                                            7,485 Jobs
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="cat-item d-flex">
                                                    <Link
                                                        to={
                                                            "javascript:void(0);"
                                                        }
                                                    ></Link>
                                                    <div className="cat-img mr-4 bg-info-transparent p-3 brround">
                                                        <img
                                                            src={require("../assets/images/products/categories/charts.png")}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="cat-desc text-left">
                                                        <h5 className="mb-3 mt-0">
                                                            Sales
                                                        </h5>
                                                        <small className="badge badge-pill badge-info mr-2">
                                                            7,485 Jobs
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="card mb-0">
                                            <div className="card-body p-3">
                                                <div className="cat-item d-flex">
                                                    <Link
                                                        to={
                                                            "javascript:void(0);"
                                                        }
                                                    ></Link>
                                                    <div className="cat-img mr-4 bg-danger-transparent p-3 brround">
                                                        <img
                                                            src={require("../assets/images/products/categories/web.png")}
                                                            alt="img"
                                                        />
                                                    </div>
                                                    <div className="cat-desc text-left">
                                                        <h5 className="mb-3 mt-0">
                                                            IT Software
                                                        </h5>
                                                        <small className="badge badge-pill badge-danger mr-2">
                                                            7,485 Jobs
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>

                    <div className="sptb container">
                        <div className="row">
                            {!this.props.isLoggedIn ? (
                                <div className="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
                                    <div className="single-page">
                                        <div className="wrapper wrapper2">
                                            <div className="p-4 mb-4">
                                                <h4 className="text-left font-weight-semibold fs-16 ml-3 mb-3">
                                                    Login With
                                                </h4>
                                                <div
                                                    className="btn-list d-sm-flex"
                                                    className="LinkedIn-btn" >
                                                    <SignInLinkedIn />
                                                </div>
                                            </div>
                                            <hr className="divider" />
                                            <Form
                                                className="card-body"
                                                name="basic"
                                                initialValues={{ remember: true }}
                                                onFinish={onFinish}
                                                onFinishFailed={onFinishFailed}>
                                                <label>Mail or Username</label>
                                                <div className="mail">
                                                    <Form.Item
                                                        name="username"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your username!"
                                                            }]}>
                                                        <Input />
                                                    </Form.Item>
                                                </div>
                                                <label>Password</label>
                                                <div className="passwd">
                                                    <Form.Item
                                                        name="password"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message:
                                                                    "Please enter your password!"
                                                            },
                                                        ]}
                                                    >
                                                        <Input.Password />
                                                    </Form.Item>
                                                </div>
                                                <p className="mb-2">
                                                    <NavLink
                                                        to="/forgot-password"
                                                        onClick={() => this.props.history.push("/forgot-password")}
                                                        data-dismiss="modal">
                                                        Forgot Password
                                                        </NavLink>
                                                </p>
                                                <div className="swticher-section">
                                                    <p className="mb-0">
                                                        I am a :
                                                        </p>
                                                    <label className="custom-switch">
                                                        Buyer&nbsp;
                                                            <input
                                                            type="checkbox"
                                                            name="custom-switch-checkbox"
                                                            className="custom-switch-input" />
                                                        <span className="custom-switch-indicator"></span>
                                                        <span className="custom-switch-description">
                                                            Seller
                                                            </span>
                                                    </label>
                                                </div>
                                                <p className="text-dark mb-0">
                                                    Don't have account?
                                                        <NavLink
                                                        to="sign-up/buyer"
                                                        onClick={() => this.props.history.push("/sign-up/buyer")}
                                                        className="text-primary ml-1"
                                                        data-dismiss="modal">Sign Up
                                                        </NavLink>
                                                </p>

                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit">Submit</Button>
                                                </Form.Item>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    ""
                                )}
                            <div
                                className={
                                    !this.props.isLoggedIn
                                        ? "col-lg-7 col-md-7 col-sm-12 col-12 d-block"
                                        : "col-xl-12 col-lg-12 col-md-12 col-sm-12"
                                }
                            >
                                <div className="job-category">
                                    <div className="section-title center-block text-center">
                                        <h1>Job Categories</h1>
                                        <p>Quickly find a Buyer or Seller</p>
                                    </div>
                                </div>
                                <div className="item-all-cat center-block text-center education-categories">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/cashier.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Cashier
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/makeup.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Beautician
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/chauffer.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Driver
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/web.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        IT Hardware
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/operator.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        BPO
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/truck.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Delivery Jobs
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/web.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        IT Software
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/presentation.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Teacher/Leacturer
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/hand.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Life Insurance
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                                            <div className="item-all-card text-dark text-center">
                                                <div className="iteam-all-icon">
                                                    <img
                                                        src={require("../assets/images/products/categories/charts.png")}
                                                        className="imag-service"
                                                        alt="Cashier"
                                                    />
                                                </div>
                                                <div className="item-all-text mt-3">
                                                    <h5 className="mb-0 text-body">
                                                        Sales
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="post-project-video">
                                    <iframe title="Post Project" src="https://www.youtube.com/embed/QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> </iframe>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <PostProject
                    className="btn btn-lg btn-block btn-success br-tl-md-0 br-bl-md-0"
                    isOpenModal={this.state.showModal}
                    onClose={() => this.toggleModal()}
                />
            </div>
        );
    }

    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0
            ? []
            : this.state.suggestions.filter(
                (city) =>
                    city.toLowerCase().slice(0, inputLength) === inputValue
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
                const resp = await debounce(axios.get(
                    `http://api.postcodes.io/postcodes/${this.state.value}/autocomplete`
                ), 250);
                this.setState({ suggestions: resp.data.result });
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
            suggestions: [],
        });
    };

    toggleModal = () => {
        this.setState({
            showModal: true,
        });
        if (this.state.showModal === true) {
            this.setState({ showModal: false });
            swal("Are you sure you want to Quit the process??", {
                buttons: { cancel: "Continue", catch: "OK" },
                icon: "error",
            }).then((value) => {
                switch (value) {
                    case "catch":
                        this.setState({
                            showModal: false,
                        });
                        break;
                    default:
                        this.setState({
                            showModal: true,
                        });
                }
            });
        }
    };

}

const mapStateToProps = (state) => {
    return {
        username: state.user.user,
        isLoggedIn: state.user.isLoggedIn,
    };
};

export default connect(mapStateToProps)(Home);
