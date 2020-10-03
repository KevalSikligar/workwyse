import axios from 'axios';
import { GET_ALL_INDUSTRIES } from './ConstantURI';

export function getIndustries() {
    return axios.get(GET_ALL_INDUSTRIES).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}