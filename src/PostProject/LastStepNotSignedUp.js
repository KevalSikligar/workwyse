
import React from 'react'
import { Form, Input, Select, Button, notification } from 'antd';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { getPostAProjectData, sendProjectToDashboard, clearAllData, clearProjectData } from '../redux/action/PostAProject/PostAProject';
import { get } from 'lodash';
import { postBuyer } from '../Services/BuyerService';
import { withEmailPassword } from '../Services/Authentication';
import { postAProject } from '../Services/PostAProjectService';
import { withRouter } from 'react-router-dom';
import { addAuthUser } from '../redux/action/User/UserAction';
import { clearSignupData } from '../redux/action/SignUp/SignUpAction';
class LastStepNotSignedUp extends React.Component {

  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.changeHandler = debounce(this.changeHandler, 800);
  };

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        foreName: this.props.category.postaproject.foreName,
        surName: this.props.category.postaproject.surName,
        companySize: this.props.category.postaproject.companySize,
        operationScale: this.props.category.postaproject.operationScale,
        email: this.props.category.postaproject.email,
        phoneNumber: this.props.category.postaproject.phoneNumber,
        password: this.props.category.postaproject.password
      });
    }
  }

  changeHandler = (key, event) => {
    this.props.dispatch(getPostAProjectData(key, event));
  }

  onFinish = async () => {
    try {
      await this.formRef.current.validateFields().then(res => {
        const data = {
          id: 0,
          businessType: 1,
          companyType: 1,
          companySize: get(this.props.category.postaproject, "companySize", ""),
          operationScale: get(this.props.category.postaproject, "operationScale", ""),
          distance: 50,
          latitude: get(this.props.category.postaproject, "latitude", null),
          longitude: get(this.props.category.postaproject, "longtitude", null),
          active: true,
          industryId: get(this.props.category.postaproject, "industryId", null),
          companyUserId: 0,
          userDto: {
            id: '',
            foreName: get(this.props.category.postaproject, "foreName", ""),
            surName: get(this.props.category.postaproject, "surName", ""),
            phoneNumber: get(this.props.category.postaproject, "phoneNumber", ""),
            email: get(this.props.category.postaproject, "email", ""),
            password: get(this.props.category.postaproject, "password", "confirmPassword"),
            photoPath: null,
          },
        };
        postBuyer(data).then((res) => {
          if (res.status === 200) {
            localStorage.setItem('buyerId', res.data.id);
            withEmailPassword(this.props.category.postaproject.email, this.props.category.postaproject.password).then(resWith => {
              if (resWith.status === 200) {
                this.sendPostAProject(resWith.data.access_token)
                localStorage.setItem('access_token', resWith.data.access_token)
              }
              return
            });
          } else if (res.response.status === 400) {
            notification.error({
              message: 'Error',
              description: `${res.response.data}`
            });
            return
          }
        }).catch((err) => {
          notification.open({
            message: 'Error',
            description: 'There was an error while creating buyer account!'
          });
        });
      }).catch(Err => {
        if (!Err) {
          // alert("invalid form")
        }
      });
    } catch (e) {
    }
  }

  sendPostAProject = () => {
    try {
      this.formRef.current.validateFields();
      const data = {
        id: 0,
        buyerId: localStorage.getItem('buyerId') ? parseInt(localStorage.getItem('buyerId')) : "",
        categoryId: get(this.props.category.signup, "categoryId", null),
        tagId: get(this.props.category.signup, "tagId", null),
        projectTypeId: get(this.props.category.postaproject, "projectTypeId", null),
        projectHireTypeId: get(this.props.category.postaproject, "projectHireTypeId", null),
        projectStatusId: 1,
        industryId: get(this.props.category.postaproject, "industryId", null),
        paid: true,
        title: get(this.props.category.postaproject, "title", null),
        description: get(this.props.category.postaproject, "description", null),
        uploadLink: get(this.props.category.signup, "uploadLink[0].link", null),
        oneOffRate: get(this.props.category.postaproject, "oneOffRate", null),
        monthlyRate: get(this.props.category.postaproject, "monthly", null),
        hourlyStartRate: get(this.props.category.postaproject, "hourlyStartRate", null),
        hourlyEndRate: get(this.props.category.postaproject, "hourlyEndRate", null),
        startDate: get(this.props.category.postaproject, "startDate", null),
        endDate: get(this.props.category.postaproject, "endDate", null),
        distance: 50,
        latitude: get(this.props.category.postaproject, "latitude", null),
        longitude: get(this.props.category.postaproject, "longtitude", null),
        location: get(this.props.category.postaproject, "location", null),
        questionnaires: get(this.props.category.postaproject, "questionnaires", null),
      }
      postAProject(data).then(res => {
        if (res.status === 200) {
          this.props.dispatch(addAuthUser('Buyer', ''))
          this.props.dispatch(sendProjectToDashboard(res.data.id));
          localStorage.setItem('projectIdDashboard', res.data.id)
          notification.open({
            message: 'Success',
            description: 'Project Succesfully Created. You will now be redirected to buyer dashboard page.'
          });
          this.props.history.push(`/dashboard-buyer/${localStorage.getItem('buyerId')}/${res.data.id}`)
          this.props.dispatch(clearAllData());
          this.props.dispatch(clearProjectData());
          this.props.dispatch(clearSignupData());
          return true;
        } else if (res.response.status === 400) {
          this.props.closeModal && this.props.closeModal();
          notification.open({
            message: 'Error',
            description: `${res.response.data}`
          });
          return true;
        }
      }).catch((err) => {
        this.props.closeModal && this.props.closeModal();
        notification.open({
          message: 'Error',
          description: 'There was an error while creating buyer account!'
        });
      })
    } catch (e) {
      this.props.closeModal && this.props.closeModal();
      // console.log('e => ', e);
    }
  }

  changeHandlerNameEmail = (key, event) => {
    this.props.dispatch(getPostAProjectData(key, event));
  }

  render() {

    const companySize = [
      { id: 1, title: '1 - 10' },
      { id: 2, title: '11 - 50' },
      { id: 3, title: '51 - 100' },
      { id: 4, title: '101 - 200' },
      { id: 5, title: '201 - 500' },
      { id: 6, title: '500 +' },
    ];

    const companyScale = [
      { id: 1, title: 'Local' },
      { id: 2, title: 'National' },
      { id: 3, title: 'Global' }
    ];

    const onFinishFailed = () => { };

    return (

      <div className="post_project_popup_5">
        <div className="mb-0">
          <Form ref={this.formRef} autoComplete={'off'} onFinishFailed={onFinishFailed}>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label asterisk">First Name</label>
                  <Form.Item name="foreName"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}>
                    <Input onBlur={(e) => this.changeHandlerNameEmail("foreName", e.target.value)} />
                  </Form.Item>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label asterisk">Last Name</label>
                  <Form.Item name="surName"
                    rules={[{ required: true, message: 'Please input your Last Name!' }]}>
                    <Input onChange={(e) => this.changeHandler("surName", e.target.value)} />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label asterisk">Company Size</label>
                  <Form.Item name="companySize" rules={[{ required: true, message: 'Please select your company size!' }]}>
                    <Select className="form-ant-control" onChange={(e) => this.changeHandler('companySize', e)}>
                      {companySize.map(category => (
                        <Select.Option key={category.id} value={category.id}>{category.title}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label asterisk">What is the scale of your operation(s)?</label>
                  <Form.Item name="operationScale" rules={[{ required: true, message: 'Please select your operation scale!' }]}>
                    <Select className="form-ant-control" onChange={(e) => this.changeHandler('operationScale', e)}>
                      {companyScale.map(category => (
                        <Select.Option key={category.id} value={category.id}>{category.title}</Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group asterisk">
                  <label className="form-label asterisk">Email</label>
                  <Form.Item name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your E-mail!', }]}>
                    <Input onBlur={(e) => this.changeHandlerNameEmail("email", e.target.value)} />
                  </Form.Item>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label asterisk">Phone Number</label>
                  <Form.Item name="phoneNumber" rules={[{ required: true, message: 'Please input your phone number!' }]}>
                    <Input onChange={(e) => this.changeHandler("phoneNumber", e.target.value)} />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label className="form-label asterisk">Password</label>
                  <Form.Item name="password" rules={[
                    { required: true, message: 'Please input your password!' },
                    { min: 8, message: 'Password must be minimum 8 characters.' },
                    { type: "regexp", pattern: new RegExp(/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/), message: "Wrong format!" }
                  ]} hasFeedback>
                    <Input.Password onChange={(e) => this.changeHandler("password", e.target.value)} />
                  </Form.Item>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
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
            </div>
            <div className="model-popup-wizard">
              <Form.Item>
                <div className="">
                  <Button onClick={this.props.previous} className="btn-prev"> Previous</Button>
                  <Button type="primary" className="btn btn-primary" onClick={() => this.onFinish()}> {'Verify and Post Project'}</Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { category: state }
}

export default withRouter(connect(mapStateToProps)(LastStepNotSignedUp))