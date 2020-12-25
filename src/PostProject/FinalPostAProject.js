import React, { Component } from 'react'
import { Radio, Form, notification, Button } from 'antd';
import { getPostAProjectData, sendProjectToDashboard, clearAllData, clearProjectData } from '../redux/action/PostAProject/PostAProject';
import { connect } from 'react-redux';
import { projectHireType, postAProject } from '../Services/PostAProjectService';
import { get } from 'lodash';
import { withRouter } from 'react-router-dom';
import { clearSignupData } from "../redux/action/SignUp/SignUpAction";
import { getUserDetail } from '../const';

class FinalPostAProject extends Component {

  formRef = React.createRef();
  state = {
    hireType: [],
  }

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        projectHireType: this.props.finalPostAProject.postaproject.projectHireTypeId
      });
    }

    projectHireType().then(res => {
      this.setState({ hireType: res.data })
    }).catch(() => {
      notification.open({
        message: 'Error',
        description: 'There was en error while fetching Project Hire Type!'
      })
    });
  }

  changeHandler = (key, event) => {
    this.props.dispatch(getPostAProjectData(key, event));
  }

  sendPostAProject = () => {
    try {
      this.formRef.current.validateFields().then(res => {
        const data = {
          id: 0,
          buyerId: getUserDetail('companyId') ? parseInt(getUserDetail('companyId')) : '',
          categoryId: get(this.props.finalPostAProject.signup, "categoryId", null),
          tagId: get(this.props.finalPostAProject.signup, "tagId", null),
          projectTypeId: get(this.props.finalPostAProject.postaproject, "projectTypeId", null),
          projectHireTypeId: get(this.props.finalPostAProject.postaproject, "projectHireTypeId", null),
          projectStatusId: 1,
          industryId: get(this.props.finalPostAProject.postaproject, "industryId", null),
          paid: true,
          title: get(this.props.finalPostAProject.postaproject, "title", null),
          description: get(this.props.finalPostAProject.postaproject, "description", null),
          uploadLink: get(this.props.finalPostAProject.signup, "uploadLink[0].link", null),
          oneOffRate: get(this.props.finalPostAProject.postaproject, "oneOffRate", null),
          monthlyRate: get(this.props.finalPostAProject.postaproject, "monthly", null),
          hourlyStartRate: get(this.props.finalPostAProject.postaproject, "hourlyStartRate", null),
          hourlyEndRate: get(this.props.finalPostAProject.postaproject, "hourlyEndRate", null),
          startDate: get(this.props.finalPostAProject.postaproject, "startDate", null),
          endDate: get(this.props.finalPostAProject.postaproject, "endDate", null),
          distance: get(this.props.finalPostAProject.postaproject, "distance", 50),
          latitude: get(this.props.finalPostAProject.postaproject, "latitude", null),
          longitude: get(this.props.finalPostAProject.postaproject, "longtitude", null),
          location: get(this.props.finalPostAProject.postaproject, "location", null),
          questionnaires: get(this.props.finalPostAProject.postaproject, "questionnaires", null),
        }
        postAProject(data).then(res => {
          if (res.status === 200) {
            this.props.dispatch(sendProjectToDashboard(res.data.id));
            notification.open({
              message: 'Success',
              description: 'Project Succesfully Created. You will now be redirected to buyer dashboard page.'
            });
            this.props.history.push(`/dashboard-buyer/${getUserDetail('companyId') ? getUserDetail('companyId') : localStorage.getItem('buyerId')}/${res.data.id}`)
            this.props.dispatch(clearSignupData());
            this.props.dispatch(clearAllData());
            this.props.dispatch(clearProjectData());
            this.props.closeModal && this.props.closeModal();
          }
        }).catch((err) => {
          this.props.closeModal && this.props.closeModal();
          console.log('postAProject err =>', err)
          notification.open({
            message: 'Error final step',
            description: 'There was an error while creating buyer account!'
          });
        })
      }).catch(Err => {
        // console.log('Err =>', Err)
        if (!Err.values.projectHireType) {
          // alert("invalid form")
        }
      });
    } catch (e) {
      console.log('POST project e => ', e);
    }
  }

  render() {

    return (
      <div className="post_project_popup_4">
        <div className="row">
          <div className="col-sm-12 col-md-12 post-project-radio">
            <label className="form-label text-dark fs-16">How likely are you to hire?</label>
            <Form ref={this.formRef}>
              <div className="custom-controls-stacked rdb-steps-1">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 datepicker-w-auto">
                    <Form.Item name="projectHireType" rules={[{ required: true, message: 'Please choose a Project Type!' }]}>
                      <Radio.Group className="mt-2"
                        onChange={(e) => this.changeHandler("projectHireTypeId", e.target.value)}>
                        <Radio value={1}>Ready to Hire</Radio>
                        <Radio value={2}>Very likely</Radio>
                        <Radio value={3}>I'm doing my research</Radio>
                        <Radio value={4}>I'm looking for quotes</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                </div>
              </div>

              <div className="model-popup-wizard">
                <Form.Item>
                  <div className="ml-4">
                    <Button onClick={this.props.previous} className="btn-prev"> Previous</Button>
                    {this.props.finalPostAProject.user.isLoggedIn ?
                      <Button type="primary" className="btn btn-primary" onClick={() => this.sendPostAProject()}>  Finish </Button> :
                      <Button type="primary" onClick={this.props.next}> Next </Button>
                    }
                  </div>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state => ', state);

  return {
    finalPostAProject: state
  }
}

export default withRouter(connect(mapStateToProps)(FinalPostAProject));