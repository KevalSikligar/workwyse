import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Form, Input, Button, Select } from "antd";
import { getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
import { connect } from "react-redux";
import debounce from 'lodash/debounce';
import { COMPANY_SIZE, COMPANY_SCALE } from "../const";
class CompanyDetails2 extends Component {

  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.handleCategory = debounce(this.handleCategory, 600);
  }

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        companySize: this.props.companyDetails.signup.companySize,
        operationScale: this.props.companyDetails.signup.operationScale,
        trustpilotConnected: this.props.companyDetails.signup.trustpilotConnected,
        glassdoorConnnected: this.props.companyDetails.signup.glassdoorConnnected,
        connectFacebookBusiness: this.props.companyDetails.signup.connectFacebookBusiness,
      });
    }
  }


  handleCategory = (key, event) => {
    this.props.dispatch(getAllCompanyDetails(key, event))
  }

  render() {

    var href = window.location.href;
    const route = href.match(/([^\/]*)\/*$/)[1];
    const finalName = route.charAt(0).toUpperCase() + route.slice(1);
    const pathList = [{ to: `/sign-up/${route}`, title: `Sign Up` }];

    const onFinish = () => {
      this.props.nextStep();
    };

    const onFinishFailed = (errorInfo) => { };

    const back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    };

    return (
      <div className="seller_section_1">
        <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-12 sptb custom-card">
              <div className="card mb-0">
                <ProgressBar animated variant="primary" now={35} />
                <div className="card-header">
                  <h3 className="card-title">Complete Your Profile </h3>
                </div>
                <Form ref={this.formRef} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 company_mb">
                        <div className="form-group">
                          <label className="form-label asterisk">Company Size</label>
                          <Form.Item name="companySize"
                            rules={[{ required: true, message: 'Please select the size of your company!' }]}>
                            <Select className="form-ant-control" onChange={(e) => this.handleCategory('companySize', e)}>
                              {COMPANY_SIZE.map((o, index) =>
                                <Select.Option key={o.value} value={o.value}>{o.label}</Select.Option>
                              )}
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="form-group">
                          <label className="form-label asterisk">What is the scale of your operation(s)?</label>
                          <Form.Item name="operationScale"
                            rules={[{ required: true, message: 'Please select the size of your Operation Scale!' }]}>
                            <Select className="form-ant-control" onChange={(e) => this.handleCategory('operationScale', e)}>
                              {COMPANY_SCALE.map(category => (
                                <Select.Option key={category.value} value={category.value}>{category.label}</Select.Option>
                              ))}
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body review-sec companydetails2">
                    <div className="form-group">
                      <label className="text-dark m-0">Please select which review sites you would like to connect</label>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="review-item">
                          <div className="website-text">
                            <label>https://uk.trustpilot.com/review/</label>
                          </div>
                          <div className="review-input">
                            <Form.Item name="trustpilotConnected" rules={[{ required: false }]}>
                              <Input onChange={(e) => this.handleCategory('trustpilotConnected', e.target.value)} />
                            </Form.Item>
                          </div>
                          <div className="review-img">
                            <img src={require('../assets/images/trustpilot-logo.png')} className="logo-image img-fluid" alt="img" title="https://uk.trustpilot.com/review/" />
                          </div>
                          {/* <div className="review-content">
                            <Link to="/" className="btn review-btn">Connect Trustpilot</Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="review-item">
                          <div className="review-input">
                            <Form.Item name="glassdoorConnnected" rules={[{ required: false }]}>
                              <Input onChange={(e) => this.handleCategory('glassdoorConnnected', e.target.value)} />
                            </Form.Item>
                          </div>
                          <div className="website-text">
                            <label>https://www.glassdoor.co.uk/Reviews/</label>
                          </div>
                          <div className="review-img">
                            <img src={require('../assets/images/glassdoor-logo.png')} className="logo-image img-fluid" alt="img" title="https://www.glassdoor.co.uk/Reviews/" />
                          </div>
                          {/* <div className="review-content">
                            <Link to="/" className="btn review-btn">Connect Glassdoor</Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="review-item">
                          <div className="review-input">
                            <Form.Item name="connectFacebookBusiness" rules={[{ required: false }]}>
                              <Input onChange={(e) => this.handleCategory('connectFacebookBusiness', e.target.value)} />
                            </Form.Item>
                          </div>
                          <div className="website-text">
                            <label>https://facebook.com/</label>
                          </div>
                          <div className="review-img">
                            <img src={require('../assets/images/facebook-logo.png')} className="logo-image img-fluid" alt="img" title="https://facebook.com/" />
                          </div>
                          {/* <div className="review-content">
                            <Link to="/" className="btn review-btn">Connect Facebook</Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="info-section mw-100">
                          <p className="text-dark fs-18 mb-0">
                            Connecting review sites increases your ranking against competitors, we highly recommend selecting at least 2 review sites to connect.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right company-details-f">
                    <Form.Item className="m-0">
                      <Button className="btn btn-info mr-2" onClick={back}>Back</Button>
                    </Form.Item>
                    <Form.Item className="m-0">
                      <Button type="primary" htmlType="submit">Next</Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyDetails: state
  };
};

export default connect(mapStateToProps)(CompanyDetails2);
