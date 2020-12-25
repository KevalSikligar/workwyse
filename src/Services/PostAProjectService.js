import axios from 'axios';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
import Axios from 'axios';

export function postAProject(data) {
    return axiosInterceptor.post(`api/Project`, data);
}

export function projectHireType() {
    return axiosInterceptor.get(`api/ProjectHireType/All`);
}

export function getProjectByProjectId(projectId) {
    return axiosInterceptor.get(`api/Project/${projectId}`);
}

export function getProjectDetailsWithBuyerCredentials(projectId) {
    return Axios.get(process.env.REACT_APP_API_URL + `api/Project/BuyerDetails/${projectId}`).then(response => {
        return response
    }).catch(error => {
        console.log('error => ', error);
    });
}