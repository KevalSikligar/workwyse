import {
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    LOGOUT
} from '../action/User/UserAction';

var username = localStorage.getItem("UserDetails");
var access_token = localStorage.getItem("access_token");

const initialState = {
    user: username ? username : "",
    isLoggedIn: access_token ? true : false,
    isLoading: false
};

const actionsMap = {
    [AUTH_USER_SUCCESS]: (state, action) => {
        // console.log('state,action => ', state,action);
        if (action.key === 'normalLogin') {
            // localStorage.setItem('userName', (action.payload.data.foreName.charAt(0).toUpperCase() + action.payload.data.foreName.slice(1)) + " " + (action.payload.data.surName.charAt(0).toUpperCase() + action.payload.data.surName.slice(1)))
            // localStorage.setItem('firstName', action.payload.data.foreName)
            // localStorage.setItem('lastName', action.payload.data.surName)
            return {
                ...state,
                user: `${action.payload.data.foreName} ${action.payload.data.surName}`,
                isLoggedIn: true,
                isLoading: false
            }
        } else if (action.key === 'socialLogin') {
            // localStorage.setItem('userName', action.payload.response.localizedFirstName + " " + action.payload.response.localizedLastName)
            return {
                ...state,
                user: `${action.payload.response.localizedFirstName} ${action.payload.response.localizedLastName}`,
                isLoggedIn: true,
                isLoading: false
            }
        } else if (action.key === 'Buyer') {
            return {
                ...state,
                // user: `${action.payload.response.localizedFirstName} ${action.payload.response.localizedLastName}`,
                isLoggedIn: false,
                isLoading: false
            }
        }
    },
    [AUTH_USER_ERROR]: (state, action) => {
        // localStorage.removeItem('access_token');
        return {
            ...state,
            user: null,
            isLoggedIn: false,
            isLoading: false
        }
    },
    [LOGOUT]: (state, action) => {
        localStorage.clear();
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