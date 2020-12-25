import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHeaderKey, getHeaderKeyNull } from '../../../redux/action/Headers/HeadersAction'

class AdminHeader extends Component {

    state = {
        toggled: false
    }

    toggleClass = (key) => {
        console.log('key => ',key);
        this.props.dispatch(getHeaderKey(key))
        this.setState({ toggled: true })
        if(this.state.toggled) {
        this.props.dispatch(getHeaderKeyNull(null))

        this.setState({ toggled: false })

        } else {
        this.props.dispatch(getHeaderKey(key))

        this.setState({ toggled: true })

        }
    }
    render() {
        return (
            // <div className="page">
            //     <div className="page-main">
                    <div className="app-header1 header py-1 d-flex">
                        <div className="container-fluid">
                            <div className="d-flex">
                                <a className="header-brand">
                                    <img src={require("../../../assets/images/brand/logo.png")} className="header-brand-img" alt="Jobslist logo" />
                                </a>
                                <a aria-label="Hide Sidebar" className="app-sidebar__toggle" data-toggle="sidebar" onClick={() => this.toggleClass('passKey')} href={() => false}></a>
                                <div className="header-navicon">
                                    <button data-toggle="search" className="nav-link d-lg-none navsearch-icon">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                                <div className="header-navsearch">
                                    <form className="form-inline mr-auto">
                                        <div className="nav-search">
                                            <input type="search" className="form-control header-search" placeholder="Search…" aria-label="Search" />
                                            <button className="btn btn-primary" type="submit"><i className="fa fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="d-flex order-lg-2 ml-auto">
                                    <div className="dropdown d-none d-md-flex" >
                                        {/* <a className="nav-link icon full-screen-link">
                                            <i className="fe fe-maximize-2" id="fullscreen-button"></i>
                                        </a> */}
                                    </div>
                                    {/* <div className="dropdown d-none d-md-flex country-selector">
                                        <a href={() => false} className="d-flex nav-link leading-none" data-toggle="dropdown">
                                            <img src="../assets/images/us_flag.jpg" alt="img" className="avatar avatar-xs mr-1 align-self-center" />
                                            <div>
                                                <strong className="text-dark">English</strong>
                                            </div>
                                        </a>
                                        <div className="language-width dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/french_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center" />
                                                <div>
                                                    <strong>French</strong>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/germany_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center" />
                                                <div>
                                                    <strong>Germany</strong>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/italy_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center" />
                                                <div>
                                                    <strong>Italy</strong>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/russia_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center" />
                                                <div>
                                                    <strong>Russia</strong>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/spain_flag.jpg" alt="flag-img" className="avatar  mr-3 align-self-center" />
                                                <div>
                                                    <strong>Spain</strong>
                                                </div>
                                            </a>
                                        </div>
                                    </div> */}
                                    <div className="dropdown d-none d-md-flex">
                                        {/* <a className="nav-link icon" data-toggle="dropdown">
                                            <i className="fa fa-bell-o"></i>
                                            <span className=" nav-unread badge badge-danger  badge-pill">4</span>
                                        </a> */}
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a href={() => false} className="dropdown-item text-center">You have 4 notification</a>
                                            <div className="dropdown-divider"></div>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <div className="notifyimg">
                                                    <i className="fa fa-envelope-o"></i>
                                                </div>
                                                <div>
                                                    <strong>2 new Messages</strong>
                                                    <div className="small text-muted">17:50 Pm</div>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <div className="notifyimg">
                                                    <i className="fa fa-calendar"></i>
                                                </div>
                                                <div>
                                                    <strong> 1 Event Soon</strong>
                                                    <div className="small text-muted">19-10-2019</div>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <div className="notifyimg">
                                                    <i className="fa fa-comment-o"></i>
                                                </div>
                                                <div>
                                                    <strong> 3 new Comments</strong>
                                                    <div className="small text-muted">05:34 Am</div>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <div className="notifyimg">
                                                    <i className="fa fa-exclamation-triangle"></i>
                                                </div>
                                                <div>
                                                    <strong> Application Error</strong>
                                                    <div className="small text-muted">13:45 Pm</div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a href={() => false} className="dropdown-item text-center">See all Notification</a>
                                        </div>
                                    </div>
                                    <div className="dropdown d-none d-md-flex">
                                        <a className="nav-link icon" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o"></i>
                                            <span className=" nav-unread badge badge-warning  badge-pill">3</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/users/male/41.jpg" alt="avatar-img" className="avatar brround mr-3 align-self-center" />
                                                <div>
                                                    <strong>Blake</strong> I've finished it! See you so.......
												<div className="small text-muted">30 mins ago</div>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/users/female/1.jpg" alt="avatar-img" className="avatar brround mr-3 align-self-center" />
                                                <div>
                                                    <strong>Caroline</strong> Just see the my Admin....
												<div className="small text-muted">12 mins ago</div>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/users/male/18.jpg" alt="avatar-img" className="avatar brround mr-3 align-self-center" />
                                                <div>
                                                    <strong>Jonathan</strong> Hi! I'am singer......
												<div className="small text-muted">1 hour ago</div>
                                                </div>
                                            </a>
                                            <a href={() => false} className="dropdown-item d-flex pb-3">
                                                <img src="../assets/images/users/female/18.jpg" alt="avatar-img" className="avatar brround mr-3 align-self-center" />
                                                <div>
                                                    <strong>Emily</strong> Just a reminder that you have.....
												<div className="small text-muted">45 mins ago</div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a href={() => false} className="dropdown-item text-center">View all Messages</a>
                                        </div>
                                    </div>
                                    <div className="dropdown d-none d-md-flex">
                                        <a className="nav-link icon" data-toggle="dropdown">
                                            <i className="fe fe-grid"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow  app-selector">
                                            <ul className="drop-icon-wrap">
                                                <li>
                                                    <a href={() => false} className="drop-icon-item">
                                                        <i className="icon icon-speech text-dark"></i>
                                                        <span className="block"> E-mail</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={() => false} className="drop-icon-item">
                                                        <i className="icon icon-map text-dark"></i>
                                                        <span className="block">map</span>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href={() => false} className="drop-icon-item">
                                                        <i className="icon icon-bubbles text-dark"></i>
                                                        <span className="block">Messages</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={() => false} className="drop-icon-item">
                                                        <i className="icon icon-user-follow text-dark"></i>
                                                        <span className="block">Followers</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={() => false} className="drop-icon-item">
                                                        <i className="icon icon-picture text-dark"></i>
                                                        <span className="block">Photos</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={() => false} className="drop-icon-item">
                                                        <i className="icon icon-settings text-dark"></i>
                                                        <span className="block">Settings</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="dropdown-divider"></div>
                                            <a href={() => false} className="dropdown-item text-center">View all</a>
                                        </div>
                                    </div>
                                    <div className="dropdown ">
                                        <a href={() => false} className="nav-link pr-0 leading-none user-img" data-toggle="dropdown">
                                            <img src="../assets/images/users/male/25.jpg" alt="profile-img" className="avatar avatar-md brround" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow ">
                                            <a className="dropdown-item" href="profile.html">
                                                <i className="dropdown-icon icon icon-user"></i> My Profile
										</a>
                                            <a className="dropdown-item" href="emailservices.html">
                                                <i className="dropdown-icon icon icon-speech"></i> Inbox
										</a>
                                            <a className="dropdown-item" href="editprofile.html">
                                                <i className="dropdown-icon  icon icon-settings"></i> Account Settings
										</a>
                                            <a className="dropdown-item" href="login.html">
                                                <i className="dropdown-icon icon icon-power"></i> Log out
										</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            //     </div>
            // </div>
        )
    }
}


const mapStateToProps = state => {
    console.log('state in admin hheeader   ',state);

    return {
        headers: state
    }
}

export default connect(mapStateToProps)(AdminHeader)
