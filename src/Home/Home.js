import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PostProject from "../PostProject/PostProject";
import swal from "sweetalert";
import axios from "axios";
import { connect } from "react-redux";
// import SignInLinkedIn from "../SignUp/SignInLinkedIn";
import { Form, Input, Button, notification } from "antd";
import { getKey, getPopUpCategoryKey } from "../redux/action/Category/CategoryAction";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { clearAllData, clearProjectData, getPostAProjectData } from "../redux/action/PostAProject/PostAProject";
import { clearSignupData, getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
import { withEmailPassword, getUserDetails, getUserInfo, userLogin } from "../Services/Authentication";
import { addAuthUser, onauthError } from "../redux/action/User/UserAction";
import Loader from "../Loader/Loader";
import { setUserDetail } from "../const";
import axiosInterceptor from "../AxiosInterceptor/axiosInterceptor";

class Home extends Component {
  formRef = React.createRef();
  categoryKey = 'home';

  state = {
    value: "",
    suggestions: [],
    selectedTag: '',
    categoryName: this.props.home.signup ? this.props.home.signup.categoryId : '',
    postCodeSuggestions: [],
    postCodeValue: this.props.home.postaproject ? this.props.home.postaproject.location : '',
    loading: false,
  };

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({ category: this.state.categoryName, postCodeValue: this.state.postCodeValue });
    }
  }

  postCodeIo = (e) => {
    axios.get(process.env.REACT_APP_POSTCODE_IO + `postcodes/${e}`).then(res => {
      this.formRef.current.setFieldsValue({ postCodeValue: e });
      this.setState({ postCodeValue: e, postCodeSuggestions: [] })
      this.props.dispatch(getPostAProjectData('latitude', res.data.result.latitude))
      this.props.dispatch(getPostAProjectData('longtitude', res.data.result.longitude))
      this.props.dispatch(getPostAProjectData('location', res.data.result.admin_county ? res.data.result.admin_county : res.data.result.country))
    });
  }

  getLocation() {
    axios.get(`https://freegeoip.app/json/`).then(res => {
      this.setState({ postCodeValue: res.data.city + " " + res.data.region_name }, () => {
        this.formRef.current.setFieldsValue({ postCodeValue: res.data.city + " " + res.data.region_name });
        this.props.dispatch(getPostAProjectData('latitude', res.data.latitude))
        this.props.dispatch(getPostAProjectData('longtitude', res.data.longitude))
        this.props.dispatch(getPostAProjectData('location', res.data.city))
      })
    }).catch(err => {
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
      selectedTag: tagName,
    })
    this.props.dispatch(getAllCompanyDetails('categoryId', categoryId));
    this.props.dispatch(getAllCompanyDetails('categoryName', categoryName));
    this.props.dispatch(getAllCompanyDetails('tagId', tagSelected));
    this.props.dispatch(getAllCompanyDetails('tagName', tagName));
  };

  getOnlyCategory = (e) => {
    this.formRef.current.setFieldsValue({ category: e.categoryName });
    this.setState({ suggestions: [], value: `${e.categoryName}`, categoryName: e.categoryName })
    this.props.dispatch(getAllCompanyDetails('categoryId', e.categoryId));
    this.props.dispatch(getAllCompanyDetails('categoryName', e.categoryName));
  };

  sendToPostAProject = (data) => {
    this.props.dispatch(getAllCompanyDetails('categoryId', data.id));
    this.props.dispatch(getAllCompanyDetails('categoryName', data.title));
    this.categoryKey = 'home-popup';
    this.toggleModalForPopUp(data.id)
  }

  render() {

    const { suggestions, postCodeSuggestions } = this.state

    const data = [
      {
        title: 'Web Design/Dev',
        image: require(`../assets/images/HomeIcons/1.png`),
        id: 14
      },
      {
        title: 'Digital Marketing',
        image: require('../assets/images/HomeIcons/2.png'),
        id: 10
      },
      {
        title: 'Social Media Marketing',
        image: require('../assets/images/HomeIcons/3.png'),
        id: 11
      },
      {
        title: 'Social Media Management',
        image: require('../assets/images/HomeIcons/4.png'),
        id: 12
      },
      {
        title: 'SEO',
        image: require('../assets/images/HomeIcons/5.png'),
        id: 15
      },
      {
        title: 'Marketing Content / Copywriting',
        image: require('../assets/images/HomeIcons/6.png'),
        id: 18
      },
      {
        title: 'Video Production',
        image: require('../assets/images/HomeIcons/7.png'),
        id: 20
      },
      {
        title: 'Lead Generation',
        image: require("../assets/images/HomeIcons/leadGen.png"),
        id: 17
      }
    ]

    const onFinish = (values) => {
      localStorage.clear();
      this.props.dispatch(getPostAProjectData('current', 0));
      this.props.dispatch(clearSignupData());
      this.props.dispatch(clearAllData());
      this.props.dispatch(clearProjectData());
      this.setState({ loading: true });
      const formData = new FormData()
      formData.append('UserName', values.email)
      formData.append('Password', values.password)
      formData.append('RememberLogin', false)
      formData.append('ReturnUrl', "")
      // console.log("Success:", values);
      userLogin(formData).then(res => {
        if (res.status === 200) {
          withEmailPassword(values.email, values.password).then(res => {
            if (res.status === 200) {
              this.setState({ loggedIn: true }, () => {
                getUserInfo(res.data.access_token).then(userInfo => {
                  if (userInfo.status === 200) {
                    this.props.dispatch(getAllCompanyDetails('userInfo', userInfo.data));
                    localStorage.setItem('access_token', res.data.access_token)
                    localStorage.setItem('refresh_token', res.data.refresh_token)
                    userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
                    userInfo.data.roles = userInfo.data.roles[0]
                    setUserDetail(userInfo.data)
                    setTimeout(() => {
                      getUserDetails(res.data.access_token).then(userData => {
                        this.props.dispatch(addAuthUser('normalLogin', userData));
                        this.setState({ loading: false });
                        if (userInfo.data.roles === 'Seller') {
                          this.props.history.push('/seller')
                          return
                        } else {
                          this.props.history.push('/')
                        }
                      }).catch(err => {
                        this.setState({ loading: false });
                        this.props.dispatch(onauthError(err));
                      });
                    }, 2000);
                  } else {
                    this.props.history.push('/')
                  }
                }).catch(err => {
                  this.setState({ loading: false });
                  this.props.history.push('/')
                  // console.log('err => ', err);
                })
              })
            }
          }).catch(err => {
            this.setState({ loading: false });
          });
        } else if (res.response.status === 400) {
          this.setState({ loading: false })
          notification.open({
            message: 'Error',
            description: `${res.response.data}`
          });
        }
      }).catch(err => {
        this.setState({ loading: false });
        notification.open({
          message: 'Error',
          description: 'There was an error while fetching User Info!'
        });
      })
    };

    const onFinishFailed = () => {
      // console.log("Failed:", errorInfo);
    };

    const onToggle = () => {
      this.props.dispatch(getKey('home'));
      this.props.dispatch(getPostAProjectData('current', 0));
      this.setState({ showModal: true })
    }

    const onFinishFailedPost = () => { };

    return (
      <div>
        <div className="homepage-bg">
          <div className="bannerimg cover-image banner-1 cover-image sptb-3 sptb-tab bg-background2">
            <div className="header-text mb-0">
              <div className="container">
                <div className="text-center text-white mb-lg-5">
                  <h1 className="text-white">Compare and connect with marketing agencies</h1>
                </div>
                <div className="row">
                  <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                    <div className="search-background bg-transparent breadcrumb-search">
                      <Form onFinish={onToggle} ref={this.formRef}
                        onFinishFailed={onFinishFailedPost}>
                        <div className="form row no-gutters">
                          <div className="form-group col-xl-5 col-lg-4 col-md-4 col-sm-12 mb-0 accordion-search-sec">
                            <Form.Item name='category' rules={[{ required: true, message: "Please select a Category!" }]}>
                              <Input className="form-control input-lg br-tr-md-0 br-br-md-0" autoComplete={'off'}
                                placeholder="What service are you looking for?"
                                onChange={(e) => this.onChange(e, { newValue: e.target.value })} />
                            </Form.Item>
                            {suggestions.length > 0 &&
                              <Accordion defaultActiveKey="0">
                                <>
                                  {suggestions.map((o, index) => (
                                    <Card key={o.categoryId}>
                                      <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link"
                                          eventKey="0"
                                          onClick={() => this.getOnlyCategory(o)}>
                                          {o.categoryName ? o.categoryName : null}
                                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        </Accordion.Toggle>
                                      </Card.Header>
                                      {o.tags.length > 0 ?
                                        <>
                                          <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                              {o.tags ? o.tags.map((tag, index) =>
                                                <li key={tag.id} onClick={() => this.selectedTags(tag.id, tag.name, o.categoryName, o.categoryId)}>{tag.name}</li>
                                              ) : []}
                                            </Card.Body>
                                          </Accordion.Collapse></> :
                                        <Accordion.Collapse eventKey="0" className="d-none">
                                          <Card.Body> </Card.Body>
                                        </Accordion.Collapse>
                                      }
                                    </Card>
                                  ))}
                                </>
                              </Accordion>
                            }
                          </div>
                          <div
                            className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-0 post-code-sec">
                            <Form.Item name="postCodeValue" rules={[{ required: true, message: "Please enter your PostCode!" }]}>
                              <Input className="form-control input-lg br-tr-md-0 br-br-md-0"
                                placeholder="Enter your postcode" autoComplete={'off'}
                                onChange={(e) => this.postCodeSuggestions(e, { newValue: e.target.value })} />
                            </Form.Item>
                            {postCodeSuggestions.length > 0 &&
                              <ul>
                                {postCodeSuggestions.map((o, oi) =>
                                  <li key={oi} onClick={() => this.postCodeIo(o)}>
                                    {o ? o : []}
                                  </li>
                                )}
                              </ul>}
                            <img onClick={() => this.getLocation()}
                              src={require("../assets/images/svg/gps.svg")}
                              className="location-gps" alt="img" />
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-4 mb-0">
                            <Form.Item>
                              <Button htmlType="submit" className="postButton btn-lg btn-block br-tl-md-0 br-bl-md-0">
                                Post A Project
                              </Button>
                            </Form.Item>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.loading ? <Loader /> :
            <div className="sptb container">
              <div className="row">
                {!this.props.isLoggedIn ? (
                  <div className="col-lg-5 col-xl-4 col-md-12 d-block mx-auto">
                    <div className="single-page">
                      <div className="wrapper wrapper2">
                        <div className="p-4">
                          {/* <div className="p-4 mb-4"> */}
                          <h4 className="text-left font-weight-semibold fs-16 ml-3 mb-3">Login</h4>
                          {/* <h4 className="text-left font-weight-semibold fs-16 ml-3 mb-3">Login With</h4> */}
                          {/* <div className="btn-list d-sm-flex LinkedIn-btn">
                            <SignInLinkedIn />
                          </div> */}
                        </div>
                        {/* <hr className="divider" /> */}
                        <Form className="card-body" initialValues={{ remember: true }}
                          onFinish={onFinish} onFinishFailed={onFinishFailed}>
                          <div className="mail">
                            <label>E-Mail</label>
                            <Form.Item name="email" rules={[{
                              type: 'email', message: 'The input is not valid E-mail!'
                            }, { required: true, message: 'Please input your E-mail!' }]}>
                              <Input />
                            </Form.Item>
                          </div>
                          <div className="passwd">
                            <label>Password</label>
                            <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
                              <Input.Password />
                            </Form.Item>
                          </div>
                          <div className="remeber-password home-forgetpass">
                            <p className="mb-2">
                              <NavLink to="/forgot-password" onClick={() => this.props.history.push("/forgot-password")}
                                data-dismiss="modal"> Forgot Password
                              </NavLink>
                            </p>
                          </div>
                          {/* <hr className="my-5"></hr>
                          <div className="swticher-section">
                            <p className="mb-0">I am a :</p>
                            <label className="custom-switch">Buyer&nbsp;
                              <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                              <span className="custom-switch-indicator"></span>
                              <span className="custom-switch-description"> Seller</span>
                            </label>
                          </div>

                          <hr className="my-5"></hr> */}
                          <p className="text-dark mb-0"> Don't have account?
                            <NavLink to="sign-up/buyer" onClick={() => this.props.history.push("/sign-up/buyer")} className="text-primary ml-1" data-dismiss="modal">
                              Sign Up
                            </NavLink>
                          </p>
                          <Form.Item>
                            <Button type="primary" htmlType="submit"
                              className="login-submit mt-5">Login</Button>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </div>) : ("")}
                <div
                  className={!this.props.isLoggedIn ? "col-lg-7 col-md-12 col-sm-12 col-12 d-block mt-lg-0 mt-md-5"
                    : "col-xl-12 col-lg-12 col-md-12 col-sm-12"}>
                  <div className="job-category">
                    <div className="section-title center-block text-center">
                      <h1>Popular Marketing Services</h1>
                    </div>
                  </div>
                  <div className="item-all-cat center-block text-center education-categories">
                    <div className="row">
                      {data.map((d) => (
                        <div key={d.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
                          onClick={() => this.sendToPostAProject(d)}>
                          <div className="item-all-card text-dark text-center">
                            <div className="iteam-all-icon">
                              <img src={d.image} className="imag-service" alt="Cashier" />
                            </div>
                            <div className="item-all-text mt-3">
                              <h5 className="mb-0 text-body">{d.title} </h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
        <PostProject className="btn btn-lg btn-block btn-success br-tl-md-0 br-bl-md-0"
          isOpenModal={this.state.showModal} onClose={() => this.toggleModal(this.categoryKey)} />
      </div>
    );
  }

  postCodeSuggestions = (event, { newValue }) => {
    this.props.dispatch(getPostAProjectData('latitude', ''));
    this.props.dispatch(getPostAProjectData('longtitude', ''));
    this.props.dispatch(getPostAProjectData('location', ''));
    event.preventDefault()
    let suggestions = [];
    this.setState({ postCodeValue: newValue }, async () => {
      if (this.state.postCodeValue.length <= 0) {
        this.setState({ postCodeSuggestions: [] });
      } else {
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
  }

  onChange = (event, { newValue }) => {
    this.props.dispatch(getAllCompanyDetails('categoryId', null));
    this.props.dispatch(getAllCompanyDetails('categoryName', null));
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
          this.props.dispatch(getPostAProjectData('categoryTag', categoryTag))
          this.setState({ suggestions: resp.data ? resp.data : [] });
        } catch (err) {
          event.preventDefault();
        }
      }
    });
  };

  toggleModalForPopUp = (key) => {
    this.props.dispatch(getKey(this.categoryKey));
    if (this.state.showModal) {
      swal("Are you sure you want to Quit the process?", {
        buttons: { cancel: "No", catch: "Yes" },
        icon: "error",
      }).then((value) => {
        switch (value) {
          case "catch":
            this.setState({ showModal: false, value: [], postCodeValue: '' }, () => {
              this.props.dispatch(getPostAProjectData('current', 0));
              this.props.dispatch(clearSignupData());
              this.props.dispatch(clearAllData());
              this.props.dispatch(clearProjectData());
            });
            break;
          default:
            this.setState({ showModal: true });
        }
      });
    } else {
      this.setState({ showModal: true });
    }
    // this.setState({ showModal: true }, () => {
    //   this.props.dispatch(getPopUpCategoryKey(key))
    // });
  }

  toggleModal = (key) => {
    this.props.dispatch(getKey(key));
    if (this.state.showModal) {
      swal("Are you sure you want to Quit the process?", {
        buttons: { cancel: "No", catch: "Yes" },
        icon: "error",
      }).then((value) => {
        switch (value) {
          case "catch":
            this.setState({ showModal: false, value: [], postCodeValue: '' }, () => {
              this.props.dispatch(getPostAProjectData('current', 0));
              this.categoryKey = 'home';
              if (this.formRef) {
                this.formRef.current.setFieldsValue({ category: '', postCodeValue: '' });
              }
              this.props.dispatch(clearSignupData());
              this.props.dispatch(clearAllData());
              this.props.dispatch(clearProjectData());
            });
            break;
          default:
            this.setState({ showModal: true });
        }
      });
    }
  };

}

const mapStateToProps = (state) => {
  return {
    home: state,
    username: state.user.user,
    showModal: state.postaproject.showModal,
    isLoggedIn: localStorage.getItem('projectIdDashboard') ? false : state.user.isLoggedIn,
    categoryKey: state.category.categoryKey
  };
};

export default connect(mapStateToProps)(Home);