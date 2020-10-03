import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import { getAllNotifications } from '../Services/Notifications';

export default class Notifications extends React.Component {

    state = {
        email: [],
        browser: []
    }

    componentDidMount = () => {
        getAllNotifications().then(res => {
            var emailArry = [];
            var broswerArry = [];
            res.data.map(res => {
                if (res.email === true) {
                    emailArry.push(res.name)
                    this.setState({ email: emailArry });
                } else if (res.browser === true) {
                    broswerArry.push(res.name)
                    this.setState({ browser: broswerArry });
                }
            });
        }).catch(err => {
            console.log('err => ', err);
        });
    }

    render() {

        const pathList = [
            { to: "/notifications", title: "Notifications" }
        ];

        return (
            <div>
                <BreadCrumbs title="Notifications" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12">
                            <SideNav />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card">
                                        <div className="card-header bg-light-gray">
                                            <h3 className="text-capitalize card-title"> Seller Notification</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="swticher-title">
                                                <p className="text-dark fs-16 font-weight-semibold">Control what you'd like us to email you about.</p>
                                            </div>
                                            <div className="not-getting-mail-section d-flex justify-content-between align-items-center">
                                                <p className="fs-16 text-dark font-weight-semibold mb-0">Not getting any mail?</p>
                                                <Button className="btn service-btn w-auto px-5">Click here</Button>
                                            </div>
                                            <hr className="my-5" />
                                            <p className="fs-16 text-dark font-weight-semibold mb-4">Email me About:</p>
                                            <div className="swticher-list">
                                                <div className="swticher-section mb-4">
                                                    {this.state.email.map(email => (
                                                        <label className="custom-switch d-flex justify-content-between">
                                                            <>
                                                                <span className="custom-switch-description text-dark fs-16">{email}</span>
                                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                                                <span className="custom-switch-indicator"></span>
                                                            </>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header bg-light-gray">
                                            <h3 className="card-title text-capitalize">Browser (Push) </h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="swticher-title">
                                                <p className="text-dark fs-16 font-weight-semibold">
                                                    We can send notifications straight to your web browser. Choose what you’d like to be notified about.
                                                </p>
                                            </div>
                                            <hr className="my-5" />
                                            <div className="not-getting-mail-section d-flex justify-content-between align-items-center mb-4">
                                                <p className="fs-16 text-dark font-weight-semibold mb-0">Notify me about: </p>
                                            </div>
                                            <div className="swticher-list">
                                                <div className="swticher-section mb-4">
                                                    {this.state.browser.map(browser => (
                                                        <label className="custom-switch d-flex justify-content-between">
                                                            <>
                                                                <span className="custom-switch-description text-dark fs-16">{browser}</span>
                                                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                                                <span className="custom-switch-indicator"></span>
                                                            </>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-danger  mr-2">Cancel</Button>
                                    <Button className="btn btn-primary">Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
