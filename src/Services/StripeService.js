import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';
import Axios from 'axios';
import { getToken } from '../accessToken';

export function getClientId(data) {
    return axiosInterceptor.post(`api/Payment/Customer`, data);
}

export function savePaymentMethod(data) {
    return Axios.post(process.env.REACT_APP_API_URL + `api/Payment/PaymentMethod`, data, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(response => {
        return response
    }).catch(Error => {
        return Error
    });
}

export function getCurrentUserInvoices() {
    return axiosInterceptor.get(`api/Payment/GetInvoicesForCurrentUser`);
}

export function detailedInvoice(subscriptionId) {
    return axiosInterceptor.get(`api/Payment/GetInvoicesForSubscription/${subscriptionId}`);
}