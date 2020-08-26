import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';


class Buyer5 extends Component {
    saveAndContinue = (e) => {
        this.props.history.push("/sign-up/success");
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const pathList = [
            { to: "/sign-up", title: "Sign Up" }
        ]
        return (
            <div>
                <BreadCrumbs title="Sign Up" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={70} />
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
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue}> Next </Button>
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