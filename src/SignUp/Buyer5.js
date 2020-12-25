import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { Select, notification, Spin } from 'antd';
import { connect } from "react-redux";
import { getAllCompanyDetails } from '../redux/action/SignUp/SignUpAction';
import { postBuyer } from '../Services/BuyerService';
import debounce from 'lodash/debounce';
import { get } from "lodash";
import { withRouter } from 'react-router-dom';
class Buyer5 extends Component {

    constructor(props) {
        super(props);
        this.lastFetchId = 0;
        this.fetchIndustry = debounce(this.fetchIndustry, 800);
    }

    state = {
        getAllIndustries: [],
        data: [],
        value: [],
        fetching: false,
    }

    componentDidMount() {
        if (this.props.companyDetails.signup.industryId) {
            this.setState({ value: this.props.companyDetails.signup.industryId });
        }
    }

    fetchIndustry = value => {
        this.lastFetchId += 1;
        const fetchId = this.lastFetchId;
        this.setState({ data: [], fetching: true });
        fetch(process.env.REACT_APP_API_URL + `api/Industry/All`).then(response => response.json()).then(body => {
            // console.log('body => ', body, body.data);
            if (fetchId !== this.lastFetchId) {
                // for fetch callback order
                return;
            }
            const data = body.map(user => ({
                text: `${user.name}`,
                value: user.id,
            }));
            this.setState({ data, fetching: false });
        });
    };

    handleChange = (key, value) => {
        this.setState({
            companyId: parseInt(value.value),
            value,
            data: [],
            fetching: false,
        }, () => {
            this.props.dispatch(getAllCompanyDetails(key, value))
        });
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        var href = window.location.href;
        const route = href.match(/([^/]*)\/*$/)[1]
        const finalName = route.charAt(0).toUpperCase() + route.slice(1);
        const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];
        const { fetching, data, value } = this.state;
        const { Option } = Select;

        const saveAndContinue = () => {
            const data = {
                id: 0,
                businessType: 1,
                companyType: 1,
                companyEmail: get(this.props.companyDetails.signup, "companyEmail", ''),
                companyName: get(this.props.companyDetails.signup, "companyName", ''),
                companyContactNumber: get(this.props.companyDetails.signup, "companyContactNumber", ''),
                companySize: get(this.props.companyDetails.signup, "companySize", ''),
                operationScale: get(this.props.companyDetails.signup, "operationScale", ''),
                tagline: get(this.props.companyDetails.signup, "tagline", ''),
                description: get(this.props.companyDetails.signup, "description", ''),
                logoPath: get(this.props.companyDetails.signup, "logoPath", ''),
                tradingAs: get(this.props.companyDetails.signup, "tradingAs", ''),
                distance: 50,
                latitude: get(this.props.companyDetails.signup, "latitude", null),
                longitude: get(this.props.companyDetails.signup, "longtitude", null),
                trustpilotConnectedUrl: get(this.props.companyDetails.signup, "trustpilotConnected", null),
                glassdoorConnnectedUrl: get(this.props.companyDetails.signup, "glassdoorConnnected", null),
                connectFacebookBusinessUrl: get(this.props.companyDetails.signup, "connectFacebookBusiness", null),
                active: true,
                industryId: this.props.companyDetails.signup.industryId ? parseInt(this.props.companyDetails.signup.industryId.value) : '',
                buyerTemplate: get(this.props.companyDetails.signup, "buyerTemplate", ''),
                companyUserId: 0,
                jobTitle: get(this.props.companyDetails.signup, "jobTitle", ''),
                userDto: {
                    id: "",
                    foreName: get(this.props.companyDetails.signup, "foreName", ''),
                    surName: get(this.props.companyDetails.signup, "surName", ''),
                    phoneNumber: get(this.props.companyDetails.signup, "phoneNumber", ''),
                    email: get(this.props.companyDetails.signup, "email", ''),
                    password: get(this.props.companyDetails.signup, "password", ''),
                    photoPath: get(this.props.companyDetails.signup, "photoPath", null),
                }
            };
            postBuyer(data).then((res) => {
                if (res.status === 200) {
                    notification.open({
                        message: 'Success',
                        description: 'Buyer successfully created! You will now be redirected to Home Page.'
                    });
                    setTimeout(() => {
                        this.props.history.push('/home')
                    }, 3000);
                } else if (res.response.status === 400) {
                    notification.error({
                        message: 'Error',
                        description: `${res.response.data}`
                    });
                }
            }).catch((err) => {
                notification.open({
                    message: 'Error',
                    description: 'There was an error while creating buyer account!'
                });
            });
        }

        return (
            <div>
                <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-12 sptb custom-card">
                            <div className="card mb-0">
                                <ProgressBar animated variant="primary" now={100} />
                                <div className="card-header">
                                    <h3 className="card-title">Complete Your Profile</h3>
                                </div>
                                <div className="card-body">
                                    {/* <div className="row">
                                        <div className="form-group">
                                            <button className="btn service-btn mw-100">Confirm You Industry</button>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 offset-md-3">
                                            <div className="form-group">
                                                <label>Choose your Industry</label>
                                                <Select
                                                    showSearch
                                                    labelInValue
                                                    value={value}
                                                    placeholder="Search Industries"
                                                    notFoundContent={fetching ? <Spin size="small" /> : null}
                                                    filterOption={false}
                                                    onSearch={(e) => this.fetchIndustry(e)}
                                                    onChange={(e) => this.handleChange('industryId', e)}
                                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                    style={{ width: '100%' }}>
                                                    {data.map(d => (
                                                        <Option key={d.value}>{d.text}</Option>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="info-section">
                                                <p className="text-dark fs-18 mb-0">This will ensure that you are matched with Sellers who focus on your industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-info mr-2" onClick={this.back}> Back </button>
                                    <button className="btn btn-primary" onClick={saveAndContinue}> Save And Verify Email </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        companyDetails: state
    };
};

export default withRouter(connect(mapStateToProps)(Buyer5));