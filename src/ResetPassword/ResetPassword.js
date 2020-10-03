import React, { Component } from 'react'

import { Form, Input, Button } from 'antd';

export default class ResetPassword extends Component {

    state = {
        email: "",
        newPassword: ""
    }

    render() {

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="newPassword"
                        rules={[{ required: true, message: 'Please enter your new password!' }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item><Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
