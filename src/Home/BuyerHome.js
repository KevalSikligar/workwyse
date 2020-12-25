import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { buyersHierarchy } from '../Services/BuyerService';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { postBuyerProjectRequest } from '../Services/BuyerService';
import { getProjectByProjectId } from '../Services/PostAProjectService';
import { Link, withRouter } from 'react-router-dom';
import { getUserDetail } from '../const';
import { getPostAProjectData, clearAllData, clearProjectData } from '../redux/action/PostAProject/PostAProject';
import { clearSignupData } from '../redux/action/SignUp/SignUpAction';
import { logout } from '../redux/action/User/UserAction';
class BuyerHome extends React.Component {

  state = {
    buyerProjectDetails: [],
    loading: false,
    categoryName: '',
    tagName: ''
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      getProjectByProjectId(this.props.match.params.projectId).then(res => {
        this.setState({
          categoryName: res.data.categoryName,
          tagName: res.data.tagName,
          loading: false
        });
      }).catch((err) => {
        this.setState({ loading: false })
        notification.open({
          message: 'Error',
          description: 'There was an error while fetching Project Details!'
        });
      })
    });
    buyersHierarchy(getUserDetail('companyId') ? getUserDetail('companyId') : localStorage.getItem('buyerId'), parseInt(this.props.match.params.projectId)).then(res => {
      console.log('res => ', res);

      if (res.status === 200) {
        this.setState({ buyerProjectDetails: res.data, loading: false })
      }
    }).catch(() => {
      this.setState({ loading: false });
      this.props.history.push('/home');
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching Sellers Data!'
      });
    });
  }

  sendRequestToSeller(sellerId) {
    if (localStorage.getItem('buyerId') && localStorage.getItem('projectIdDashboard')) {
      notification.info({
        message: 'Information',
        description: 'Please confirm your email to send a request to the seller'
      });
      return;
    }
    const data = {
      id: 0,
      projectId: parseInt(this.props.match.params.projectId),
      companyId: sellerId,
      premium: true,
      requestType: 1,
      expired: false,
      leadStatus: localStorage.getItem('paid') === true ? 2 : 1
    }
    postBuyerProjectRequest(data).then(res => {
      if (res.status === 200) {
        notification.open({
          message: 'Success',
          description: 'Project request successfully made. Seller has been notified!'
        });
      } else if (res.response.status === 400) {
        notification.open({
          message: 'Error',
          description: `${res.response.data}`
        });
      }
    }).catch((err) => {
      notification.open({
        message: 'Error',
        description: 'There was an error while notifying a seller!'
      })
    })
  }

  componentWillUnmount() {
    if (localStorage.getItem('buyerId') && localStorage.getItem('projectIdDashboard')) {
      this.props.dispatch(logout());
      this.props.dispatch(getPostAProjectData('current', 0))
      this.props.dispatch(clearSignupData());
      this.props.dispatch(clearAllData());
      this.props.dispatch(clearProjectData());
      window.location.reload()
    }
  }

  render() {

    const pathList = [{ title: "Buyer Dashboard" }];

    return (

      <div>
        {this.state.loading ? <Loader /> : <>
          <BreadCrumbs title="Buyer Dashboard" breadcrumbssegment={pathList} />
          <section className="sptb">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className=" mb-lg-0">
                    <div className="">
                      {this.state.buyerProjectDetails && this.state.buyerProjectDetails.length > 0 ?
                        <div className="item2-gl">
                          <div className="section-title center-block text-center">
                            <h3>Find Sellers</h3>
                          </div>
                          <div className="tab-content company-list">
                            <div className="tab-pane active" id="tab-11">
                              <div className="row">
                                {this.state.buyerProjectDetails.map(projectDetails => (
                                  <div className="col-lg-6 col-md-12">
                                    <div className="card overflow-hidden br-0 overflow-hidden">
                                      <div className="d-sm-flex card-body p-3">
                                        <div className="item-card9 mt-3 mt-md-5 mr-sm-4">
                                          <h4 className="font-weight-normal">{projectDetails.companyName && projectDetails.companyName}</h4>
                                          <h4 className="font-weight-normal">{projectDetails.location && projectDetails.location}</h4>
                                        </div>
                                        <div className="ml-auto align-self-center">
                                          <div className="gauge-meter">
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card overflow-hidden border-0 box-shadow-0 br-0 mb-0">
                                        <div className="card-body table-responsive border-top">
                                          <table className="table table-borderless w-100 m-0 text-nowrap ">
                                            <tbody className="p-0">
                                              <tr>
                                                <td className="px-0 py-1"><span className="font-weight-semibold">Category Name</span></td>
                                                <td className="p-1"><span>:</span></td>
                                                <td className="p-1"><span> {this.state.categoryName ? this.state.categoryName : ''}</span></td>
                                              </tr>
                                              {this.state.tagName &&
                                                <tr>
                                                  <td className="px-0 py-1"><span className="font-weight-semibold">Services</span></td>
                                                  <td className="p-1"><span>:</span></td>
                                                  <td className="p-1"><span>{this.state.tagName ? this.state.tagName : 'No Service Available'}</span></td>
                                                </tr>}
                                              {projectDetails.sellerServices && projectDetails.sellerServices[0].monthlyRate &&
                                                <tr>
                                                  <td className="px-0 py-1"><span className="font-weight-semibold">Monthly Rate</span></td>
                                                  <td className="p-1"><span>:</span></td>
                                                  <td className="p-1"><span>{projectDetails.sellerServices[0].monthlyRate === 1 ? "£250 - £1000" : '' || projectDetails.sellerServices[0].monthlyRate === 2 ? "£1,000 - £2,000" : '' || projectDetails.sellerServices[0].monthlyRate === 3 ? "£2,000 - £5,000" : '' || projectDetails.sellerServices[0].monthlyRate === 4 ? "£5,000 - £10,000+" : ''}</span></td>
                                                </tr>}
                                              {projectDetails.sellerServices && projectDetails.sellerServices[0].oneOffRate &&
                                                <tr>
                                                  <td className="px-0 py-1"> <span className="font-weight-semibold">One Off Rate</span></td>
                                                  <td className="p-1"><span>:</span></td>
                                                  <td className="p-1"><span>{projectDetails.sellerServices[0].oneOffRate === 1 ? "£250 - £1000" : '' || projectDetails.sellerServices[0].oneOffRate === 2 ? "£1,000 - £2,000" : '' || projectDetails.sellerServices[0].oneOffRate === 3 ? "£2,000 - £5,000" : '' || projectDetails.sellerServices[0].oneOffRate === 4 ? "£5,000 - £10,000+" : ''}</span></td>
                                                </tr>}
                                              {projectDetails.sellerServices && projectDetails.sellerServices[0].hourlyStartRate &&
                                                <tr>
                                                  <td className="px-0 py-1"><span className="font-weight-semibold">Hourly Start Rate </span></td>
                                                  <td className="p-1"><span>:</span></td>
                                                  <td className="p-1"><span>{'£' + " " + projectDetails.sellerServices[0].hourlyStartRate}</span></td>
                                                </tr>}
                                              {projectDetails.sellerServices && projectDetails.sellerServices[0].hourlyEndRate &&
                                                <tr>
                                                  <td className="px-0 py-1"><span className="font-weight-semibold">Hourly End Rate </span></td>
                                                  <td className="p-1"><span>:</span></td>
                                                  <td className="p-1"><span>{'£' + " " + projectDetails.sellerServices[0].hourlyEndRate}</span></td>
                                                </tr>}
                                              <tr>
                                                <td className="px-0 align-middle  py-1"><span className="font-weight-semibold">Industry Focus</span></td>
                                                <td className="p-1 align-middle"><span>:</span></td>
                                                <td className="p-1">{projectDetails.industryName}</td>
                                              </tr>
                                              {projectDetails.trustpilotConnectedUrl !== null &&
                                                <tr>
                                                  <td className="px-0 align-middle  py-1"><span className="font-weight-semibold">
                                                    <img src={require("../assets/images/trustpilot-logo.png")} className="dashboard_buyer_icon" /></span></td>
                                                  <td className="p-1 align-middle"><span>:</span></td>
                                                  <td className="p-1"><a href={`https://uk.trustpilot.com/review/${projectDetails.trustpilotConnectedUrl}`} target="_blank">https://uk.trustpilot.com/review/{projectDetails.trustpilotConnectedUrl}</a></td>
                                                </tr>}
                                              {projectDetails.glassdoorConnnectedUrl !== null &&
                                                <tr>
                                                  <td className="px-0 align-middle  py-1"><span className="font-weight-semibold">
                                                    <img src={require("../assets/images/glassdoor-logo.png")} className="dashboard_buyer_icon" /></span></td>
                                                  <td className="p-1 align-middle"><span>:</span></td>
                                                  <td className="p-1"><a href={`https://www.glassdoor.co.uk/Reviews/${projectDetails.glassdoorConnnectedUrl}`} target="_blank">https://www.glassdoor.co.uk/Reviews/{projectDetails.glassdoorConnnectedUrl}</a></td>
                                                </tr>}
                                              {projectDetails.connectFacebookBusinessUrl !== null &&
                                                <tr>
                                                  <td className="px-0 align-middle  py-1"><span className="font-weight-semibold">
                                                    <img src={require("../assets/images/facebook-logo.png")} className="dashboard_buyer_icon" /></span></td>
                                                  <td className="p-1 align-middle"><span>:</span></td>
                                                  <td className="p-1"> <a href={`https://www.facebook.com/${projectDetails.connectFacebookBusinessUrl}`} target="_blank">www.facebook.com/{projectDetails.trustpilotConnectedUrl}</a></td>
                                                </tr>}
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="card-footer">
                                          <div className="d-sm-flex">
                                            <button className="btn btn-next btn-primary" onClick={() => this.sendRequestToSeller(projectDetails.sellerServices[0].sellerId)}>Send a Request</button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div> :

                        <div className="col-md-12">
                          <div className="temphome_section">
                            <h3 className="text-center">No Sellers found</h3>
                            <p className="text-center">
                              <Link to="/posts">You can check all of your posted projects here</Link>
                            </p>
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> </>}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    projectId: state
  };
};

export default withRouter(connect(mapStateToProps)(BuyerHome));


