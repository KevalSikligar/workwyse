import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Select from 'react-select';
import ProgressBar from 'react-bootstrap/ProgressBar'

class CompanyDetails4 extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        const options = [
            { value: 'advertising_marketing', label: 'Advertising & Marketing' },
            { value: 'Paid Advertising', label: 'Paid Advertising' },
            { value: 'web_design', label: 'Web Design' },
            { value: 'videography', label: 'Videography' },
            { value: 'market_research', label: 'Market Research' },
        ]

        const pathList = [
            { to: "/sign-up", title: "Sign Up" }
        ]
        return (
            <>
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
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                        <label>Services</label>
                                            <Select
                                                placeholder="Select Services"
                                                isMulti
                                                name="colors"
                                                options={options}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            {/* <label>Advertising & Marketing</label>
                                            <select className="form-control">
                                                <option>Select Services</option>
                                                <option>Paid Advertising</option>
                                                <option>Web Design</option>
                                                <option>Video Graphy</option>
                                            </select> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-right">
                                <Button className="btn btn-info mr-2" onClick={this.back} > Back </Button>
                                <Button className="btn btn-warning mr-2" onClick={this.saveAndContinue} > Skip </Button>
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

export default CompanyDetails4;