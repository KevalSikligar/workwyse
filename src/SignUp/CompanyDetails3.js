import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProgressBar from 'react-bootstrap/ProgressBar'

class CompanyDetails3 extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
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
            <>
            <BreadCrumbs title = "Sign Up" breadcrumbssegment = { pathList }/>
            <div className="container">
            <div className="row">
                <div className="col-12 sptb custom-card">
                    <div className="card mb-0">
                    <ProgressBar animated variant="primary" now={55} />

                        <div className="card-header">
                            <h3 className="card-title">Complete Your Profile </h3>
                        </div>
                        <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 border-width-5">
                                        <div className="upload-img mb-5">
                                        <img src={require('../assets/images/upload-picture.png')} className="logo-image img-fluid" alt="img" />
                                        </div>
                                        <div className="form-group mb-0">
                                                <label className="form-label">Upload Image</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" name="example-file-input-custom" />
                                                    <label className="custom-file-label">Choose file</label>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 pl-md-6">
                                        <div className="form-group">
                                            <label className="form-label">Company Tagline/Slogan</label>
                                            <input type="text" className="form-control" placeholder="Company Slogan" />
                                        </div> 
                                        <div className="form-group">
                                            <label className="form-label">Company Description</label>
                                            <textarea className="form-control" rows="10" placeholder="Please enter brief description about your company..."></textarea>
                                        </div>  
									</div>
                                </div>
                            </div>
                        <div className="card-footer text-right">
                            <Button className="btn btn-info mr-2" onClick = { this.back } > Back </Button> 
                            <Button className="btn btn-primary"  onClick = { this.saveAndContinue } > Next </Button> 
                        </div>
                    </div>
                </div>
            </div>                
             </div>
          
           </>
        )
    }
}

export default CompanyDetails3;