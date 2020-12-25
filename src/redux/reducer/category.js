import {
    GET_QUESTION_SUCCESS,
    GET_KEY, GET_POP_UP_CATEGORY_ACTION_KEY
} from '../action/Category/CategoryAction';

const initialState = {
    category: [],
    key: ''
};

const categoryMap = {
    [GET_QUESTION_SUCCESS]: (state, action) => {
        return {
            ...state,
            category: action.payload
        }
    },
    [GET_KEY]: (state, action) => {
        return {
            ...state,
            key: action.payload
        }
    },
    [GET_POP_UP_CATEGORY_ACTION_KEY]: (state, action) => {
        return {
            ...state,
            categoryKey: action.payload
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = categoryMap[action.type];
    return fn ? fn(state, action) : state;
}