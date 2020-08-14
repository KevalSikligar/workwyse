import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom"

class BreadCrumbs extends Component {

    render() {

        return (
            <div>
                <section>
                    <div class="bannerimg cover-image bg-background3 sptb-2" data-image-src={require("../assets/images/banners/banner2.jpg")}>
                        <div class="header-text mb-0">
                            <div class="container">
                                <div class="text-center text-white ">
                                    <h1 class="">{this.props.title ? this.props.title : ""}</h1>
                                    <ol class="breadcrumb text-center">
                                        <li class="breadcrumb-item"><Link to="/about-us">Home</Link></li>
                                        {
                                            this.props.breadcrumbssegment.map((segment, index) =>
                                                <li key={index} class="breadcrumb-item active text-white" aria-current="page"><Link to={segment.to}>{segment.title}</Link></li>
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
