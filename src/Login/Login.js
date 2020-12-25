import React from "react";
import { NavLink, withRouter } from "react-router-dom";
// import SignInLinkedIn from "../SignUp/SignInLinkedIn";
import { Form, Input, Button, notification, } from "antd";
import { withEmailPassword, getUserDetails, getUserInfo, userLogin } from "../Services/Authentication";
import { addAuthUser, onauthError } from "../redux/action/User/UserAction";
import { connect } from "react-redux";
import { getAllCompanyDetails, clearSignupData } from "../redux/action/SignUp/SignUpAction";
import Loader from "../Loader/Loader";
import { Modal } from "antd";
import { setUserDetail } from "../const";
import { getPostAProjectData, clearAllData, clearProjectData } from "../redux/action/PostAProject/PostAProject";

class Login extends React.Component {

  state = {
    loggedIn: false,
    loading: false
  }

  render() {

    const { isOpenModalLogin, onCloseLogin } = this.props;

    const onFinish = (values) => {
      localStorage.clear();
      this.props.dispatch(getPostAProjectData('current', 0));
      this.props.dispatch(clearSignupData());
      this.props.dispatch(clearAllData());
      this.props.dispatch(clearProjectData());
      this.setState({ loading: true });
      setTimeout(() => {
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
                          this.props.onCloseLogin()
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
      }, 2000);
    };

    const onFinishFailed = () => { };
    return (
      <>
        <Modal visible={isOpenModalLogin} centered onCancel={onCloseLogin}>
          <Form className="card-body" name="basic" initialValues={{ remember: true, }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <div className="mail">
              <label>E-Mail</label>
              <Form.Item name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!', }, { required: true, message: 'Please input your E-mail!' }]}>
                <Input />
              </Form.Item>
            </div>
            <div className="passwd">
              <label>Password</label>
              <Form.Item name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
                <Input.Password />
              </Form.Item>
            </div>

            <div className="forget-text">
              <p className="mb-2">
                <NavLink to="/forgot-password" onClick={() => this.props.history.push("/forgot-password")} data-dismiss="modal">Forgot Password </NavLink>
              </p>
            </div>
            <p className="text-dark mb-0">Don't have account?
                  <NavLink to="sign-up/buyer" onClick={() => this.props.history.push("/sign-up/buyer")} className="text-primary ml-1" data-dismiss="modal">Sign Up </NavLink>
            </p>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-submit mt-5">{this.state.loading ? `Login..` : `Login`}</Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state
  }
}

export default withRouter(connect(mapStateToProps)(Login));