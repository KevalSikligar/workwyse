import { GET_HEADER_KEY, GET_HEADER_KEY_NULL, SET_REQUESTS } from '../action/Headers/HeadersAction';

const initialState = {
    key: '',
    requests: []
};

const headerMap = {
    [GET_HEADER_KEY]: (state, action) => {
        return {
            ...state,
            key: action.payload
        }
    },
    [GET_HEADER_KEY_NULL]: (state, action) => {
        return {
            ...state,
            key: action.payload
        }
    },
    [SET_REQUESTS]: (state, action) => {
        return {
            ...state,
            requests: action.payload
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = headerMap[action.type];
    return fn ? fn(state, action) : state;
}