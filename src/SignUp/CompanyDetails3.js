import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

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
        return (
            <div className="form-group">
                <Form color='blue' >
                    <Form.Field>
                        <label>Logo</label>
                        <input type="file" />
                    </Form.Field>
                    <Form.Field>
                        <input type="text" className="form-control" placeholder="Company Tagline/Slogan" />
                    </Form.Field>
                    <Form.Field>
                        <textarea className="form-control" cols="25" rows="10"
                            placeholder="Please entera brief description about you company..."></textarea>
                    </Form.Field>
                    <Button onClick={this.back}>Back</Button>
                    <Button onClick={this.saveAndContinue}>Next </Button>
                </Form>
            </div>
        )
    }
}

export default CompanyDetails3;