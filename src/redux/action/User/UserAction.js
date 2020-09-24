import axios from 'axios';


// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
// export const GET_USER_ERROR = 'GET_USER_ERROR';
export const AUTH_USER_START = 'AUTH_USER_START';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
export const LOGOUT = 'LOGOUT';

export function addAuthUser(data) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: data
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
// export const Verification = (userID) => {
//     return dispatch => {
//         axios({
//             method: 'GET',
//             url: DB_URL + 'verify/' + userID
//         })
//             .then(function (response) {



//                 dispatch({
//                     type: GET_USER_SUCCESS,
//                     payload: response.data
//                 })
//             })
//             .catch(function (error) {
//                 dispatch({
//                     type: GET_USER_ERROR,
//                     payload: error && error.response ? error.response.data : ['Something went wrong']
//                 })
//             })
//     }
// }