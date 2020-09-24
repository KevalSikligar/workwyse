import {
    AUTH_USER_START,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    LOGOUT
} from '../action/User/UserAction'
var username = localStorage.getItem("UserDetails")
var access_token = localStorage.getItem("access_token")
const initialState = {
    user: username ? username : "",
    isLoggedIn: access_token ? true : false,
    isLoading: false
};


const actionsMap = {
    [AUTH_USER_START]: (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    },
    [AUTH_USER_SUCCESS]: (state, action) => {
        console.log('AUTH_USER_SUCCESS action => ', action);

        // localStorage.setItem('token', action.data.token)
        return {
            ...state,
            user: `${action.payload.response.localizedFirstName} ${action.payload.response.localizedLastName}`,
            isLoggedIn: true,
            isLoading: false
        }
    },
    [AUTH_USER_ERROR]: (state, action) => {
        localStorage.removeItem('access_token')

        return {
            ...state,
            user: null,
            isLoggedIn: false,
            isLoading: false
        }
    },
    [LOGOUT]: (state, action) => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('UserDetails');
        return {
            ...state,
            user: null,
            isLoggedIn: false
        }
    },
}

export default function reducer(state = initialState, action = {}) {
    const fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
}