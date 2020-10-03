import { GET_QUESTION_SUCCESS } from '../action/Category/CategoryAction';

const initialState = {
    category: []
};

const categoryMap = {
    [GET_QUESTION_SUCCESS]: (state, action) => {
        return {
            ...state,
            category: action.payload
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = categoryMap[action.type];
    return fn ? fn(state, action) : state;
}