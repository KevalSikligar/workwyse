export const GET_ALL_NEWS_SUCCESS = 'GET_ALL_NEWS_SUCCESS';
export const GET_ALL_NEWS_ERROR = 'GET_ALL_NEWS_ERROR';

export function getAllNews(data) {
    return {
        type: GET_ALL_NEWS_SUCCESS,
        payload: data
    }
}

export function getAllNewsError(error) {
    return {
        type: GET_ALL_NEWS_ERROR,
        payload: error
    }
}