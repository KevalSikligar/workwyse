import React, { Component } from 'react';
import { adminAddNews } from '../../AdminServices/AdminNews';
import { Link } from 'react-router-dom';
import { Form, Input, notification, Button, Checkbox } from 'antd';
export default class AdminNews extends Component {

  state = {
    title: '',
    description: '',
    published: false
  }

  getCheckBoxValue = (e) => {
    this.setState({ published: e })
  }

  render() {

    const { TextArea } = Input;

    const formRef = React.createRef();

    const addNewAdminNews = (value) => {
      const data = {
        title: value.title,
        description: value.description,
        published: this.state.published
      };
      adminAddNews(data).then(res => {
        if (res.status === 200) {
          formRef.current.resetFields();
          notification.open({
            message: 'Success',
            description: 'News Added Succesfully!'
          });
        }
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: 'There was an error while adding news!'
        });
      });
    }

    return (
      <div>
        <h1>News</h1>
        <div className="app-content">
          <div className="side-app">
            <div className="page-header">
              <ol className="breadcrumb">
                <Link className="breadcrumb-item" to="/admin-dashboard">Settings</Link>
                <Link className="breadcrumb-item active" aria-current="page" to="/admin-news-list">Admin News List</Link>
                {/* <Link className="breadcrumb-item active" aria-current="page" to={() => false}>Admin News List</Link> */}
              </ol>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Add New News</div>
                  </div>
                  <div className="card-body">
                    <p>Create a new news and add them to this site</p>
                    <Form onFinish={addNewAdminNews} ref={formRef}>
                      <div className="form-group ">
                        <div className="row">
                          <div className="col-md-9">
                            <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please input your title!' }]}>
                              <Input />
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row">
                          <div className="col-md-9">
                            <Form.Item label="Description" name="description"
                              rules={[{ required: true, message: 'Please enter a description!' }]}>
                              <TextArea rows={5} placeholder="Please provide a description with any specifications" allowClear />
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row">
                          <div className="col-md-3">
                            <label className="form-label mt-2" id="inputEmail3"> Published</label>
                          </div>
                          <div className="col-md-9">
                            <Checkbox name="published" onChange={(e) => this.getCheckBoxValue(e.target.checked)} />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Form.Item>
                          <Button type="primary" htmlType="submit">Add News</Button>
                        </Form.Item>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    )
  }
}
