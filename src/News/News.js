import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import * as moment from 'moment';
import { connect } from 'react-redux';
import { getAllNewsService } from '../Services/NewsService';
import { getAllNews } from '../redux/action/News/NewsAction';
import { notification } from 'antd';
import Image from 'react-random-image'

class News extends Component {

    state = {
        allNews: [],
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        let newsArray = [];
        getAllNewsService().then(res => {
            if (res.status === 200) {
                console.log('res => ', res);
                this.props.dispatch(getAllNews(res.data));
                res.data.map(data => {
                    if (data.published === true) {
                        newsArray.push(data)
                        this.setState({ allNews: newsArray })
                    }
                });
            }
        }).catch(err => {
            notification.open({
                message: 'Error',
                description: 'There was an error while fetching News!'
            })
            console.log('err => ', err);
        });
    }

    goToNewsDetails(id) {
        this.props.history.push(`/news-details/${id}`)
    }

    render() {

        const pathList = [{ to: "/news", title: "News" }];

        return (
            <div>
                <BreadCrumbs title="News" breadcrumbssegment={pathList} />
                <div className="sptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                {this.state.allNews.length > 0 ? this.state.allNews.map(data => (
                                    <div className="card overflow-hidden">
                                        <div className="ribbon ribbon-top-left text-warning"><span className="bg-warning">featured</span></div>
                                        <div className="row no-gutters blog-list">
                                            <div className="col-xl-3 col-lg-12 col-md-12">
                                                <div className="item7-card-img">
                                                <Image width={250} height={250} className="cover-image"/>
                                                    <div className="item7-card-text"> <span className="badge badge-warning">Jobs</span> </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-9 col-lg-12 col-md-12">
                                                <div className="card-body">
                                                    <div className="item7-card-desc d-flex mb-1">
                                                        <i className="fa fa-calendar-o text-muted mr-2"></i>{moment(data.createdDate).format('MM-DD-YYYY')}
                                                    </div>
                                                    <p className="text-dark"><h4 className="font-weight-semibold mb-3">{data.title}</h4></p>
                                                    <p className="mb-1">{data.description}</p>
                                                    <button className="btn btn-primary btn-sm mt-4" onClick={(e) => this.goToNewsDetails(data.id)}>Read More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                    <div className="col-md-12">
                                        <div className="temphome_section text-center">
                                            <h3>No News To Display</h3>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        news: state
    };
}

export default connect(mapStateToProps)(News);





