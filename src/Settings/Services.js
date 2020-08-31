import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import SideNav from '../SideNav/SideNav';
import InfiniteScroll from "react-infinite-scroll-component";

const pathList = [
    { to: "/service-setting", title: "Services" }
]

export default class Services extends React.Component {
    state = {
        items: [{
            tableHead: "Digital Martketing",
            tableData: [
                "Facebook", "LinkedIn"
            ],
        }, {
            tableHead: "Digital Martketing",
            tableData: [
                "Facebook", "LinkedIn"
            ],
        }, {
            tableHead: "Digital Martketing",
            tableData: [
                "Facebook", "LinkedIn"
            ],
        }, {
            tableHead: "Digital Martketing",
            tableData: [
                "Facebook", "LinkedIn"
            ],
        }, {
            tableHead: "Digital Martketing",
            tableData: [
                "Facebook", "LinkedIn"
            ],
        }],
        hasMore: true
    };

    fetchMoreData = () => {
        let array = [...this.state.items]
        array.push(...this.state.items)

        if (this.state.items?.length >= 20) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: array
            });
        }, 1500);
    };

    render() {
        return (
            <div>
                <BreadCrumbs title="Services" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12">
                            <SideNav />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12">
                            <div className="sptb">
                                <div className="card mb-0">
                                    <div className="card-header">
                                        <h3 className="card-title">Service Settings</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">Search Services</label>
                                            <input type="text" className="form-control" placeholder="Start typing to find services..." />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Services Offering</label>
                                            <div className="seleted-services multiselect">
                                                <button type="button" class="badge">Digital Marketing<i className="typcn icon typcn-delete"></i></button>
                                                <button type="button" class="badge">Web Design<i className="typcn icon typcn-delete"></i></button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Search Services</label>
                                            <input type="text" className="form-control" placeholder="Search for the available services..." />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">We suggest the following services based on your industry.<br />Click to add.</label>
                                            <div className="suggested-services multiselect">
                                                <button type="button" class="badge">Technical SEO</button>
                                                <button type="button" class="badge">Social Media Management</button>
                                                <button type="button" class="badge">UI/UX Design</button>
                                                <button type="button" class="badge">Media Buying</button>
                                                <button type="button" class="badge">Branding</button>
                                                <button type="button" class="badge">Facebook Advertising</button>
                                                <button type="button" class="badge">Graphics Design</button>
                                                <button type="button" class="badge">Creative</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-header">
                                        <h3 className="card-title">Service Rates</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">Search Services</label>
                                            <input type="text" className="form-control" placeholder="Search for the available services..." />
                                        </div>
                                        <InfiniteScroll
                                            dataLength={this.state.items?.length}
                                            next={this.fetchMoreData}
                                            hasMore={true}
                                            loader={
                                                this.state.hasMore ? <h4>Loading...</h4> : <p style={{ textAlign: "center" }}>
                                                    <b>Yay! You have seen it all</b>
                                                </p>
                                            }>
                                            <table className="services-table table-bordered">
                                                <thead className="text-center">
                                                    <tr>
                                                        <th></th>
                                                        <th>One Off</th>
                                                        <th>Monthly</th>
                                                        <th>Hourly</th>
                                                    </tr>
                                                </thead>
                                                {this.state.items?.map((data, index) => (

                                                    <>
                                                        {console.log('head', data, index)}

                                                        <thead>
                                                            <tr>
                                                                <th colSpan="4">{`${data.tableHead} ${index}`}</th>
                                                            </tr>
                                                        </thead>
                                                        {data.tableData.map((items, index) => (
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">{items}</th>
                                                                    <td>
                                                                        <select class="form-control">
                                                                            <option selected>$250 - $1000</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <select class="form-control">
                                                                            <option selected>Choose...</option>
                                                                            <option value="1">One</option>
                                                                            <option value="2">Two</option>
                                                                            <option value="3">Three</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>
                                                                        <div className="hourly-rates">
                                                                            <span>$25</span>
                                                                            <b>-</b>
                                                                            <span>$25</span>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        ))}
                                                    </>
                                                ))}
                                            </table>

                                        </InfiniteScroll>
                                    </div>
                                    <div className="card-footer text-right">
                                        <Button className="btn btn-danger mr-2">Cancel</Button>
                                        <Button className="btn btn-primary">Save</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
