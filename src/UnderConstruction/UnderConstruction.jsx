import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class UnderConstruction extends Component {

    render() {
        return (
            <div className="construction-image">
                <div className="page page-h w-100">
                    <div className="page-content z-index-10 mt-0">
                        <div className="container text-center">
                            {/* <div className="display-1 mb-5"> </div> */}
                            <h1 className="h2 mb-3 text-white">Under Construction</h1>
                            <img src={require("../assets/plugins/datatable/under_construction2-276x300.png")}/>
                            <p className="h4 font-weight-normal mb-7 leading-normal text-white">Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience.</p>
                            <NavLink to="/billing" className="btn btn-secondary">Back To Billing Page</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
