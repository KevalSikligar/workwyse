import { getUserDetail } from '../const';
import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';

export function editNotification(data) {
    return axiosInterceptor.put(`api/Notification`, data);
}

export function getNotificationByCompanyId() {
    return axiosInterceptor.get(`api/Notification/${getUserDetail('companyId')}`);
}

export function unsubscribeUser(userEmail) {
    return axiosInterceptor.put(`api/Notification/Unsubscribe/${userEmail}`);
}