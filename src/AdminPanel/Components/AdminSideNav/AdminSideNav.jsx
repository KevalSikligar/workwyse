import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUserDetail } from '../../../const'

export default class AdminSideNav extends Component {
    render() {
        return (
            <div className="app-sidebar doc-sidebar">
                <aside>
                    <div className="app-sidebar__user clearfix">
                        <div className="dropdown user-pro-body">
                            <div>
                                <img src={require("../../../assets/images/users/male/25.jpg")} alt="user-img" className="avatar avatar-lg brround" />
                                <a href="javascript:void(0)" className="profile-img">
                                    <span className="fa fa-pencil" aria-hidden="true"></span>
                                </a>
                            </div>
                            <div className="user-info">
                                <h2>{getUserDetail('userName')}</h2>
                            </div>
                        </div>
                    </div>
                    <ul className="side-menu">
                        <li>
                            <Link to="/admin-dashboard" className="side-menu__item"><i className="side-menu__icon fa fa-home"></i><span className="side-menu__label">Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="/admin-news" className="side-menu__item"><i className="side-menu__icon fa fa-home"></i><span className="side-menu__label">News</span></Link>
                        </li>
                    </ul>
                </aside>
            </div>
        )
    }
}
