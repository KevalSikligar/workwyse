import axios from 'axios';
import { GET_ALL_NOTIFICATION } from './ConstantURI';

export function getAllNotifications() {
    return axios.get(GET_ALL_NOTIFICATION).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}