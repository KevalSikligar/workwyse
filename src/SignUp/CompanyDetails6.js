import React from 'react'
import { Form, Button } from 'semantic-ui-react';

export default class CompanyDetails6 {
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
                    <h1>Services </h1>
                    <h1>rates </h1>
                    <h1>Service description </h1>
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue} to="/">Save And Verify Email</Button>
            </div>
        )
    }
}
