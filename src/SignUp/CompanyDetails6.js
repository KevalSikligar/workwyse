import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProgressBar from 'react-bootstrap/ProgressBar'
import swal from 'sweetalert';
class CompanyDetails6 extends Component {

    saveAndContinue = (e) => {
        swal("You have successfully registered. Clicking on OK will redirect you to Home Page.").then(() => {
            this.props.history.push("/home");
        })
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        var href = window.location.href;
        const route = href.match(/([^\/]*)\/*$/)[1]
        const finalName = route.charAt(0).toUpperCase() + route.slice(1);
        const pathList = [
            { to: `/sign-up/${route}`, title: `Sign Up` }
        ]

        return (
            <>
                <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={100} />
                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile </h3>
                                </div>
                                <div className="card-body">
                                    <table className="services-table table-bordered">
                                        <thead className="text-center">
                                            <tr>
                                                <th></th>
                                                <th>One Off</th>
                                                <th>Monthly</th>
                                                <th>Hourly</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th colSpan="4">Digital Marketing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Facebook</th>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>$250 - $1000</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="hourly-rates">
                                                        <span>$25</span>
                                                        <b>-</b>
                                                        <span>$25</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Linkedin</th>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="hourly-rates">
                                                        <span>$25</span>
                                                        <b>-</b>
                                                        <span>$35</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th colSpan="4">Web Designing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Frontend Web Design</th>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>$250 - $1000</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="hourly-rates">
                                                        <span>$25</span>
                                                        <b>-</b>
                                                        <span>$25</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">UI/UX Design</th>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select className="form-control">
                                                        <option selected>Choose...</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <div className="hourly-rates">
                                                        <span>$25</span>
                                                        <b>-</b>
                                                        <span>$35</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-info mr-2" onClick={this.back}> Back </Button>
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue}> Save And Verify Email </Button>
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