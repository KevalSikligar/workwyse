import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { getProjectByProjectId } from '../Services/PostAProjectService';
import { notification } from 'antd';

export default class MyPostsDetails extends React.Component {

  state = {
    projectDetails: [],
    questions: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    let anArray = [];
    getProjectByProjectId(parseInt(this.props.match.params.projectId)).then(res => {
      this.setState({ projectDetails: res.data })
      if (res.data.questionnaires.length === 1) {
        this.setState({ questions: res.data.questionnaires[0] })
      } else {
        res.data.questionnaires.map(data => {
          anArray.push(data)
          this.setState({ questions: anArray })
        })
      }
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching your Posts Details!'
      })
      // console.log('err => ', err);
    });
  }

  render() {

    const pathList = [
      { to: "/posts-details", title: "My Posts Details" }
    ];

    return (
      <div>
        <BreadCrumbs title="My Posts Details" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12">
              <SideNav />
            </div>
            <div className="col-xl-9 col-lg-9 sptb">
              <div className="custom-card">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="card-body pb-0">
                      <div className="card mb-4 box-shadow-none">
                        <div className="card-body">
                          <div className="buyer-desc custom_text_section">
                            <div className="title_sec_q">
                              {this.state.projectDetails.title &&
                                <h3 className="title_s">
                                  {this.state.projectDetails.title}
                                </h3>}
                              {this.state.projectDetails.categoryName &&
                                <h4 className="sub_text">
                                  {this.state.projectDetails.categoryName}
                                </h4>}
                              {this.state.projectDetails.tagName &&
                                <h4 className="sub_text">{this.state.projectDetails.tagName}</h4>}
                            </div>
                            {this.state.projectDetails && this.state.projectDetails.monthlyRate &&
                              <div className="card_answer">
                                <div className="icons font-weight-semibold text-body">
                                  <label>Monthly Rate : </label>
                                  <span>{this.state.projectDetails.monthlyRate === 1 ? "£250 - £1000" : '' || this.state.projectDetails.monthlyRate === 2 ? "£1000 - £2000" : '' || this.state.projectDetails.monthlyRate === 3 ? "£2000 - £5000" : '' || this.state.projectDetails.monthlyRate === 4 ? "£5,000 - £10,000+" : ''}</span>
                                </div>
                              </div>}
                            {this.state.projectDetails && this.state.projectDetails.oneOffRate &&
                              <div className="card_answer">
                                <div className="icons font-weight-semibold text-body">
                                  <label>One Off Rate : </label>
                                  <span>
                                    {this.state.projectDetails.oneOffRate === 1 ? "£250 - £1000" : '' || this.state.projectDetails.oneOffRate === 2 ? "£1000 - £2000" : '' || this.state.projectDetails.oneOffRate === 3 ? "£2000 - £5000" : '' || this.state.projectDetails.oneOffRate === 4 ? "£5,000 - £10,000+" : ''}
                                  </span>
                                </div>
                              </div>}
                            {this.state.projectDetails && this.state.projectDetails.hourlyStartRate &&
                              <div className="card_answer">
                                <div className="icons font-weight-semibold text-body">
                                  <label>Hourly Start Rate : </label>
                                  <span>{'£' + " " + this.state.projectDetails.hourlyStartRate}</span>
                                </div>
                              </div>}
                            {this.state.projectDetails && this.state.projectDetails.hourlyEndRate &&
                              <div className="card_answer">
                                <div className="icons font-weight-semibold text-body">
                                  <label>Hourly End Rate : </label>
                                  <span>{'£' + " " + this.state.projectDetails.hourlyEndRate} </span>
                                </div>
                              </div>}
                            <div className="card_answer">
                              {this.state.questions.length > 1 ? this.state.questions.map(res => (
                                <>
                                  <p className="question">{res.question}</p>
                                  <p className="answer">{res.answer}</p>
                                </>
                              )) : <>
                                  <p className="question">{this.state.questions && this.state.questions.question}</p>
                                  <p className="answer">{this.state.questions.answer}</p>
                                </>
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
