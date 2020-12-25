import React, { useEffect, useState } from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom';
import jwt from "jsonwebtoken";
import { SECRET_KEY, history } from '../const'
import { connect } from 'react-redux';
import { logout } from '../redux/action/User/UserAction';

function PrivateRoute(props) {
    const { component: Component, ...rest } = props;
    var isLog = false
    if (localStorage.token && localStorage.access_token && localStorage.refresh_token) {
        isLog = true
    } else {
        props.dispatch(logout());
        props.history.push('/home')
    }
    const [isLoggedIn, setIsLoggedIn] = useState(isLog)

    useEffect(() => {
        jwt.verify(localStorage.token, SECRET_KEY, function (err, decoded) {
            if (err) {
                // clear all redux states
                // login notification
                props.dispatch(logout());
                setIsLoggedIn(false)
                history.replace(`${window.origin}/home`);
            }
            setIsLoggedIn(true)
        });

    }, [])
    return (
        <Route {...rest} render={(props) => (
            isLoggedIn
                ? <Component {...rest}{...props} />
                : <Redirect to="/home" />
        )} />
    )
}


const mapStateToProps = (state) => {
    return {
        // _isLoggedIn: localStorage.getItem('projectIdDashboard') ? false : state.user.isLoggedIn,
    };
};

export default connect(mapStateToProps)(withRouter(PrivateRoute));