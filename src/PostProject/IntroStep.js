import React from 'react'
import { getAllCategory } from '../Services/CommonServices';
import { getQuestion, getQuestionError } from '../redux/action/Category/CategoryAction';
import { connect } from 'react-redux';
import axios from 'axios';
import { Form, Input, notification, Spin, Select, Button } from 'antd';
import DropBox from '../DropBox/DropBox';
// import GoogleDrive from '../GoogleDrive/GoogleDrive';
import { getPostAProjectData } from '../redux/action/PostAProject/PostAProject';
import { getAllCompanyDetails } from '../redux/action/SignUp/SignUpAction';
import debounce from 'lodash/debounce';
import Loader from '../Loader/Loader';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';

class IntroStep extends React.Component {

  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.changeHandler = debounce(this.changeHandler, 800);
    this.fetchIndustry = debounce(this.fetchIndustry, 800);
  }

  state = {
    startDate: new Date(),
    categories: [],
    cityName: '',
    tagnames: [],
    categoryId: '',
    data: [],
    fetching: false,
    postCodeSuggestions: [],
    postCodeValue: '',
    loader: false
  };

  componentWillReceiveProps() {
    this.setState({ loader: true });
    if (this.props.category.category.categoryKey ? this.props.category.category.categoryKey : this.props.category.signup.categoryId) {
      axiosInterceptor.get(`api/Category/ById/${this.props.category.category.categoryKey ? this.props.category.category.categoryKey : this.props.category.signup.categoryId}`).then(res => {
        this.setState({ tagnames: res.data.tags, loader: false })
      }).catch(() => {
        this.setState({ loader: false })
      });
    }
  }

  componentDidMount() {
    this.setState({ loader: true });
    getAllCategory().then(response => {
      this.setState({ categories: response.data, loader: false });
    }).catch(error => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching category data.'
      });
    });

    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        title: this.props.category.postaproject.title || '',
        industryId: this.props.category.postaproject.forfetch,
        description: this.props.category.postaproject.description || '',
        Category: this.props.category.category.categoryKey ? this.props.category.category.categoryKey : this.props.category.signup.categoryId,
        tagId: this.props.category.signup.tagId
      });
    }

    if (this.props.category.signup.categoryId) {
      this.setState({ loader: true });
      axiosInterceptor.get(`api/CategoryQuestionnaire/${this.props.category.signup.categoryId}`).then((response) => {
        this.setState({ tagnames: response.data.tags ? response.data.tags : null, loader: false })
        this.props.dispatch(getQuestion(response.data));
      }).catch((error) => {
        this.setState({ tagnames: [], loader: false })
        this.props.dispatch(getQuestionError(error));
      });
    }
  }

  handleTagChange = (id) => {
    this.setState({ tagnames: [] })
    let categoryChangeTag = ''
    this.state.tagnames.map(data => {
      if (data.id === id) {
        categoryChangeTag = data.name
      }
    });
    this.props.dispatch(getAllCompanyDetails('tagId', id));
    this.props.dispatch(getAllCompanyDetails('tagName', categoryChangeTag));
  }

  handleCategory = (id) => {
    this.setState({ loader: true, tagnames: [] });
    let categoryTag;
    this.state.categories.map(data => {
      if (data.id === id) {
        categoryTag = data.name
      }
    });
    axiosInterceptor.get(`api/Category/ById/${id}`).then(resp => {
      this.setState({ tagnames: resp.data.tags, loader: false });
      this.props.dispatch(getAllCompanyDetails('categoryId', resp.data.categoryId));
      this.props.dispatch(getAllCompanyDetails('categoryName', resp.data.categoryName));
    });
    axiosInterceptor.get(`api/CategoryQuestionnaire/${id}`).then((response) => {
      this.setState({ loader: false });
      this.props.dispatch(getQuestion(response.data));
    }).catch((error) => {
      this.setState({ loader: false });
      this.props.dispatch(getQuestionError(error))
    });
  }

  changeHandler = (key, event) => {
    this.props.dispatch(getPostAProjectData(key, event));
  }

  fetchIndustry = () => {
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
      this.setState({ data, fetching: false }, async () => {
        this.formRef.current.setFieldsValue({
          industryId: this.props.category.postaproject.forfetch
        });
      });
    });
  };

  handleChangeIndustry = (key, value) => {
    this.setState({
      industryId: value.value,
      value,
      data: [],
      fetching: false,
    });
    this.props.dispatch(getPostAProjectData(key, parseInt(value.key)));
    this.props.dispatch(getPostAProjectData('forfetch', value));
  };

  postCodeIo = (e) => {
    axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${e}`).then(res => {
      this.setState({ postCodeValue: e, postCodeSuggestions: [] })
      this.props.dispatch(getPostAProjectData('latitude', res.data.result.latitude))
      this.props.dispatch(getPostAProjectData('longtitude', res.data.result.longitude))
      this.props.dispatch(getPostAProjectData('location', res.data.result.admin_county ? res.data.result.admin_county : res.data.result.country))
    });
  }

  getLocation() {
    axios.get(`https://freegeoip.app/json/`).then(res => {
      this.setState({ postCodeValue: res.data.city + " " + res.data.region_name })
      this.props.dispatch(getPostAProjectData('latitude', res.data.latitude))
      this.props.dispatch(getPostAProjectData('longtitude', res.data.longitude))
      this.props.dispatch(getPostAProjectData('location', this.state.cityName))
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching location API!'
      });
    });
  };

  postCodeSuggestions = (event, { newValue }) => {
    this.props.dispatch(getPostAProjectData('latitude', ''))
    this.props.dispatch(getPostAProjectData('longtitude', ''))
    this.props.dispatch(getPostAProjectData('location', ''))
    event.preventDefault()
    let suggestions = [];
    this.setState({ postCodeValue: newValue }, async () => {
      if (this.state.postCodeValue.length <= 0) {
        this.setState({ postCodeSuggestions: [] });
      } else {
        try {
          const resp = await axiosInterceptor.get(`postcodes/${this.state.postCodeValue}/autocomplete`)
          resp.data.result.map((res) => (
            suggestions.push(res)
          ));
          this.setState({ postCodeSuggestions: suggestions ? suggestions : [] });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  }

  postCodeIo = (e) => {
    axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${e}`).then(res => {
      this.setState({ postCodeValue: e, postCodeSuggestions: [] })
      this.props.dispatch(getPostAProjectData('latitude', res.data.result.latitude))
      this.props.dispatch(getPostAProjectData('longtitude', res.data.result.longitude))
      this.props.dispatch(getPostAProjectData('location', res.data.result.admin_county ? res.data.result.admin_county : res.data.result.country))
    });
  }

  getLocation() {
    axios.get(`https://freegeoip.app/json/`).then(res => {
      this.setState({ postCodeValue: res.data.city + " " + res.data.region_name })
      this.props.dispatch(getPostAProjectData('latitude', res.data.latitude))
      this.props.dispatch(getPostAProjectData('longtitude', res.data.longitude))
      this.props.dispatch(getPostAProjectData('location', res.data.city))
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching location API!'
      });
    });
  }

  render() {

    const { TextArea } = Input;

    const { fetching, data } = this.state;

    const { Option } = Select;

    const onFinish = async () => {
      try {
        await this.formRef.current.validateFields();
        this.props.next();
      } catch (e) {
      }
    };

    return (
      <div className="post_project_popup_1">
        <Form ref={this.formRef}>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label className="form-label asterisk">Project Title</label>
                <Form.Item name="title" rules={[{ required: true, message: 'Please input your Title!' }]}>
                  <Input onChange={(e) => this.changeHandler("title", e.target.value)} />
                </Form.Item>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label className="form-label asterisk">What is your Industry?</label>
                <Form.Item name="industryId" rules={[{ required: true, message: 'Please select your Industry!' }]} >
                  <Select
                    showSearch
                    labelInValue
                    placeholder="Search Industries"
                    notFoundContent={fetching ? <Spin size="small" /> : null}
                    onSearch={(e) => this.fetchIndustry(e)}
                    onChange={(e) => this.handleChangeIndustry('industryId', e)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                    {data.map(d => (
                      <Option key={d.value} value={d.value}>{d.text}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-12">
              <div className="form-group loader_ser">
                <label className="form-label asterisk">Category</label>
                <Form.Item name="Category" rules={[{ required: true, message: 'Please select a Category!' }]}>
                  {this.state.loader ? <Loader /> :
                    <Select value={this.props.category.category.categoryKey}
                      className="form-ant-control" onChange={e => this.handleCategory(e)}>
                      {this.state.categories && this.state.categories.map(category => (
                        <Select.Option key={category.id} value={category.id}>{category.name}</Select.Option>
                      ))}
                    </Select>
                  }
                </Form.Item>
              </div>
            </div>
            <>
              {this.state.tagnames && this.state.tagnames.length > 0 ?
                <div className="col-md-6 col-12">
                  <div className="form-group loader_ser">
                    <>
                      <label className="form-label asterisk">Services</label>
                      <Form.Item name="tagId" rules={[{ required: true, message: 'Please select a Tag!' }]}>
                        {this.state.loader ? <Loader /> :
                          <Select className="form-ant-control" onChange={(e) => this.handleTagChange(e)}>
                            {this.state.tagnames && this.state.tagnames.map(tag => (
                              <Select.Option key={tag.id} value={tag.id}>{tag.name}</Select.Option>
                            ))}
                          </Select>
                        }
                      </Form.Item>
                    </>
                  </div>
                </div>
                :
                <div className="col-md-6 col-12">
                  <div className="form-group loader_ser">
                    <label className="form-label">Services</label>
                    {/* {this.state.loader ? <Loader /> : */}
                    <p>No service available for the selected category</p>
                    {/* } */}
                  </div>
                </div>
              }
            </>
          </div>

          <div className="row">
            <div className="col-12 col-md-12">
              <div className="form-group">
                <label className="form-label">Description</label>
                <Form.Item name="description">
                  <TextArea rows={5} className="m-0"
                    placeholder="Please provide a description with any specifications" allowClear
                    onChange={(e) => this.changeHandler("description", e.target.value)} />
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-12">
              <div className="form-group mb-0">
                <label className="form-label">Upload Documents</label>
                <div className="upload-doucments d-md-flex">
                  {/* <GoogleDrive>
                    <span className="d-box-section mr-md-2">
                      <img src={require('../assets/images/google-drive.png')} width="30"
                        alt="Google Drive Image" />
                      <span className="pl-3">Google Drive</span>
                    </span>
                  </GoogleDrive> */}
                  <DropBox>
                    <span className="d-box-section dropbox-bg">
                      <i className="fa fa-dropbox fa-2x" aria-hidden="true"></i>
                      <span className="pl-3">Dropbox</span>
                    </span>
                  </DropBox>
                </div>
              </div>
            </div>
          </div>

          <div className="model-popup-wizard">
            <Form.Item>
              <div className="ml-4">
                {this.props.category.category.key === 'header' &&
                  <Button onClick={this.props.previous} className="btn-prev"> Previous</Button>
                }
                <Button type="primary" onClick={onFinish} htmlType="submit"> Next</Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>
    )
  }

  handleChange = date => {
    this.setState({ startDate: date });
  };

}

const mapStateToProps = state => {
  return {
    category: state
  }
}

export default connect(mapStateToProps)(IntroStep)