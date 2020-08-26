import React, { Component } from 'react';
import ComapanyDetails1 from './CompanyDetails1';
import CompanyDetails3 from './CompanyDetails3';
import CompanyDetails2 from './CompanyDetails2';
import CompanyDetails4 from './CompanyDetails4';
import CompanyDetails5 from './CompanyDetails5';
import CompanyDetails6 from './CompanyDetails6';
// import Buyer4 from './Buyer4';
import Buyer5 from './Buyer5';

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

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ step: 1 })
        }
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
        this.setState({
            [input]: event.target.value
        })
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
                if (this.props.match.params[0] === 'seller') {
                    return <CompanyDetails4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                } else {
                    return <CompanyDetails5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                }
            case 5:
                if (this.props.match.params[0] === 'seller') {
                    return <CompanyDetails5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                } else {
                    return <Buyer5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                }
            case 6:
                return <CompanyDetails6
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            default: return false
        }
    }
}

export default SignUpSeller;