import React, { Component } from 'react'
import Image from 'react-random-image'
import * as moment from "moment";
import { adminEditNews } from '../../AdminServices/AdminNews';
import { newsDetails } from '../../../Services/NewsService';
import { Typography, Form, Checkbox, notification } from 'antd';
export default class AdminNewsDetails extends Component {

  state = {
    newsEditable: false,
    title: '',
    description: '',
    published: false,
    createdDate: ''
  };

  componentDidMount() {
    const idOfNews = this.props.match.params.id;
    newsDetails(idOfNews).then(res => {
      console.log('res admin news details => ', res);
      this.setState({
        title: res.data.title,
        description: res.data.description,
        createdDate: res.data.createdDate,
        published: res.data.published
      })
    }).catch(err => {
      console.log('err => ', err);
    });
  }

  editNewsDetails = () => {
    const values = {
      id: parseInt(this.props.match.params.id),
      title: this.state.title,
      description: this.state.description,
      published: this.state.published
    };
    adminEditNews(values).then(res => {
      console.log('res => ', res);
      if (res.status === 200) {
        notification.open({
          message: 'Success',
          description: 'News Updated Succesfully!'
        });
      }
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while updating News!'
      });
    })
  }

  cancelNewsChanges() {
    console.log('cancel')
  }

  newNewsDetails = (key, event) => {
    if (key === 'title') {
      console.log('event => ', event);
      this.setState({ title: event })
      console.log('this.state.title => ', this.state.title);
    } else if (key === 'description') {
      this.setState({ description: event })
    }
  }

  getCheckBoxValue = (e) => {
    this.setState({ published: e });
  }

  render() {
    return (
      <div className="sptb">
        <div className="container">
          <div className="row">
            <Form>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="wideget-user">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="wideget-user-desc d-sm-flex">
                            <div className="wideget-user-img mr-5 noborder"><Image width={150} height={150} /> </div>
                            <div className="user-wrap wideget-user-info"> <a href={() => false} className="text-dark">
                              <h4 className="font-weight-semibold mb-2">
                                <Typography.Text editable={{ onChange: e => { this.newNewsDetails('title', e) } }}>{this.state.title}</Typography.Text>
                              </h4>
                              <div className="form-check">
                                <Checkbox name="Active" checked={this.state.published ? true : false} onChange={(e) => this.getCheckBoxValue(e.target.checked)} />
                                <label className="form-check-label">Active</label>
                              </div>
                            </a>
                              <h6 className="text-muted mb-1"><span className="text-dark">Created Date : </span> {moment(this.state.createdDate).format('MM-DD-YYYY')}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="tab-content">
                  <div className="tab-pane active" id="tab-5">
                    <div className="card mb-0 border-0">
                      <div className="card-body">
                        <div className="profile-log-switch">
                          <div className="row profie-img">
                            <div className="col-md-12">
                              <div className="media-heading">
                                <h3 className="card-title mb-3 mt-5 font-weight-bold">Description</h3>
                              </div>
                              <Typography.Text editable={{ onChange: e => { this.newNewsDetails('description', e) } }}>{this.state.description}</Typography.Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-success" onClick={() => this.editNewsDetails()} type="submit">Update Changes</button>
              <button className="btn btn-danger" onClick={() => this.cancelNewsChanges()}>Cancel Changes</button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
