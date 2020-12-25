export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
export const LOGOUT = 'LOGOUT';

export function addAuthUser(key, data) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: data,
        key: key
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}

export function onauthError(error) {
    return {
        type: AUTH_USER_ERROR,
        payload: error
    }
}