/* eslint-disable no-useless-escape */
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProgressBar from 'react-bootstrap/ProgressBar'
class CompanyDetails2 extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
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
                                <ProgressBar animated variant="primary" now={35} />
                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile </h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Company Size</label>
                                                <select className="form-control">
                                                    <option>Select Company Size</option>
                                                    <option>1-5</option>
                                                    <option>6-15</option>
                                                    <option>15-60</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">What is the scale of your operation(s)?</label>
                                                <select className="form-control">
                                                    <option>Local</option>
                                                    <option>National</option>
                                                    <option>Global</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">External Link 1</label>
                                                <input type="text" className="form-control" placeholder="External Link #1" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">External Link 2</label>
                                                <input type="text" className="form-control" placeholder="External Link #2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">External Link 3</label>
                                                <input type="text" className="form-control" placeholder="External Link #3" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">External Link 4</label>
                                                <input type="text" className="form-control" placeholder="External Link #4" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-info mr-2" onClick={this.back} > Back </Button>
                                    <Button className="btn btn-primary" onClick={this.saveAndContinue} > Next </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CompanyDetails2;