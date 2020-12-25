import React, { Component } from 'react';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { connect } from "react-redux";
import { getAllCompanyDetails } from '../redux/action/SignUp/SignUpAction';
import { getPostAProjectData } from '../redux/action/PostAProject/PostAProject';
import { notification, Input, Form, Button } from 'antd';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
class HeaderStep extends Component {

  formRef = React.createRef();

  state = {
    value: "",
    suggestions: [],
    cityName: '',
    categoryTags: [],
    selectedTag: '',
    categoryName: "",
    postCodeSuggestions: [],
    postCodeValue: ''
  };

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        category: this.props.headerStep.signup ? this.props.headerStep.signup.categoryName : '',
        postCodeValue: this.props.headerStep.signup.postCodeValue ? this.props.headerStep.signup.postCodeValue : this.props.headerStep.postaproject.location
      });
    }
  }

  onChange = (event, { newValue }) => {
    event.preventDefault()
    let newAray = []
    let categoryTag = []
    this.setState({ value: newValue }, async () => {
      if (this.state.value.length <= 0) {
        this.setState({ suggestions: [] });
      } else {
        try {
          const resp = await axiosInterceptor.get(`api/Category/All/${this.state.value}`)
          resp.data.map(dataNew => (
            newAray.push(dataNew.categoryName),
            categoryTag.push(dataNew.tags)
          ))
          this.setState({ suggestions: resp.data ? resp.data : [] });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  };

  getOnlyCategory = (e) => {
    this.formRef.current.setFieldsValue({ category: e.categoryName });
    this.setState({ suggestions: [], value: `${e.categoryName}`, categoryName: e.categoryName }, () => {
      this.props.dispatch(getAllCompanyDetails('categoryId', e.categoryId));
      this.props.dispatch(getAllCompanyDetails('categoryName', e.categoryName));
    })
  };

  postCodeIo = (e) => {
    axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${e}`).then(res => {
      this.formRef.current.setFieldsValue({ postCodeValue: e });
      this.setState({ postCodeValue: e, postCodeSuggestions: [] }, () => {
        this.props.dispatch(getAllCompanyDetails('postCodeValue', e));
        this.props.dispatch(getPostAProjectData('latitude', res.data.result.latitude))
        this.props.dispatch(getPostAProjectData('longtitude', res.data.result.longitude))
        this.props.dispatch(getPostAProjectData('location', res.data.result.admin_county ? res.data.result.admin_county : res.data.result.country))
      })
    });
  }

  getLocation() {
    this.props.dispatch(getAllCompanyDetails('postCodeValue', ""));
    axios.get(`https://freegeoip.app/json/`).then(res => {
      this.formRef.current.setFieldsValue({ postCodeValue: res.data.city + " " + res.data.region_name });
      this.setState({ postCodeValue: res.data.city + " " + res.data.region_name }, () => {
        this.props.dispatch(getPostAProjectData('latitude', res.data.latitude))
        this.props.dispatch(getPostAProjectData('longtitude', res.data.longitude))
        this.props.dispatch(getPostAProjectData('location', res.data.city + " " + res.data.region_name))
      })
    }).catch(() => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching location API!'
      });
    });
  };

  selectedTags = (tagSelected, tagName, categoryName, categoryId) => {
    this.formRef.current.setFieldsValue({ category: `${categoryName} - ${tagName}` });
    this.setState({
      suggestions: [],
      value: `${categoryName} - ${tagName}`,
      categoryName: categoryName,
      selectedTag: tagName
    }, () => {
      this.props.dispatch(getAllCompanyDetails('categoryId', categoryId));
      this.props.dispatch(getAllCompanyDetails('categoryName', categoryName));
      this.props.dispatch(getAllCompanyDetails('tagId', tagSelected));
      this.props.dispatch(getAllCompanyDetails('tagName', tagName));
    });
  };

  postCodeSuggestions = (event, { newValue }) => {
    event.preventDefault()
    this.setState({ postCodeValue: newValue }, async () => {
      if (this.state.postCodeValue.length <= 0) {
        this.setState({ postCodeSuggestions: [] });
      } else {
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

  componentWillUnmount() {
    this.setState({ postCodeValue: "" })
  }

  onFinish = async e => {
    try {
      await this.formRef.current.validateFields();
      this.props.next();
    } catch (e) { }
  }

  onFinishFailed = () => { };

  render() {

    const { suggestions, postCodeSuggestions } = this.state;

    return (
      <div className="post_project_popup_0">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 d-block mx-0">
            <div className="search-background bg-transparent breadcrumb-search mx-0 w-100 mw-100">
              <Form ref={this.formRef} onFinishFailed={() => this.onFinishFailed}>
                <div className="form row no-gutters view-service-list">
                  <div className="form-group col-md-8 mb-0 bg-white  accordion-search-sec">
                    <Form.Item name='category'
                      rules={[{ required: true, message: "Please select a Category!" }]}>
                      <Input className="form-control input-lg br-tr-md-0 br-br-md-0"
                        placeholder="What service are you looking for?" autoComplete={'off'}
                        onChange={(e) => this.onChange(e, { newValue: e.target.value })} />
                    </Form.Item>
                    {suggestions.length > 0 && <Accordion defaultActiveKey="0">
                      {suggestions.map((o, index) => (
                        <Card key={o.categoryId}>
                          <Card.Header>
                            <Accordion.Toggle variant="link" eventKey="0"
                              className="ant-btn"
                              onClick={() => this.getOnlyCategory(o)}>
                              {o.categoryName ? o.categoryName : null}
                              <i className="fa fa-angle-down" aria-hidden="true" />
                            </Accordion.Toggle>
                          </Card.Header>
                          {o.tags.length > 0 ?
                            <>
                              <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                  {o.tags ? o.tags.map((tag, index) =>
                                    <li key={tag.id}
                                      onClick={() => this.selectedTags(tag.id, tag.name, o.categoryName, o.categoryId)}>{tag.name}</li>
                                  ) : []}
                                </Card.Body>
                              </Accordion.Collapse></> :
                            <Accordion.Collapse eventKey="0" className="d-none">
                              <Card.Body> </Card.Body>
                            </Accordion.Collapse>
                          }
                        </Card>
                      ))}
                    </Accordion>}
                  </div>
                  <div className="form-group col-md-4 mb-0 bg-white k-postcode-header post-code-sec">
                    <Form.Item name="postCodeValue" rules={[{ required: true, message: "Please enter your PostCode!" }]}>
                      <Input className="form-control input-lg br-tr-md-0 br-br-md-0"
                        placeholder="Enter your postcode"
                        autoComplete={'off'}
                        onChange={(e) => this.postCodeSuggestions(e, { newValue: e.target.value })} />
                    </Form.Item>
                    {postCodeSuggestions.length > 0 &&
                      <ul>
                        {postCodeSuggestions.map((o, oi) =>
                          <li key={oi} onClick={() => this.postCodeIo(o)}>
                            {o ? o : []}
                          </li>
                        )}
                      </ul>
                    }
                    <span>
                      <img onClick={() => this.getLocation()} src={require("../assets/images/svg/gps.svg")} className="location-gps" alt="img" />
                    </span>
                  </div>
                </div>
                <div className="model-popup-wizard">
                  <div className="ml-4">
                    <Form.Item>
                      <Button type='primary' htmlType={'submit'} onClick={() => this.onFinish()} > Next </Button>
                    </Form.Item>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state => ', state);

  return {
    headerStep: state
  };
};

export default connect(mapStateToProps)(HeaderStep);