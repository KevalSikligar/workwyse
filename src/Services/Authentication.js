import qs from "qs";
import axios from 'axios';
import axiosInterceptor from "../AxiosInterceptor/axiosInterceptor";

export function withEmailPassword(email, password) {
    var data = qs.stringify({
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
        grant_type: "password",
        scope: "workwyse_api offline_access",
        username: email,
        password: password
    });
    let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_URL_AUTH + 'connect/token'}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data
    }
    return axios(config).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function getTokenWithCredentials() {
    var data = qs.stringify({
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
        grant_type: "client_credentials",
        scope: "workwyse_api"
    });
    let config = {
        method: "post",
        url: `${process.env.REACT_APP_API_URL_AUTH + 'connect/token'}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data
    }
    return axios(config).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function getUserDetails(token) {
    return axios.get(process.env.REACT_APP_API_URL + `api/AuthTest`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        return response
    }).catch(error => {
        return error
    })
}

export function refreshToken() {
    var dataRefresh = qs.stringify({
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
        grant_type: "refresh_token",
        refresh_token: localStorage.getItem('refresh_token')
    })
    var configRefresh = {
        method: "post",
        url: `${process.env.REACT_APP_API_URL_AUTH + 'connect/token'}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: dataRefresh
    };
    return axios(configRefresh).then(response => {
        var accessTokenFromRefresh = response.data.access_token;
        var configofAuth = {
            method: "get",
            url: `${process.env.REACT_APP_API_URL + 'api/AuthTest'}`,
            headers: {
                Authorization: `Bearer ${accessTokenFromRefresh}`,
            },
        };
        return axios(configofAuth).then(response => {
            return response
        }).catch(error => {
            return error
        });
    }).catch(error => {
        return error
    });
}

export function confirmEmail(userId, token) {
    return axiosInterceptor.get(`api/User/Confirm/${userId}/${token}`);
}

export function deactivateUserAccount() {
    return axiosInterceptor.put(`api/User/Deactivate`);
}

export function getUserInfo(access_token) {
    return axios.get(process.env.REACT_APP_API_URL + `api/User/Info`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    }).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function userLogin(data) {
    return axios.post(process.env.REACT_APP_API_URL_AUTH + `Account/Login`, data).then(response => {
        return response
    }).catch(error => {
        return error
    });
}