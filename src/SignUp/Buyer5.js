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

                <h1>5th step</h1>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save and Exit</Button>
            </div>
        )
    }
}

export default withRouter(Buyer5);