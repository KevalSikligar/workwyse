export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';
export const GET_KEY = 'GET_KEY';
export const GET_POP_UP_CATEGORY_ACTION_KEY = 'GET_POP_UP_CATEGORY_ACTION_KEY';

export function getQuestion(data) {
    return {
        type: GET_QUESTION_SUCCESS,
        payload: data
    }
};

export function getQuestionError(error) {
    return {
        type: GET_QUESTION_ERROR,
        payload: error
    }
}

export function getKey(key) {
    return {
        type: GET_KEY,
        payload: key
    }
}

export function getPopUpCategoryKey(key) {
    return {
        type: GET_POP_UP_CATEGORY_ACTION_KEY,
        payload: key
    }
}