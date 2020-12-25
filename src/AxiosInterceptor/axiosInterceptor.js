import axios from "axios";
import qs from "qs";
import { notification } from "antd";
import { history } from '../const';

const axiosInterceptor = axios.create({ baseURL: process.env.REACT_APP_API_URL })

//request interceptor to add the auth token header to requests
axiosInterceptor.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        } else {
            localStorage.clear();
            history.replace(`${window.origin}/home`);
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

//response interceptor to refresh token on receiving token expired error
axiosInterceptor.interceptors.response.use((response) => { return response },
    function (error) {
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem("refresh_token");
        try {

            if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
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
                return axios(configRefresh).then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem("access_token", res.data.access_token);
                        localStorage.setItem("refresh_token", res.data.refresh_token);
                        return axios(originalRequest);
                    }
                }).catch(err => {
                    localStorage.clear()
                    // remove localStorage and remove all redux state
                });
            } else if (error.response.status === 404) {
                notification.error({
                    message: 'Error',
                    description: 'Something went wrong, Please try again!'
                });
            } else if (error.response.status === 400) {
                notification.error({
                    message: 'Error',
                    description: 'Something went wrong, Please try again!'
                });
            }

        } catch (error) {
            notification.info({
                description: 'Unable to fetch site data. Please try after sometime!'
            });
        }
        return Promise.reject(error);
    }
);

export default axiosInterceptor;