import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';

export default class CompanyDetails5 extends Component {

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {


        return (
            <div>
                <Form.Field>
                    <h1>Please select which review sites you would like to have</h1>
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Skip</Button>
                <Button onClick={this.saveAndContinue}>Next</Button>
            </div>
        )
    }
}
