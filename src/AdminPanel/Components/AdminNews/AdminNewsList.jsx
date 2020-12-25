import React, { Component } from 'react'
import * as moment from "moment";
import { getAllNews } from '../../../redux/action/News/NewsAction';
import { connect } from 'react-redux';
import { getAllNewsService } from '../../../Services/NewsService';
import { notification, Table } from 'antd';
import Loader from '../../../Loader/Loader';

class AdminNewsList extends Component {

    state = {
        allNewsArticles: [],
        loading: false
    };

    componentDidMount() {
        this.setState({loading: true})
        getAllNewsService().then(res => {
            this.props.dispatch(getAllNews(res.data));
            this.setState({ allNewsArticles: res.data, loading: false });
            console.log('res of admin news=> ', res);
        }).catch(err => {
            notification.open({
                message: 'Error',
                description: 'There was an error while fetching News!'
            });
        });
    }

    columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a, b) => a.title.localeCompare(b.title)

        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            sorter: (a, b) => a.description.localeCompare(b.description),
            render: (description) => (
                <div>{description && description.length > 20 ? description.substring(0, 35) + "..." : description}</div>
            )
        },
        {
            title: "Published",
            dataIndex: "published",
            key: "published",
            render: (published) => (
                <div>{published === true ? 'Published' : 'Not Published'}</div>
            )
        },
        {
            title: "Created Date",
            dataIndex: "createdDate",
            key: "createdDate",
            sorter: (a, b) => moment(a.createdDate).format('MM-DD-YYYY') - moment(b.createdDate).format('MM-DD-YYYY'),
            render: (createdDate) => moment(createdDate).format('MM-DD-YYYY')
        },
        {
            title: "Read More",
            dataIndex: "readmore",
            key: "readmore",
            render: (text, record) => (
                <td><button className="btn btn-primary" onClick={(e) => this.goToNewsDetails(record.id)}>Read More</button></td>
            )
        },
        // {
        //     title: "Edit",
        //     dataIndex: "edit",
        //     key: "edit",
        //     render: (text, record) => (
        //         <td><button className="btn btn-primary" onClick={(e) => this.editItem(record.id)}>Edit</button></td>
        //     )
        // },
        // {
        //     title: "Delete",
        //     dataIndex: "delete",
        //     key: "delete",
        //     render: (text, record) => (
        //         <td><button className="btn btn-danger" onClick={(e) => this.deleteItem(record.id)}>Delete</button></td>
        //     )
        // }
    ]

    goToNewsDetails(id) {
        this.props.history.push(`/admin-news-details/${id}`)
    }

    render() {

        const { allNewsArticles } = this.state;

        return (
            <div>
            {this.state.loading ? <Loader/> : <><h1>NewsList</h1>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Jobs List</h3>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive border-top mb-0 ">
                                    <Table dataSource={allNewsArticles} columns={this.columns} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div> </>}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state
    }
}

export default connect(mapStateToProps)(AdminNewsList)
