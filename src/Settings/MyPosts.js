import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { getAllBuyersProject } from '../Services/BuyerService';
import Loader from '../Loader/Loader';
import { notification } from 'antd';
export default class MyPosts extends React.Component {

  state = {
    buyerProjectDetails: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true });
    getAllBuyersProject().then(res => {
      if (res.status === 200) {
        this.setState({ buyerProjectDetails: res.data, loading: false })
      } else {
        this.setState({ loading: false });
      }
    }).catch(() => {
      this.setState({ loading: false });
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching your Posts!'
      })
    });
  }

  goToBuyerDashboard = (buyerId, id, paid, projectName) => {
    localStorage.setItem('paid', paid)
    this.props.history.push(`/dashboard-buyer/${buyerId}/${id}`);
  }

  sendToPostDetails = (id) => {
    this.props.history.push(`/posts-details/${id}`);
  }

  render() {

    const pathList = [{ to: "/posts", title: "My Posts" }];

    return (
      <div>
        {this.state.loading ? <Loader /> :
          <>
            <BreadCrumbs title="My Posts" breadcrumbssegment={pathList} />
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3">
                  <SideNav />
                </div>
                <div className="col-xl-9 col-lg-9 sptb">
                  <div className="custom-card">
                    <div className="card">
                      <div className="card-header">
                        <div className="filter-section">
                          <div className="header-right ml-auto">
                            {/* <div className="dropdown-search d-md-flex">
                              <div className="form-group mb-0 position-relative mr-4">
                                <input type="text" className="form-control position-relative search-buyer" placeholder="Search Posts" />
                                <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                              </div>
                              <div className="filter-dropodwn">
                                <select className="form-control">
                                  <option>All</option>
                                  <option>Tittle 1</option>
                                  <option>Tittle 2</option>
                                </select>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="filter-section filter-caresoule">
                          <div className="ads-tabs w-100">
                            {/* <div className="tabs-menu">
                        <ul className="nav panel-tabs">
                          <OwlCarousel
                            className="owl-theme"
                            loop={false}
                            dots={false}
                            items={4}
                            margin={10}
                            nav >
                            <div className="item">
                              <li><a href="#tab1" className="active" data-toggle="tab">All Services (20)</a></li>
                            </div>
                            <div className="item">
                              <li><a href="#tab2" data-toggle="tab">Designer (08)</a></li>
                            </div>
                            <div className="item">
                              <li><a href="#tab3" data-toggle="tab">Graphics(12)</a></li>
                            </div>
                            <div className="item">
                              <li><a href="#tab3" data-toggle="tab">Marketing(4)</a></li>
                            </div>
                            <div className="item">
                              <li><a href="#tab3" data-toggle="tab">Housing(4)</a></li>
                            </div>
                          </OwlCarousel>
                        </ul>
                      </div> */}
                            {this.state.buyerProjectDetails.length > 0 ?
                              <div className="tab-content">
                                <div className="tab-pane table-responsive border-top userprof-tab active">
                                  <div className="table table-bordered table-striped table-hover mb-0 text-nowrap">
                                    <thead>
                                      <tr>
                                        <th className="w-100">My Posts</th>
                                        <th>Budget</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        <th>Search Sellers</th>
                                        {/* <th>Inbox</th> */}
                                      </tr>
                                    </thead>
                                    {this.state.buyerProjectDetails.map(details => (
                                      <tbody>
                                        <tr>
                                          <td>{details.title}</td>
                                          <td>
                                            <>
                                              {details.monthlyRate ?
                                                <div className="card-body p-0">
                                                  <span className="icons font-weight-semibold text-body">
                                                    <strong>Monthly Rate : </strong>  {details.monthlyRate === 1 ? "£250 - £1000" : '' || details.monthlyRate === 2 ? "£1000 - £2000" : '' || details.monthlyRate === 3 ? "£2000 - £5000" : '' || details.monthlyRate === 4 ? "£5,000 - £10,000+" : ''}</span>
                                                </div>
                                                : ''}
                                              {details.oneOffRate ?
                                                <div className="card-body p-0">
                                                  <span className="icons font-weight-semibold text-body">
                                                    <strong>One Off Rate : </strong> {details.oneOffRate === 1 ? "£250 - £1000" : '' || details.oneOffRate === 2 ? "£1000 - £2000" : '' || details.oneOffRate === 3 ? "£2000 - £5000" : '' || details.oneOffRate === 4 ? "£5,000 - £10,000+" : ''}</span>
                                                </div>
                                                : ''}
                                              {details.hourlyStartRate ?
                                                <div className="card-body p-0">
                                                  <span className="icons font-weight-semibold text-body">
                                                    <strong>Hourly Start Rate : </strong>{'£' + " " + details.hourlyStartRate}</span>
                                                </div>
                                                : ''}
                                              {details.hourlyEndRate ?
                                                <div className="card-body p-0">
                                                  <span className="icons font-weight-semibold text-body">
                                                    <strong>Hourly End Rate : </strong> {'£' + " " + details.hourlyEndRate} </span>
                                                </div>
                                                : ''}
                                            </>
                                          </td>
                                          <td><a href="javascript:void(0)" className="badge badge-success">Active</a></td>
                                          <td>
                                            {/* <NavLink to="/home" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-pencil"></i></NavLink>
                                          <NavLink to="/home" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></NavLink> */}
                                            <p className="btn btn-primary btn-sm text-white mb-0" data-toggle="tooltip" data-original-title="View " onClick={() => this.sendToPostDetails(details.id)}><i className="fa fa-eye"></i></p>
                                          </td>
                                          <td>
                                            <a className="btn btn-dark btn-sm text-white mb-0" onClick={() => this.goToBuyerDashboard(details.buyerId, details.id, details.paid, details.title)}>Search Sellers</a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    ))}
                                  </div>
                                </div>
                              </div> :
                              <div className="tab-content">
                                <div className="filter-section filter-caresoule">
                                  <div className="ads-tabs w-100">
                                    You have not posted any project. Start posting some projects in order to search for seller
                                </div>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    )
  }
}
