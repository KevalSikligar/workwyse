import React, { Component } from 'react';
import CompanyDetails1 from './CompanyDetails1';
import CompanyDetails2 from './CompanyDetails2';
// import CompanyDetails3 from './CompanyDetails3';
import CompanyDetails4 from './CompanyDetails4';
import Buyer5 from './Buyer5';
import FinalCompanyStep from './FinalCompanyStep';
class SignUpSeller extends Component {

    state = {
        step: 1
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
        });
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        });
    }

    render() {

        const { step } = this.state;

        switch (step) {
            case 1:
                return <CompanyDetails1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}

                />
            case 2:
                return <CompanyDetails2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}

                />
            // case 3:
            //     return <CompanyDetails3
            //         nextStep={this.nextStep}
            //         prevStep={this.prevStep}

            //     />
            case 3:
                if (this.props.match.params[0] === 'seller') {
                    return <CompanyDetails4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}

                    />
                }
            case 4:
                if (this.props.match.params[0] === 'buyer') {
                    return <Buyer5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}

                    />
                }
            case 5:
                return <FinalCompanyStep
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}

                />
            default: return false
        }
    }
}

export default SignUpSeller;