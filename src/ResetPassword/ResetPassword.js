import React, { Component } from 'react'
import { Form, Input, Button, notification } from 'antd';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { resetPassword } from '../Services/CommonServices';
import { withRouter } from 'react-router-dom';

class ResetPassword extends Component {

  componentDidMount() {
    localStorage.clear()
  }

  render() {
    const onFinish = values => {
      // console.log('Success:', values);
      const data = {
        email: this.props.match.params.email,
        newPassword: values.password,
        token: this.props.match.params.token
      }
      resetPassword(data).then(res => {
        if (res.status === 200) {
          notification.open({
            message: 'Success',
            description: 'Password Reset Successfully! You will now be redirected to Home Page!'
          });
          this.props.history.push('/home')
        } else if (res.response.status === 400) {
          notification.error({
            message: 'Error',
            description: 'The new password field cannot be empty!'
          })
        }
        // console.log('res => ', res);
      }).catch(err => {
        notification.error({
          message: 'Error',
          description: 'There was an error while resetting the password!'
        })
        // console.log('res => ', err);
      });
    };

    const onFinishFailed = errorInfo => { };

    const pathList = [{ to: "/reset-password", title: "Reset Password" }];

    return (
      <div>
        <BreadCrumbs title="Reset Password" breadcrumbssegment={pathList} />
        <section className="sptb Forgot-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                <div className="single-page w-100 p-0">
                  <div className="wrapper wrapper2">
                    <h3 className="mt-5 mb-0">Reset password</h3>
                    <Form className="card-body" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete={"off"}>
                      <div className="password">
                        <label>Password</label>
                        <Form.Item name="password" rules={[
                          { required: true, message: 'Please input your password!' },
                          { min: 8, message: 'Password must be minimum 8 characters.' },
                          { type: "regexp", pattern: new RegExp(/^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/), message: "Wrong format!" }
                        ]} hasFeedback>
                          <Input.Password autoComplete={"off"} />
                        </Form.Item>
                      </div>
                      <div className="password">
                        <label>Confirm Password</label>
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
                          <Input.Password autoComplete={"off"}/>
                        </Form.Item>
                        <Form.Item>
                          <Button type="primary" htmlType="submit">Reset Password</Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(ResetPassword);