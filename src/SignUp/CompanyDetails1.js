import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Input, Select, Button, notification, Spin } from "antd";
import axios from "axios";
import { getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
import { connect } from "react-redux";
import debounce from 'lodash/debounce';
import TextArea from "antd/lib/input/TextArea";
class CompanyDetails1 extends Component {

  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.changeHandler = debounce(this.changeHandler, 800);
    this.fetchIndustry = debounce(this.fetchIndustry, 800);
    this.changeHandlerEmail = debounce(this.changeHandlerEmail, 3000);
  }

  state = {
    value: '',
    suggestions: [],
    postCodeSuggestions: [],
    postCodeValue: '',
    data: [],
    industryValue: [],
    fetching: false,
    routeCheck: ''
  };

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        foreName: this.props.companyDetails.signup.foreName,
        surName: this.props.companyDetails.signup.surName,
        companyContactNumber: this.props.companyDetails.signup.companyContactNumber,
        companyName: this.props.companyDetails.signup.companyName,
        email: this.props.companyDetails.signup.email,
        phoneNumber: this.props.companyDetails.signup.phoneNumber,
        jobTitle: this.props.companyDetails.signup.jobTitle,
        tradingAs: this.props.companyDetails.signup.tradingAs,
        template: this.props.companyDetails.signup.buyerTemplate ? this.props.companyDetails.signup.buyerTemplate : this.props.companyDetails.signup.sellerTemplate,
        industryValue: this.props.companyDetails.signup.forfetch,
        password: this.props.companyDetails.signup.password,
        confirm: this.props.companyDetails.signup.confirmPassword,
        postCode: this.props.companyDetails.signup.location
      });
    }
    var href = window.location.href;
    const route = href.match(/([^\/]*)\/*$/)[1];
    this.setState({ routeCheck: route })
  }

  postCodeIo = (e) => {
    axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${e}`).then(res => {
      this.setState({ postCodeValue: e, postCodeSuggestions: [] }, () => {
        this.formRef.current.setFieldsValue({
          postCode: e
        });
        this.props.dispatch(getAllCompanyDetails('latitude', res.data.result.latitude))
        this.props.dispatch(getAllCompanyDetails('longtitude', res.data.result.longitude))
        this.props.dispatch(getAllCompanyDetails('location', res.data.result.admin_county ? res.data.result.admin_county : res.data.result.country))
      })
    });
  }

  getLocation() {
    axios.get(`https://freegeoip.app/json/`).then(res => {
      this.setState({ postCodeValue: res.data.city + " " + res.data.region_name }, () => {
        this.formRef.current.setFieldsValue({
          postCode: res.data.city + " " + res.data.region_name
        });
        this.props.dispatch(getAllCompanyDetails('latitude', res.data.latitude))
        this.props.dispatch(getAllCompanyDetails('longtitude', res.data.longitude))
        this.props.dispatch(getAllCompanyDetails('location', res.data.city))
      })
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching location API!'
      });
    });
  };

  changeCompanyName = (event) => {
    axios.get(process.env.REACT_APP_API_URL + `api/CompanyHouseProxy/ByCompanyNumber/${event}`).then(res => {
      this.setState({ value: res.data.company_name, suggestions: [] }, () => {
        this.formRef.current.setFieldsValue({
          companyName: res.data.company_name
        });
        this.props.dispatch(getAllCompanyDetails('companyName', res.data.company_name));
      })
    }).catch(err => { });
  }

  changeHandler = (key, event) => {
    if (event.length > 0) {
      this.props.dispatch(getAllCompanyDetails(key, event));
    }
  }

  changeHandlerEmail = (key, event) => {
    this.props.dispatch(getAllCompanyDetails(key, event));
  }

  onChange = (event, { newValue }) => {
    event.preventDefault();
    this.setState({ value: newValue }, async () => {
      if (this.state.value.length <= 0) {
        this.setState({ suggestions: [], value: '' });
      }
      else {
        try {
          const resp = await axios.get(process.env.REACT_APP_API_URL + `api/CompanyHouseProxy/ByCompanyName/${this.state.value}`)
          var suggestions = [];
          resp.data.items.map((res) => {
            return suggestions.push({ title: res.title, companyNumber: res.company_number });
          });
          this.setState({ suggestions: suggestions ? suggestions : [] });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  };

  selectedTags = (key, tagSelected, company_number) => {
    this.setState({ suggestions: [], value: tagSelected, companyContactNumber: company_number }, () => {
      this.formRef.current.setFieldsValue({
        companyContactNumber: company_number,
        companyName: tagSelected
      })
      this.props.dispatch(getAllCompanyDetails(key, tagSelected));
      this.props.dispatch(getAllCompanyDetails('companyContactNumber', company_number));
    });
  }

  postCodeSuggestions = (event, { newValue }) => {
    event.preventDefault()
    this.setState({ postCodeValue: newValue }, async () => {
      if (this.state.postCodeValue.length <= 0) {
        this.setState({ postCodeSuggestions: [] });
      }
      else {
        try {
          const resp = await axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${this.state.postCodeValue}/autocomplete`)
          var suggestions = [];
          resp.data.result.map((res) => {
            return suggestions.push(res);
          });
          this.setState({ postCodeSuggestions: suggestions ? suggestions : [] });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  }

  fetchIndustry = value => {
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch(process.env.REACT_APP_API_URL + `api/Industry/All`).then(response => response.json()).then(body => {
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

  handleChangeIndustry = (key, value) => {
    this.setState({
      industryId: value.value,
      industryValue: value,
      data: [],
      fetching: false,
    });
    this.props.dispatch(getAllCompanyDetails(key, parseInt(value.key)));
    this.props.dispatch(getAllCompanyDetails('forfetch', value));
  };

  render() {

    var href = window.location.href;
    const route = href.match(/([^\/]*)\/*$/)[1];
    const finalName = route.charAt(0).toUpperCase() + route.slice(1);
    const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];

    const { suggestions, postCodeSuggestions, fetching, data, industryValue } = this.state;
    const { Option } = Select;

    const onFinish = () => {
      this.props.nextStep();
    };

    const onFinishFailed = () => { };

    return (
      <div className="seller_section_s">
        <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-12 sptb custom-card">
              <div className="card mb-0">
                <ProgressBar animated variant="primary" now={20} />
                <div className="card-header">
                  <h3 className="card-title">Complete Your Profile</h3>
                </div>
                <Form ref={this.formRef} onFinish={onFinish} onFinishFailed={onFinishFailed} >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label asterisk">First Name</label>
                          <Form.Item name="foreName" rules={[{ required: true, message: "Please enter your firstname!" }]}>
                            <Input onBlur={(e) => this.changeHandlerEmail("foreName", e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label asterisk">Surname</label>
                          <Form.Item name="surName" rules={[{ required: true, message: "Please enter your surname!" }]}>
                            <Input onChange={(e) => this.changeHandler("surName", e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label asterisk">Email</label>
                          <Form.Item name="email" rules={[{ required: true, message: "Please input your E-mail!" },
                          { type: "email", message: "The input is not valid E-mail!" }]}>
                            <Input onBlur={(e) => this.changeHandlerEmail("email", e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Phone Number</label>
                          <Form.Item name="phoneNumber" rules={[{ required: false }]}>
                            <Input style={{ width: '100%' }} onChange={(e) => this.changeHandler("phoneNumber", e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group company_group">
                          <label className="form-label asterisk">Company Name</label>
                          <Form.Item name="companyName" rules={[{ required: true, message: "Please enter your Company Name!" }]}>
                            <Input autoComplete={"off"} className="form-control" placeholder="Search For Your Company"
                              onChange={(e) => this.onChange(e, { newValue: e.target.value })} />
                          </Form.Item>
                          {suggestions.length > 0 &&
                            <ul className="company_data">
                              {suggestions.map(companySuggestions =>
                                <li onClick={() => this.selectedTags('companyName', companySuggestions.title, companySuggestions.companyNumber)}>
                                  {companySuggestions ? companySuggestions.title : []}
                                </li>
                              )}
                            </ul>}
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label asterisk">Company Number</label>
                          <Form.Item name="companyContactNumber" rules={[{ required: true, message: "Please enter your Company Number!" }]}>
                            <Input onBlur={(e) => this.changeCompanyName(e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Company Trading As</label>
                          <Form.Item name="tradingAs" rules={[{ required: false }]}>
                            <Input placeholder="Enter if trading name is different to registered name" onChange={(e) => this.changeHandler("tradingAs", e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <div className="form-group">
                          <label className="form-label">Job Title</label>
                          <Form.Item name="jobTitle" rules={[{ required: false }]}>
                            <Input onChange={(e) => this.changeHandler("jobTitle", e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <label className="form-label asterisk">Password</label>
                        <Form.Item name="password" rules={[
                          { required: true, message: 'Please input your password!' },
                          { min: 8, message: 'Password must be minimum 8 characters.' },
                          { type: "regexp", pattern: new RegExp(/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/), message: "Wrong format!" }
                        ]} hasFeedback>
                          <Input.Password onChange={(e) => this.changeHandler("password", e.target.value)} />
                        </Form.Item>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <label className="form-label asterisk">Confirm Password</label>
                        <Form.Item name="confirm" dependencies={['password']} hasFeedback rules={[{
                          required: true,
                          message: 'Please confirm your password!',
                        }, ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                          }
                        })]}>
                          <Input.Password onChange={(e) => this.changeHandler("confirmPassword", e.target.value)} />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 post-code-sec k-postcode">
                        <div className="form-group">
                          <label className="form-label asterisk">PostCode/Location</label>
                          <Form.Item name="postCode" rules={[{ required: true, message: 'Please type your postcode or select your location!' }]}>
                            <Input
                              className="form-control" placeholder="Enter your postcode"
                              onChange={(e) => this.postCodeSuggestions(e, { newValue: e.target.value })} />
                          </Form.Item>
                          <span className="gps-icon"> <img onClick={() => this.getLocation()} src={require("../assets/images/svg/gps.svg")}
                            className="location-gps" alt="img" /></span>
                          {postCodeSuggestions.length > 0 &&
                            <ul>
                              {postCodeSuggestions.map(o =>
                                <li onClick={() => this.postCodeIo(o)}>
                                  {o ? o : []}
                                </li>
                              )}
                            </ul>
                          }
                        </div>
                      </div>
                      {this.state.routeCheck === 'seller' ?
                        <div className="col-sm-12 col-md-6">
                          <div className="form-group">
                            <label className="form-label asterisk">What is your Industry Experience/Focus?</label>
                            <Form.Item name="industryValue" rules={[{ required: true, message: 'Please select your industry!' }]}>
                              <Select
                                showSearch
                                labelInValue
                                value={industryValue}
                                // defaultValue={this.props.companyDetails.signup.forfetch}
                                placeholder="Search Industries"
                                notFoundContent={fetching ? <Spin size="small" /> : null}
                                filterOption={false}
                                onSearch={(e) => this.fetchIndustry(e)}
                                onChange={(e) => this.handleChangeIndustry('industryId', e)}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                {data.map(d => (
                                  <Option key={d.value}>{d.text}</Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </div>
                        </div> : ''}
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-12">
                        <div className="form-group">
                          <label className="form-label asterisk">{finalName + " " + 'Template'} </label>
                          <Form.Item name="template" rules={[{ required: true, message: 'Please enter a short description' }]}>
                            <TextArea className="company_textarea"
                              placeholder="Please enter a short description that will be sent to buyers when you send a request."
                              onChange={(e) => this.changeHandler(`${route + 'Template'}`, e.target.value)} />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right company-details-f">
                    <Form.Item className="m-0"><Button type="primary" htmlType="submit">Next</Button></Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyDetails: state
  };
};

export default connect(mapStateToProps)(CompanyDetails1);
