import axios from 'axios';
import { GET_ALL_CATEGORY, GET_CATEGORY_QUESTIONNAIRE } from './ConstantURI';

export function getAllCategory() {
    return axios.get(GET_ALL_CATEGORY).then(response => {
        localStorage.setItem('categoryID', response.id);
        return response;
    }).catch(error => {
        return error;
    });
}

export function getAllCategoryQuestionnaire() {
    return axios.get(GET_CATEGORY_QUESTIONNAIRE).then(response => {
        return response;
    }).catch(error => {
        return error;
    });
}