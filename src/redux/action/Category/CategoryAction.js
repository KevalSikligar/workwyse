export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS';
export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR';

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