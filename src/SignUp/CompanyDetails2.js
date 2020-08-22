import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

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
        return (
            <div className="form-group">
                <Form color='blue' >
                    <Form.Field>
                        <label>Company Size</label>
                        <select>
                            <option>1-5</option>
                            <option>6-10</option>
                            <option>11-15</option>
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <label>What is the scale of you operation(s)?</label>
                        <select>
                            <option>Local</option>
                            <option>Nation</option>
                            <option>Global</option>
                        </select>
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control" type="text" placeholder="External Link #1" />
                        <input className="form-control" type="text" placeholder="External Link #2" />
                        <input className="form-control" type="text" placeholder="External Link #3" />
                        <input className="form-control" type="text" placeholder="External Link #4" />
                    </Form.Field>
                    <Button onClick={this.back}>Back</Button>
                    <Button onClick={this.saveAndContinue}>Next </Button>
                </Form>
            </div>
        )
    }
}

export default CompanyDetails2;