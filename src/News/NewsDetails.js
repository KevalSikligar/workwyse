import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'
import Image from 'react-random-image'
import * as moment from "moment";
import { newsDetails } from '../Services/NewsService';
import { notification } from 'antd';

export default class NewsDetails extends Component {

    state = {
        itemDetails: []
    };

    componentDidMount() {
        const idOfNews = this.props.match.params.id;
        newsDetails(idOfNews).then(res => {
            this.setState({ itemDetails: res.data });
        }).catch(err => {
            notification.open({
                message: 'Error',
                description: 'There was an error while fetching News Details!'
            });
        });
    }

    render() {

        const pathList = [
            { to: "/news-details", title: "News Details" }
        ]

        return (
            <div className="sptb">
                <BreadCrumbs title="News Details" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="wideget-user">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="wideget-user-desc d-sm-flex">
                                                    <div className="wideget-user-img mr-5 noborder"><Image width={150} height={150} /> </div>
                                                    <div className="user-wrap wideget-user-info"> <a href={() => false} className="text-dark"><h4 className="font-weight-semibold mb-2"><i className="fa fa-edit"></i>{this.state.itemDetails.title}</h4></a>
                                                        <h6 className="text-muted mb-1"><span className="text-dark">Created Date : </span> {moment(this.state.itemDetails.createdDate).format('MM-DD-YYYY')}</h6>
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
                                                        <p>{this.state.itemDetails.description}</p>
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
