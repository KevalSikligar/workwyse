export const GET_ALL_COMPANY_DATA = 'GET_ALL_COMPANY_DATA';
export const GET_ALL_COMPANY_DATA_ERROR = 'GET_ALL_COMPANY_DATA_ERROR';
export const CLEAR_SIGN_UP_DATA = 'CLEAR_SIGN_UP_DATA';

export function getAllCompanyDetails(key, data) {
    return {
        type: GET_ALL_COMPANY_DATA,
        payload: data,
        key: key
    }
}

export function clearSignupData() {
    return {
        type: CLEAR_SIGN_UP_DATA
    }
}