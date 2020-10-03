import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import SideNav from "../SideNav/SideNav";
import ReactApexCharts from "react-apexcharts";
import GoogleDrive from "../GoogleDrive/GoogleDrive";
import DropBox from "../DropBox/DropBox";

class Inbox extends Component {

    state = {
        series: [67],
        options: {
            chart: {
                height: 100,
                type: "radialBar",
                offsetY: -10,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -150,
                    endAngle: 150,
                    dataLabels: {
                        name: {
                            fontSize: "20px",
                            color: "white",
                            offsetY: 0,
                        },
                        value: {
                            offsetY: -10,
                            fontSize: "16px",
                            color: "white",
                            formatter: function (val) {
                                return val + "%";
                            },
                        },
                    },
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "dark",
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            labels: [""],
        },
        openDropBox: false,
        openOneDrive: false,
    };


    render() {

        const pathList = [{ to: "/inbox", title: "Inbox" }];

        return (
            <div>
                <BreadCrumbs title="Inbox" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12">
                            <SideNav />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                            <div className="custom-card">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="filter-section">
                                            <div className="header-left">
                                                <h3 className="card-title">
                                                    Inbox
                                                </h3>
                                            </div>
                                            <div className="header-right">
                                                <div className="dropdown-search d-md-flex">
                                                    <div className="filter-dropodwn">
                                                        <select className="form-control">
                                                            <option>
                                                                Web Designing
                                                            </option>
                                                            <option>
                                                                Digital
                                                                Marketing
                                                            </option>
                                                            <option>
                                                                Facebook
                                                                Marketing
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-header card-gauge-section col-12 col-md-12 bg-background3 border-radius-4 p-3 text-white">
                                            <h4 className="text-capitalize z-index-10 text-white z-index-10">
                                                Web Designing
                                            </h4>
                                            <div className="gauge-content">
                                                <ReactApexCharts
                                                    options={this.state.options}
                                                    series={this.state.series}
                                                    type="radialBar"
                                                    height={100}
                                                    width={120}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle-section">
                                        <ul>
                                            <li>
                                                <div className="content">
                                                    <div className="message">
                                                        <div className="bubble">
                                                            <p>
                                                                Hi, I’m
                                                                interested in
                                                                working with you
                                                                on your project
                                                                -
                                                                '..............'.
                                                            </p>
                                                            <p>
                                                                Let’s talk
                                                                further once
                                                                you’re available
                                                                :)
                                                            </p>
                                                            <p>
                                                                A little about
                                                                us:
                                                            </p>
                                                            <p>
                                                                - We have an
                                                                excellent team
                                                                of developers,
                                                                with a focus on
                                                                front-end web
                                                                development.
                                                            </p>
                                                            <p>
                                                                - We’ve been
                                                                trading for 20
                                                                years as of
                                                                2020, with over
                                                                1000 satisfied
                                                                clients who are
                                                                with us still
                                                                due to the
                                                                excellent
                                                                service we
                                                                provide.
                                                            </p>
                                                            <p>
                                                                <b>
                                                                    Portfolio:
                                                                </b>
                                                            </p>
                                                            <p>
                                                                www.marketing.inc/portfolio
                                                            </p>
                                                            <p>
                                                                www.marketing/inc/case-studies
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span>07:30PM</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="content">
                                                    <div className="message">
                                                        <div className="bubble">
                                                            <p>
                                                                Hi, I’m
                                                                interested in
                                                                hiring
                                                                Marketing.Inc!
                                                            </p>
                                                            <p>
                                                                Post Title: ‘New
                                                                website
                                                                required’
                                                            </p>
                                                            <p>
                                                                Industry:
                                                                Wholesale
                                                            </p>
                                                            <p>
                                                                Our requirements
                                                                are: Create a
                                                                new website.
                                                            </p>
                                                            <p>
                                                                ‘Project’ basis.
                                                                Budget: £2,500 -
                                                                £5,000
                                                            </p>
                                                            <p>
                                                                Need help with:
                                                                Full web
                                                                design/development
                                                            </p>
                                                            <p>
                                                                E-commerce:
                                                                Shopify.
                                                                Products: 100+
                                                            </p>
                                                            <p>
                                                                Go live/be
                                                                updated: Within
                                                                a week
                                                            </p>
                                                            <p>
                                                                Goals/targets:
                                                                Sell more of my
                                                                product/service
                                                            </p>
                                                            <p>
                                                                Soft Drinks Plc
                                                                are Ready To
                                                                Hire Now!
                                                            </p>
                                                            <p>
                                                                Please contact
                                                                me to discuss
                                                                further,
                                                            </p>
                                                            <p>Kind regards,</p>
                                                            <p>
                                                                Name: Tom
                                                                Sellick
                                                            </p>
                                                            <p>
                                                                Email:
                                                                tom.sellick@softdrinksplc.com
                                                            </p>
                                                            <p>
                                                                Phone: 07***
                                                                *****
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span>07:30PM</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="message-section">
                                        <div className="bottom">
                                            <form className="position-relative">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Type message..."
                                                    rows="2"
                                                ></textarea>
                                                <ul className="message-option">
                                                    <li className="d-box-icon">
                                                        <DropBox>
                                                            <button className="send-message mr-2">
                                                                <i
                                                                    class="fa fa-dropbox"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </button>
                                                        </DropBox>
                                                    </li>
                                                    <li className="g-icon">
                                                        <GoogleDrive>
                                                            <span>
                                                                <button
                                                                    onClick={(e) => e.preventDefault()}
                                                                    className="google send-message mr-2">
                                                                    <img
                                                                        src={require("../assets/images/google-drive.png")}
                                                                        className="img-hover"
                                                                        alt="Google Send Message"
                                                                    />
                                                                </button>
                                                            </span>
                                                            <div className="google"></div>
                                                        </GoogleDrive>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#!"
                                                            className="send-message"
                                                        >
                                                            <i
                                                                className="fa fa-paper-plane"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inbox;
