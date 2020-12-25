import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { connect } from 'react-redux';
import { Select, Spin, Form, Input, notification } from 'antd';
import { getPostAProjectData } from '../redux/action/PostAProject/PostAProject';
import axios from 'axios';
import { debounce } from 'lodash';
import { editBuyerDetails } from '../Services/BuyerService';
import { editSellerDetails } from '../Services/SellerService';
import { getUserInfo } from '../Services/Authentication';
import { COMPANY_SCALE, COMPANY_SIZE, getUserDetail, setUserDetail } from '../const';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
class MyCompany extends React.Component {

  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.lastFetchId1 = 0;
    this.fetchCompany = debounce(this.fetchCompany, 800);
    this.fetchIndustry = debounce(this.fetchIndustry, 800);
  }

  formRef = React.createRef();

  state = {
    userDetails: null,
    fetching: false,
    data: [],
    value: [],
    valueIndutry: '',
    data1: [],
    value1: [],
    serviceValue: '',
    suggestions: [],
    companyName: '',
    companyContactNumber: '',
    industryId: '',
    originalIndustryId: '',
    enableButton: false,
    defaultCompanySize: '',
    defaultCompanyOperation: '',
    industryName: '',
    cityName: '',
    categoryTags: [],
    selectedTag: '',
    categoryName: '',
    postCodeSuggestions: [],
    postCodeValue: '',
    finalLocation: '',
    finalLatitude: '',
    finalLongitude: '',
  }

  componentDidMount() {
    console.log('getUserDetail() =>', getUserDetail())
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        companyName: { value: getUserDetail('companyId'), key: getUserDetail('companyId'), label: getUserDetail('companyName'), },
        companyContactNumber: getUserDetail('companyContactNumber'),
        defaultCompanySize: getUserDetail('companySize'),
        defaultCompanyOperation: getUserDetail('operationScale'),
        postCodeValue: getUserDetail('location')
      });
    }
    this.setState({ userDetails: getUserDetail(), initialState: getUserDetail() }, () => {
      fetch(process.env.REACT_APP_API_URL + `api/Industry/All`).then(response => response.json()).then(body => {
        body.map(data => {
          if (data.id === getUserDetail('industryId')) {
            var obj = { value: data.id, label: data.name, key: data.id };
            this.formRef.current.setFieldsValue({
              industryId: obj
            })
          }
        })
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: 'There was an error while fetching Industries!'
        })
      })
      // this.setState({ companyName, companyId, valueIndutry: industryId, defaultCompanySize, defaultCompanyOperation });
    });
  }

  postCodeIo = (e) => {
    this.setState({ enableButton: true }, () => {
      axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${e}`).then(res => {
        this.formRef.current.setFieldsValue({
          postCodeValue: e
        });
        this.setState({
          postCodeValue: e, postCodeSuggestions: [], disable: true,
          finalLocation: res.data.result.admin_county ? res.data.result.admin_county : res.data.result.country,
          finalLatitude: res.data.result.latitude,
          finalLongitude: res.data.result.longitude
        })
      });
    });
  }

  getLocation() {
    this.setState({ enableButton: true }, () => {
      axios.get(`https://freegeoip.app/json/`).then(res => {
        this.formRef.current.setFieldsValue({
          postCodeValue: res.data.city + " " + res.data.region_name
        });
        this.setState({
          postCodeValue: res.data.city + " " + res.data.region_name, disable: true,
          finalLocation: res.data.admin_county ? res.data.admin_county : res.data.country,
          finalLatitude: res.data.latitude,
          finalLongitude: res.data.longitude
        })
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: 'There was an error while fetching location API!'
        });
      });
    });
  };

  postCodeSuggestions = (event, { newValue }) => {
    this.setState({ enableButton: true }, () => {
      event.preventDefault()
      let suggestions = [];
      this.setState({ postCodeValue: newValue }, async () => {
        if (this.state.postCodeValue.length <= 0) {
          this.setState({ postCodeSuggestions: [] });
        }
        else {
          try {
            const resp = await axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${this.state.postCodeValue}/autocomplete`)
            resp.data.result.map((res) => (
              suggestions.push(res)
            ));
            this.setState({ postCodeSuggestions: suggestions ? suggestions : [] });
          } catch (err) {
            event.preventDefault();
          }
        }
      });
    });
  }

  fetchCompany = value => {
    if (value === null || value === '') {
      this.setState({ data: [], fetching: false });
      return;
    }
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true }, () => {
      fetch(process.env.REACT_APP_API_URL + `api/CompanyHouseProxy/ByCompanyName/${value}`).then(response => response.json()).then(body => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.items.map(user => ({
          text: `${user.title}`,
          value: user.company_number,
        }));
        this.setState({ data: data, fetching: false });
      });
    });
  };

  handleChange = value => {
    this.setState({
      companyName: value.label,
      companyContactNumber: parseInt(value.value),
      value,
      data: [],
      fetching: false,
      enableButton: true
    });
    this.formRef.current.setFieldsValue({
      companyContactNumber: value.value,
    });
  };

  fetchIndustry = value => {
    this.lastFetchId1 += 1;
    const fetchId1 = this.lastFetchId1;
    this.setState({ data1: [], fetching1: true }, () => {
      fetch(process.env.REACT_APP_API_URL + `api/Industry/All`).then(response => response.json()).then(body => {
        if (fetchId1 !== this.lastFetchId1) {
          // for fetch callback order
          return;
        }
        const data = body.map(user => ({
          text: `${user.name}`,
          value: user.id,
        }));
        this.setState({ data1: data, fetching1: false });
      });
    });
  };

  handleChangeIndutry = value1 => {
    this.setState({
      industryName: value1.label,
      industryId: value1.value,
      value1,
      data1: [],
      fetching1: false,
      enableButton: true
    });
  };

  changeHandler = (key, event) => {
    this.setState({ enableButton: true }, () => {
      if (key === 'operationScale') {
        this.setState({ defaultCompanyOperation: event })
      } else if (key === 'companySize') {
        this.setState({ defaultCompanySize: event });
      } else if (key === 'companyContactNumber') {
        axiosInterceptor.get(`api/CompanyHouseProxy/ByCompanyNumber/${event}`).then(res => {
          this.setState({ companyName: res.data.companyName, companyContactNumber: event }, () => {
            this.formRef.current.setFieldsValue({
              companyName: { value: event, key: event, label: res.data.company_name },
            });
          });
        }).catch(err => {
          // console.log('err => ', err);
        });
      } else {
        this.setState({ [key]: event });
      }
    });
  }

  discardAllUpdates = () => {
    this.setState({
      defaultCompanyOperation: getUserDetail('operationScale'),
      defaultCompanySize: getUserDetail('companySize'),
      companyId: getUserDetail('companyContactNumber'),
      industryId: this.state.originalIndustryId,
      enableButton: false,
      postCodeValue: getUserDetail('location'),
      latitude: getUserDetail('latitude'),
      longitude: getUserDetail('longitude'),
    });
  }

  editCompanyProfile = () => {
    const data = {
      id: getUserDetail('companyId'),
      businessType: 2,
      companyType: getUserDetail('roles') === 'Buyer' ? 1 : 2,
      companyEmail: getUserDetail('email'),
      companyName: this.state.companyName ? this.state.companyName : getUserDetail('companyName'),
      companyContactNumber: this.state.companyContactNumber ? this.state.companyContactNumber : getUserDetail('companyContactNumber'),
      companySize: this.state.defaultCompanySize ? this.state.defaultCompanySize : getUserDetail('companySize'),
      operationScale: this.state.defaultCompanyOperation ? this.state.defaultCompanyOperation : getUserDetail('operationScale'),
      distance: 50,
      latitude: this.state.finalLatitude ? this.state.finalLatitude : getUserDetail('latitude'),
      longitude: this.state.finalLongitude ? this.state.finalLongitude : getUserDetail('longitude'),
      location: this.state.finalLocation ? this.state.finalLocation : getUserDetail('location'),
      trustpilotConnectedUrl: getUserDetail('trustpilotConnectedUrl'),
      glassdoorConnnectedUrl: getUserDetail('glassdoorConnnectedUrl'),
      connectFacebookBusinessUrl: getUserDetail('connectFacebookBusinessUrl'),
      active: true,
      industryId: this.state.industryId ? this.state.industryId : getUserDetail('industryId'),
      jobTitle: getUserDetail('jobTitle'),
      companyUserId: getUserDetail('companyUserId'),
      userDto: {
        id: getUserDetail('userId'),
        foreName: getUserDetail('foreName'),
        surName: getUserDetail('surName'),
        phoneNumber: getUserDetail('phoneNumber'),
        email: getUserDetail('email'),
        password: '',
        photoPath: null
      }
    }
    if (getUserDetail('roles') === 'Buyer') {
      data.buyerTemplate = getUserDetail('buyerTemplate')
      editBuyerDetails(data).then(res => {
        if (res.status === 200) {
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
            // localStorage.setItem('userDetails', JSON.stringify(userInfo.data));
          }).catch(err => {
            // console.log('err => ', err);
          });
          notification.open({
            message: 'Success',
            description: 'User details have successfully been updated!'
          });
        }
      }).catch(err => {
        // console.log('err => ', err);
      });
    } else if (getUserDetail('roles') === 'Seller') {
      data.sellerCategoryId = getUserDetail('sellerCategoryId')
      data.sellerTemplate = getUserDetail('sellerTemplate')
      editSellerDetails(data).then(res => {
        if (res.status === 200) {
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
            // localStorage.setItem('userDetails', JSON.stringify(userInfo.data));
          }).catch(err => {
            // console.log('err => ', err);
          });
          notification.open({
            message: 'Success',
            description: 'User details have successfully been updated!'
          });
        }
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: 'There was an error while updating user details'
        });
      });
    }
  }

  render() {

    const pathList = [{ to: "/my-company", title: "My Company" }];
    const { Option } = Select;
    const { fetching, data, fetching1, data1, postCodeSuggestions } = this.state;

    return (

      <div>
        <BreadCrumbs title="My Company" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <SideNav />
            </div>
            <div className="col-xl-9 col-lg-9 sptb">
              <Form ref={this.formRef}>
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-12 border-radius-4 mb-md-5 mb-sm-3">
                        <div className="company-profile-head bg-background3">
                          <div className="company-img">
                            <div className="profile-pic">
                              <div className="profile-pic-img">
                                <span className="edit-profile-img dots" data-toggle="tooltip" data-placement="top" title="Edit picture">
                                  <i className="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                                <img src={require('../assets/images/users/male/25.jpg')} className="brround" alt="user" />
                              </div>
                            </div>
                          </div>
                          <div className="company-content">
                            <div className="company-name fs-18 font-weight-semibold">{getUserDetail('userName')}</div>
                            <div className="company-name fs-18 font-weight-semibold">{getUserDetail('location')}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12">
                        <div className="custom-controls-stacked rdb-steps-1">
                          <div className="row">
                            <div className="col-sm-12 col-md-12">
                              <div className="form-group autosuggest-company-name">
                                <label className="form-label">Company Name</label>
                                <Form.Item name="companyName">
                                  <Select
                                    showSearch
                                    labelInValue
                                    placeholder="Search Companies"
                                    notFoundContent={fetching ? <Spin size="small" /> : null}
                                    filterOption={false}
                                    onSearch={(e) => this.fetchCompany(e)}
                                    onChange={(e) => this.handleChange(e)}
                                    style={{ width: '100%' }}>
                                    {data.map(d => (
                                      <Select.Option key={d.value}>{d.text}</Select.Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">Company Number</label>
                                <Form.Item name="companyContactNumber">
                                  <Input
                                    onChange={(e) => this.changeHandler("companyContactNumber", e.target.value)} />
                                </Form.Item>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">Industry {getUserDetail('roles') === 'Buyer' ? '' : 'Experience'}</label>
                                <Form.Item name="industryId">
                                  <Select
                                    showSearch
                                    labelInValue
                                    value={this.state.value1}
                                    placeholder="Search Industries"
                                    notFoundContent={fetching1 ? <Spin size="small" /> : null}
                                    onSearch={(e) => this.fetchIndustry(e)}
                                    onChange={(e) => this.handleChangeIndutry(e)}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    style={{ width: '100%' }}>
                                    {data1.map(d => (
                                      <Option key={d.value}>{d.text}</Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                              </div>
                            </div>
                            {/* <div className="col-sm-6 col-md-6">
                            <div className="form-group">
                              <label className="form-label">VAT Number</label>
                              <input type="text" className="form-control" placeholder="VAT Number" value="123456" />
                            </div>
                          </div> */}
                          </div>
                          <div className="row">
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">Company Size</label>
                                <Form.Item name="defaultCompanySize">
                                  <Select className="form-ant-control" onChange={(e) => this.changeHandler('companySize', e)}>
                                    {COMPANY_SIZE.map((o, index) =>
                                      <Select.Option value={o.value}>{o.label}</Select.Option>
                                    )}
                                  </Select>
                                </Form.Item>
                              </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                              <div className="form-group">
                                <label className="form-label">Operation(s)</label>
                                <Form.Item name="defaultCompanyOperation">
                                  <Select className="form-ant-control" onChange={(e) => this.changeHandler('operationScale', e)}>
                                    {COMPANY_SCALE.map(category => (
                                      <Select.Option value={category.value}>{category.label}</Select.Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-6 col-md-6 post-code-sec">
                              <div className="form-group mb-0">
                                <label className="form-label">Location</label>
                                <Form.Item name="postCodeValue" className="mb-0">
                                  <Input className="form-control input-lg br-tr-md-0 br-br-md-0"
                                    placeholder="Enter your postcode"
                                    autoComplete={'off'}
                                    onChange={(e) => this.postCodeSuggestions(e, { newValue: e.target.value })} />
                                </Form.Item>
                                <span className="gps-icon"><img onClick={() => this.getLocation()} src={require("../assets/images/svg/gps.svg")}
                                  className="location-gps" alt="img" /></span>
                              </div>
                              <ul className="width-set-ul">
                                {postCodeSuggestions.map(o =>
                                  <li onClick={() => this.postCodeIo(o)}>
                                    {o ? o : []}
                                  </li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-right">
                    <button className="btn btn-danger mr-2" onClick={() => this.discardAllUpdates()}>Discard Changes</button>
                    <button className="btn btn-primary" disabled={!this.state.enableButton} onClick={() => this.editCompanyProfile()}>Update Company Details</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div >
    )
  }

  onChange = (event, { newValue }) => {
    event.preventDefault();
    let newAray = []
    let categoryTag = []
    this.setState({ serviceValue: newValue }, async () => {
      if (this.state.serviceValue.length <= 0) {
        this.setState({ suggestions: [] });
      }
      else {
        try {
          const resp = await axios.get(`api/Category/All/${this.state.serviceValue}`)
          resp.data.map(dataNew => (
            newAray.push(dataNew.categoryName),
            categoryTag.push(dataNew.tags)
          ))
          // console.log('categoryTag => ', categoryTag, this.state.serviceValue);
          this.props.dispatch(getPostAProjectData('categoryTag', categoryTag))
          this.setState({ suggestions: resp.data ? resp.data : [] });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  };
}

const mapStateToProps = (state) => {
  return {
    myCompanyDetails: state
  };
};

export default connect(mapStateToProps)(MyCompany);
