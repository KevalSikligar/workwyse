import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

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
        return (
            <div className="form-group">
                <Form.Field>
                    <select>
                        <option>Select Service</option>
                        <option>Advertising</option>
                        <option>Paid Advertising</option>
                        <option>Web Design</option>
                        <option>Market Research</option>
                    </select>
                </Form.Field>
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Skip</Button>
                <Button onClick={this.saveAndContinue}>Next</Button>
            </div>
        )
    }
}

export default CompanyDetails4;