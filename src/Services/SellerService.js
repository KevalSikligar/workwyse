import axios from 'axios';
import { getUserDetail } from '../const';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';

export function postSeller(data) {
    return axios.post(process.env.REACT_APP_API_URL + `api/Seller`, data).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function editSellerDetails(data) {
    return axiosInterceptor.put(`api/Seller`, data);
}

export function postSellerProjectDetails(data) {
    return axiosInterceptor.post(`api/Seller/ProjectRequest`, data)
}

export function editSellerServices(data) {
    return axiosInterceptor.put(`api/Seller/Services`, data);
}

export function editSellerTemplate(data) {
    return axiosInterceptor.put(`api/Seller/Template`, data);
}

export function sellerLeadHierarchy() {
    return axiosInterceptor.get(`api/Seller/LeadsHierarchy/${getUserDetail('companyId')}`);
}