import React, { Component } from 'react';
import ComapanyDetails1 from './CompanyDetails1';
import Success from './Success';
import CompanyDetails3 from './CompanyDetails3';
import CompanyDetails2 from './CompanyDetails2';
import CompanyDetails4 from './CompanyDetails4';
import CompanyDetails5 from './CompanyDetails5';
import CompanyDetails6 from './CompanyDetails6';

class SignUpSeller extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        switch (step) {
            case 1:
                return <ComapanyDetails1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 2:
                return <CompanyDetails2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <CompanyDetails3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 4:
                return <CompanyDetails4
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 5:
                return <CompanyDetails5
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 6:
                return <CompanyDetails6
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 7:
                return <Success />
            default: return false
        }
    }
}

export default SignUpSeller;