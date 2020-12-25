import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Form, Input, Button, notification } from "antd";
import Login from "../Login/Login";
import { forgotPassword } from "../Services/CommonServices";

export default class ForgotPassword extends React.Component {

  render() {

    const pathList = [{ to: "/forgot-password", title: "Forgot Password" }];

    const onFinish = (values) => {
      forgotPassword({ email: values.email }).then(res => {
        if (res.status === 200) {
          notification.open({
            message: 'Error',
            description: `An email has been sent on ${values.email}. Please check your email!`
          });
        } else if (res.response.status === 400) {
          notification.open({
            message: 'Error',
            description: `User with email ${values.email} does not exist!`
          });
        }
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: `There was an error while sending email! Please try again!`
        });
      });
    };

    const onFinishFailed = () => { };

    return (
      <div>
        <BreadCrumbs title="Forgot Password" breadcrumbssegment={pathList} />
        <section className="sptb Forgot-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                <div className="single-page w-100 p-0">
                  <div className="wrapper wrapper2">
                    <h3 className="mt-5 mb-0">Forgot password</h3>
                    <div className="card-body">
                      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <div className="mail">
                          <label>E-mail</label>
                          <Form.Item name="email" rules={[{
                            type: 'email', message: 'The input is not valid E-mail!',
                          }, { required: true, message: 'Please input your E-mail!' }]} >
                            <Input />
                          </Form.Item>
                        </div>
                        <Form.Item>
                          <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                      </Form>
                      <div className="text-center text-dark mb-0">Forget it,
                      <span data-toggle="modal" data-target="#ModalLogin" className="forgot-link">send me back </span>to the sign in.
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Login id="ModalLogin"></Login>
      </div>
    );
  }
}
