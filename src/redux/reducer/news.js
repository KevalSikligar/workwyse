import { GET_ALL_NEWS_ERROR, GET_ALL_NEWS_SUCCESS } from '../action/News/NewsAction';

const initialState = {
    news: []
};

const newsMap = {
    [GET_ALL_NEWS_ERROR]: (state, action) => {
        return {
            ...state,
            news: action.payload
        }
    },
    [GET_ALL_NEWS_SUCCESS]: (state, action) => {
        return {
            ...state,
            news: action.payload
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = newsMap[action.type];
    return fn ? fn(state, action) : state;
}