import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import { connect } from 'react-redux';
import { notification } from 'antd';
import moment from 'moment';
import { List } from 'antd';
import { getSellerRequests, getBuyerRequests } from '../Services/Message';
import { NavLink } from 'react-router-dom';
import { getUserDetail } from '../const';
import Loader from '../Loader/Loader';
class Requests extends Component {

  state = {
    userDetails: null,
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true, userDetails: getUserDetail() }, () => {
      if (getUserDetail('roles') === 'Seller') {
        getSellerRequests().then(res => {
          if (res.status === 200) {
            this.setState({ requests: res.data, loading: false });
          } else {
            this.setState({ loading: false });
          }
        }).catch(() => {
          this.setState({ loading: false });
          notification.open({
            message: 'Error',
            description: 'There was an error while fetching leads for sellers!'
          });
        });
      } else if (getUserDetail('roles') === 'Buyer') {
        getBuyerRequests().then(res => {
          if (res.status === 200) {
            this.setState({ requests: res.data, loading: false });
          } else {
            this.setState({ loading: false });
          }
        }).catch(() => {
          this.setState({ loading: false });
          notification.open({
            message: 'Error',
            description: 'There was an error while fetching leads for buyers!'
          });
        });
      }
    });
  }

  render() {

    const pathList = [{ to: "/requests", title: "Requests" }];
    const { requests } = this.state;
    return (
      <div>
        <BreadCrumbs title="Requests" breadcrumbssegment={pathList} />
        <section className="sptb">
          <div className="container">
            {this.state.loading ? <Loader /> :
              <div className="panel-body">
                <div className="tab-content">
                  <List itemLayout="horizontal" dataSource={requests} renderItem={item => (
                    <List.Item>
                      <List.Item.Meta title={item.projectName} description={item.companyName} />
                      <div className="link_view">
                        <span>{moment(item.createdDate).format("LLL")}</span>
                        <NavLink className="ant-btn ant-btn-primary" to={getUserDetail('roles') === 'Seller' ? `/inbox/${item.projectId}` : `/buyer-inbox/${item.projectId}/${item.companyId}`}>View
                      </NavLink>
                      </div>
                    </List.Item>
                  )} />
                </div>
              </div>}
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    priceIdInTempHome: state
  };
};

export default connect(mapStateToProps)(Requests);