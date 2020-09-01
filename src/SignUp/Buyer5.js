import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import swal from 'sweetalert';


class Buyer5 extends Component {
    saveAndContinue = (e) => {
        swal("You have successfully registered. Clicking on OK will redirect you to Home Page.")
            .then(() => {
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
            <div>
                <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={100} />
                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="form-group">
                                            <button className="btn service-btn mw-100">Confirm You Industry</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <select className="form-control">
                                                    <option>Wholesale</option>
                                                    <option>Wholesale 1</option>
                                                    <option>Wholesale 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="info-section">
                                                <p className="text-dark fs-18 mb-0">This will ensure that you are matched with Sellers who focus on your industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-info mr-2" onClick={this.back}> Back </Button>
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue}> Save And Verify Email </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Buyer5);