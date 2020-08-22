import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class CompanyDetails1 extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        // const [completed, setCompleted] = useState(0);

        // useEffect(() => {
        //     setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
        // }, []);
        const { values } = this.props;
        return (
            <div className="form-group">
                {/* <ProgressBar bgcolor={"#6a1b9a"} completed={completed} /> */}
                <Form>
                    <h1 className="ui centered">Enter User Details</h1>
                    <Form.Field>
                        <input className="form-control"
                            placeholder='First Name'
                            onChange={this.props.handleChange('firstName')}
                            defaultValue={values.firstName}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control"
                            placeholder='Last Name'
                            onChange={this.props.handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control"
                            type='email'
                            placeholder='Email Address'
                            onChange={this.props.handleChange('email')}
                            defaultValue={values.email}
                        />
                    </Form.Field>
                    {/* <Form.Field>
                        <select>
                            <option>FMCG</option>
                            <option>FMCB</option>
                            <option>FMCH</option>
                            <option>FMCK</option>
                            <option>FMCL</option>
                        </select>
                        <button className="btn btn-primary">Allow review to Site Access?</button>
                    </Form.Field> */}
                    <Form.Field>
                        <input className="form-control" placeholder='Company Name'
                            onChange={this.props.handleChange('companyName')}
                            defaultValue={values.companyName}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control" placeholder='Company Number'
                            onChange={this.props.handleChange('companyNumber')}
                            defaultValue={values.companyNumber}
                        />
                        <i className="fa fa-search"></i>
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control" placeholder='Trading As(optional)'
                            onChange={this.props.handleChange('tradingAs')}
                            defaultValue={values.tradingAs}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control" placeholder='Job Title'
                            onChange={this.props.handleChange('jobTitle')}
                            defaultValue={values.jobTitle}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input className="form-control" placeholder='Contact Number(optional)'
                            onChange={this.props.handleChange('contactNumber')}
                            defaultValue={values.contactNumber}
                        />
                    </Form.Field>
                    <Form.Field>
                        <p>I serve customers within</p>
                        <input type="radio"
                            onChange={this.props.handleChange('miles')}
                            defaultValue={values.miles}
                        />
                        <select>
                            <option>20 miles</option>
                            <option>40 miles</option>
                            <option>60 miles</option>
                            <option>80 miles</option>
                        </select>
                        <p>of</p>
                        <input className="form-control" type="text" placeholder="Location will come here" />
                    </Form.Field>
                    <Form.Field>
                        <input type="radio"
                            onChange={this.props.handleChange('nation')}
                            defaultValue={values.nation}
                        />Nation Wide
                    </Form.Field>
                    <Button onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </div>
        )
    }
}

export default CompanyDetails1;