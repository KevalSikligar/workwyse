export const GET_HEADER_KEY = 'GET_HEADER_KEY';
export const GET_HEADER_KEY_NULL = 'GET_HEADER_KEY_NULL';
export const SET_REQUESTS = 'SET_REQUESTS';

export function getHeaderKey(key) {
    return {
        type: GET_HEADER_KEY,
        payload: key
    }
}

export function setProjectRequests(payload) {
    return {
        type: SET_REQUESTS,
        payload,
    }
}

export function getHeaderKeyNull(key) {
    return {
        type: GET_HEADER_KEY_NULL,
        payload: key
    }
}