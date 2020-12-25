import { getUserDetail } from '../const';
import axios from 'axios';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
import { getToken } from '../accessToken';

export function postBuyer(data) {
    return axios.post(process.env.REACT_APP_API_URL + `api/Buyer`, data).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function editBuyerDetails(data) {
    return axiosInterceptor.put(`api/Buyer`, data)
}

export function postBuyerProjectRequest(data) {
    return axios.post(process.env.REACT_APP_API_URL + `api/Buyer/ProjectRequest`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function editBuyerTemplate(data) {
    return axiosInterceptor.put(`api/Buyer/Template`, data)
}

export function getAllBuyersProject() {
    return axiosInterceptor.get(`api/Project/Buyer/${localStorage.getItem('buyerId') ? localStorage.getItem('buyerId') : getUserDetail('companyId')}`)
}

export function buyersHierarchy(buyerId, projectId) {
    return axiosInterceptor.get(`api/Buyer/SellersHierarchy/${buyerId}/${projectId}`)
}