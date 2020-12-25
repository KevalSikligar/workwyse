import { getUserDetail } from '../const';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
import { getToken } from '../accessToken';
import Axios from 'axios';

export function postMessage(data) {
    return axiosInterceptor.post(`api/Message`, data);
}

export function editMessage() {
    return axiosInterceptor.put(`api/Message`);
}

export function getMessageSellerProjectId(sellerId, projectId) {
    return axiosInterceptor.get(`api/Seller/Messages/${sellerId}/${projectId}`);
}

export function getProjectStatus(sellerId, projectId) {
    return axiosInterceptor.get(`api/Seller/ProjectRequest/${sellerId}/${projectId}`);
}

export function getMessageBuyerProjectId(buyerId, projectId) {
    return axiosInterceptor.get(`api/Buyer/Messages/${buyerId}/${projectId}`);
}

export function getSellerRequests() {
    return axiosInterceptor.get(`api/Seller/ProjectRequests/${getUserDetail('companyId')}`);
}

export function getBuyerRequests() {
    return axiosInterceptor.get(`api/Buyer/ProjectRequests/${getUserDetail('companyId')}`);
}

export function acceptRejectProjectRequest(data) {
    return Axios.put(process.env.REACT_APP_API_URL + `api/Seller/ProjectRequest/Response`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => {
        return response
    }).catch(error => {
        return error
    });
}