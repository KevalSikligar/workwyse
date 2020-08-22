import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"

class BreadCrumbs extends Component {

    render() {
        return (
            <div>
                <section className="breadcrumb-section" >
                    <div className="bannerimg cover-image bg-background3 sptb-2" data-image-src={require("../assets/images/banners/banner2.jpg")}>
                        <div className="header-text mb-0">
                            <div className="container">
                                <div className="text-center text-white ">
                                    <h1 className="">{this.props.title ? this.props.title : ""}</h1>
                                    <ol className="breadcrumb text-center">
                                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                        {
                                            this.props.breadcrumbssegment.map((segment, index) =>
                                                <li key={index} className="breadcrumb-item active text-white" aria-current="page"><Link to={segment.to}>{segment.title}</Link></li>
                                            )
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default withRouter(BreadCrumbs)
