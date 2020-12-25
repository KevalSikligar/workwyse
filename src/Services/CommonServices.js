import axios from 'axios';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';

export function forgotPassword(data) {
    return axios.post(process.env.REACT_APP_API_URL + `api/User/ForgotPassword`, data).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function resetPassword(data) {
    return axios.post(process.env.REACT_APP_API_URL + `api/User/ResetPassword`, data).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function setUserAddress(data) {
    return axiosInterceptor.post(`api/UserAddress`, data);
}

export function editUserAddress(data) {
    return axiosInterceptor.put(`api/UserAddress`, data);
}

export function getAllCategory() {
    return axiosInterceptor.get(`api/Category/All`);
}