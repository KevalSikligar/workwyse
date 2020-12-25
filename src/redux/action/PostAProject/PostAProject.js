export const GET_POST_A_PROECT_QUESTIONS_SUCCESS = 'GET_POST_A_PROECT_QUESTIONS_SUCCESS';
export const GET_POST_A_PROECT_QUESTIONS_ERROR = 'GET_POST_A_PROECT_QUESTIONS_ERROR';
export const CLEAR_ALL_DATA = 'CLEAR_ALL_DATA';
export const SEND_PROJECT_ID_TO_DASHBOARD = 'SEND_PROJECT_ID_TO_DASHBOARD';
export const CLEAR_PROJECT_DATA = 'CLEAR_PROJECT_DATA';

export function getPostAProjectData(key, data) {
    return {
        type: GET_POST_A_PROECT_QUESTIONS_SUCCESS,
        payload: data,
        key: key
    }
}

export function getPostAProjectDataError(error) {
    return {
        type: GET_POST_A_PROECT_QUESTIONS_ERROR,
        payload: error
    }
}

export function clearAllData() {
    return {
        type: CLEAR_ALL_DATA
    }
}

export function clearProjectData() {
    return {
        type: CLEAR_PROJECT_DATA
    }
}

export function sendProjectToDashboard(projectId) {
    return {
        type: SEND_PROJECT_ID_TO_DASHBOARD,
        payload: projectId
    }
}