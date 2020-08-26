/* eslint-disable no-useless-escape */
import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProgressBar from 'react-bootstrap/ProgressBar'

class CompanyDetails6 extends Component {

    saveAndContinue = (e) => {
        this.props.history.push("/sign-up/success");
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1]

        const pathList = [
            { to: `/sign-up/${route}`, title: "Sign Up" }
        ]

        return (
            <>
                <BreadCrumbs title="Sign Up" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={100} />
                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile </h3>
                                </div>
                                <div className="card-body">
                                <div className="mb-md-4 float-right">
                                    <div className="form-group d-flex align-items-center">
                                        <label className="text-dark d-inline-block fs-18  mr-2 mb-0">Rate:</label>
                                        <select className="form-control w-auto">
                                            <option>Monthly</option>
                                            <option>Hourly</option>
                                            <option>One Off</option>
                                        </select>
                                    </div>
                                </div>
                                   <table className="services-table">
                                       <thead className="head-row">
                                           <tr>
                                              <th> Service Title</th>  
                                              <th> Rate</th>
                                              <th> Description</th>  
                                           </tr> 
                                       </thead> 
                                       <tbody>
                                           <tr>
                                               <td>
                                                   <button className="btn service-btn">Web Design</button>
                                               </td>
                                               <td>
                                                   <div className="form-group mb-0">
                                                        <select className="form-control">
                                                            <option>$5 - $50</option>
                                                            <option>$50 - $100</option>
                                                            <option>$100 - $150</option>
                                                        </select>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div className="td-desc form-group mb-0">
                                                        <input type="text" className="form-control" placeholder="Description"/>
                                                   </div>
                                               </td>
                                           </tr>
                                           <tr>
                                               <td>
                                                   <button className="btn service-btn active">Web Design Marketing</button>
                                               </td>
                                               <td>
                                                  &nbsp;
                                               </td>
                                               <td>
                                                   &nbsp;
                                               </td>
                                           </tr>
                                           <tr>
                                               <td>
                                                   <button className="btn service-btn">Paid Marketing</button>
                                               </td>
                                               <td>
                                                   <div className="form-group mb-0">
                                                        <select className="form-control">
                                                            <option>$5 - $50</option>
                                                            <option>$50 - $100</option>
                                                            <option>$100 - $150</option>
                                                        </select>
                                                   </div>
                                               </td>
                                               <td>
                                                   <div className="td-desc form-group mb-0">
                                                        <input type="text" className="form-control" placeholder="Description"/>
                                                   </div>
                                               </td>
                                           </tr>
                                       </tbody>
                                   </table>

                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-info mr-2" onClick={this.back} > Back </Button>
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue} > Save And Verify Email </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default withRouter(CompanyDetails6);