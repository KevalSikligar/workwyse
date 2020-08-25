import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';


export default class Buyer4 extends Component {
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
            <div>
                            <BreadCrumbs title="Sign Up" breadcrumbssegment={pathList} />

                <h1>4th step</h1>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Next</Button>
            </div>
        )
    }
}
