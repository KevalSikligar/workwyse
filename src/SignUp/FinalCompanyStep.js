import React, { Component } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Select, Form, notification, Button, Input } from "antd";
import { connect } from "react-redux";
import { postSeller } from "../Services/SellerService";
import { get } from "lodash";
import { withRouter } from "react-router-dom";
import axiosInterceptor from "../AxiosInterceptor/axiosInterceptor";
class FinalCompanyStep extends Component {

  state = {
    projectType: [],
    enableDropdown: false,
    enableInputField: false,
    allPriceValues: [],
    InitialIndex: undefined,
    inputValue: "",
    inputValue1: "",
    dropDownPrice: "",
    categorySelection: this.props.companyDetails.signup.categoryKey,
    uniqueCategory: []
  };

  componentDidMount() {
    axiosInterceptor.get(`api/ProjectType/All`).then((res) => {
      this.setState({ projectType: res.data });
    }).catch((err) => {
      notification.open({
        message: "Error",
        description: "There was an error while fetching Project Type!",
      });
    });
    var reqPayload = [];
    this.props.companyDetails.signup.categoryKey.map(data => {
      if (data.tags && data.tags.length) {
        data.tags.map(o => {
          reqPayload.push({
            id: 0,
            sellerId: 0,
            categoryId: parseInt(data.id),
            tagId: parseInt(o.tagId),
            oneOffRate: null,
            monthlyRate: null,
            hourlyStartRate: null,
            hourlyEndRate: null,
            serviceType: 1
          });
        })
      } else {
        reqPayload.push({
          id: 0,
          sellerId: 0,
          categoryId: parseInt(data.id),
          tagId: null,
          oneOffRate: null,
          monthlyRate: null,
          hourlyStartRate: null,
          hourlyEndRate: null,
          serviceType: 1
        });
      }
    })
    this.setState({ reqPayload });
  }

  validate = (evt) => {
    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'paste') {
      key = evt.clipboardData.getData('text/plain');
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  render() {

    const { Option } = Select;
    var href = window.location.href;
    const route = href.match(/([^\/]*)\/*$/)[1];
    const finalName = route.charAt(0).toUpperCase() + route.slice(1);
    const pathList = [{ to: `/ sign - up / ${route}`, title: `Sign Up` }];

    const saveAndContinue = () => {
      const data = {
        id: 0,
        businessType: 1,
        companyType: 2,
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
        industryId: get(this.props.companyDetails.signup, "industryId", ''),
        sellerTemplate: get(this.props.companyDetails.signup, "sellerTemplate", ''),
        sellerServices: this.state.reqPayload,
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
        },
      };
      postSeller(data).then((res) => {
        if (res.status === 200) {
          notification.success({
            message: 'Success',
            description: 'Seller successfully created! You will now be redirected to Home Page.'
          });
          setTimeout(() => {
            this.props.history.push('/home');
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
          description: 'There was an error while creating seller account!'
        });
      });
    };

    const back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    };

    const priceSelection = (data, tagId, categoryid) => {
      var reqPayload = Object.assign([], this.state.reqPayload);
      let index = reqPayload.findIndex(object => object.tagId === tagId || object.categoryId === categoryid)
      this.state.reqPayload.map((dataNew, i) => {
        if (dataNew.tagId === tagId) {
          this.state.reqPayload[i][data.key] = data.value
        }
      })
      this.setState({ reqPayload: this.state.reqPayload });
    };

    return (
      <>
        <BreadCrumbs title={`${finalName} Sign Up`} breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-12 sptb custom-card">
              <div className="card mb-0">
                <ProgressBar animated variant="primary" now={100} />
                <div className="card-header">
                  <h3 className="card-title">Complete Your Profile </h3>
                </div>
                <Form onFinish={saveAndContinue}>
                  <div className="card-body">
                    <table className="services-table-custom services-table table-bordered table-responsive">
                      <thead className="text-center">
                        <tr>
                          <th width="45%"></th>
                          <th width="20%">One Off</th>
                          <th width="20%">Monthly</th>
                          <th width="15%">Hourly</th>
                        </tr>
                      </thead>
                      <tbody>
                        <>
                          {this.props.companyDetails.signup.categoryKey.map((categoryName, i) => (
                            <>
                              <tr>
                                <td className="service-title" colSpan={categoryName.tags.length > 0 ? 4 : 0}>{categoryName.title}</td>
                                {categoryName.tags.length <= 0 &&
                                  <>
                                    <td>
                                      <Form.Item className="m-0" name={`oneOffRate-empty` + i} rules={[{ required: true, message: 'Please select an one Off rate!' }]}>
                                        <Select
                                          name="oneOffRate"
                                          onChange={(e) => priceSelection({ key: "oneOffRate", value: parseInt(e) }, null, categoryName.id, categoryName.id)}>
                                          <Option value={1}>£250 - £1,000</Option>
                                          <Option value={2}>£1,000 - £2,000</Option>
                                          <Option value={3}>£2,000 - £5,000</Option>
                                          <Option value={4}>£5,000 - £10,000+</Option>
                                        </Select>
                                      </Form.Item>
                                    </td>
                                    <td>
                                      <Form.Item className="m-0" name={`monthlyRate-empty` + i} rules={[{ required: true, message: 'Please select monthly rate!' }]}>
                                        <Select
                                          name="monthlyRate"
                                          onChange={(e) => priceSelection({ key: "monthlyRate", value: parseInt(e) }, null, categoryName.id)}>
                                          <Option value={1}>£250 - £1,000</Option>
                                          <Option value={2}>£1,000 - £2,000</Option>
                                          <Option value={3}>£2,000 - £5,000</Option>
                                          <Option value={4}>£5,000 - £10,000+</Option>
                                        </Select>
                                      </Form.Item>
                                    </td>
                                    <td>
                                      <div className="hourly-rates-custom">
                                        <Form.Item name={`hourlyStartRate - ${categoryName.id} - ${i}`} rules={[{ required: true, message: 'Please select starting rate!' }]}>
                                          <Input className="m-0" placeholder={'£'} onChange={(e) => priceSelection({ key: "hourlyStartRate", value: parseInt(e.target.value) }, null, categoryName.id)} onKeyPress={this.validate} />
                                        </Form.Item>
                                        <p> - </p>
                                        <Form.Item name={`hourlyEndRate - ${categoryName.id} - ${i}`} rules={[{ required: true, message: 'Please select end rate!' }]}>
                                          <Input className="m-0" placeholder={'£'} onChange={(e) => priceSelection({ key: "hourlyEndRate", value: parseInt(e.target.value) }, null, categoryName.id)} onKeyPress={this.validate} />
                                        </Form.Item>
                                      </div>
                                    </td>
                                  </>
                                }
                              </tr>
                              <div></div>
                              {categoryName.tags.length > 0 && categoryName.tags.map((tag, index) => (
                                <>
                                  <tr>
                                    <td>{tag.tagName}</td>
                                    <td>
                                      <Form.Item className="m-0" name={`oneOffRate` + index} rules={[{ required: true, message: 'Please select an one Off rate!' }]}>
                                        <Select
                                          name="oneOffRate"
                                          onChange={(e) => priceSelection({ key: "oneOffRate", value: parseInt(e) }, tag.tagId ? tag.tagId : categoryName.id, categoryName.id)}>
                                          <Option value={1}>£250 - £1,000</Option>
                                          <Option value={2}>£1,000 - £2,000</Option>
                                          <Option value={3}>£2,000 - £5,000</Option>
                                          <Option value={4}>£5,000 - £10,000+</Option>
                                        </Select>
                                      </Form.Item>
                                    </td>
                                    <td>
                                      <Form.Item className="m-0" name={`monthlyRate` + index} rules={[{ required: true, message: 'Please select monthly rate!' }]}>
                                        <Select
                                          name="monthlyRate"
                                          onChange={(e) => priceSelection({ key: "monthlyRate", value: parseInt(e) }, tag.tagId ? tag.tagId : categoryName.id, categoryName.id)}>
                                          <Option value={1}>£250 - £1,000</Option>
                                          <Option value={2}>£1,000 - £2,000</Option>
                                          <Option value={3}>£2,000 - £5,000</Option>
                                          <Option value={4}>£5,000 - £10,000+</Option>
                                        </Select>
                                      </Form.Item>
                                    </td>
                                    <td>
                                      <div className="hourly-rates-custom m-0">
                                        <Form.Item className="m-0" name={`hourlyStartRate - ${categoryName.id} - ${tag.tagId ? tag.tagId : null}`} rules={[{ required: true, message: 'Please select starting rate!' }]}>
                                          <Input className="m-0" placeholder={'£'} onChange={(e) => priceSelection({ key: "hourlyStartRate", value: parseInt(e.target.value) }, tag.tagId ? tag.tagId : null, categoryName.id)} onKeyPress={this.validate} />
                                        </Form.Item>
                                        <p> - </p>
                                        <Form.Item className="m-0" name={`hourlyEndRate - ${categoryName.id} - ${tag.tagId ? tag.tagId : null}`} rules={[{ required: true, message: 'Please select end rate!' }]}>
                                          <Input className="m-0" placeholder={'£'} onChange={(e) => priceSelection({ key: "hourlyEndRate", value: parseInt(e.target.value) }, tag.tagId ? tag.tagId : null, categoryName.id)} onKeyPress={this.validate} />
                                        </Form.Item>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              ))}
                            </>
                          ))}
                        </>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer text-right">
                    <Form.Item>
                      <Button className="btn btn-info mr-2" onClick={back}>Back</Button>
                      <Button className="btn btn-primary" htmlType="submit">Save And Verify Email</Button>
                    </Form.Item>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyDetails: state,
  };
};

export default withRouter(connect(mapStateToProps)(FinalCompanyStep));
