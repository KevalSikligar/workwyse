import { CLEAR_SIGN_UP_DATA, GET_ALL_COMPANY_DATA, GET_ALL_COMPANY_DATA_ERROR } from "../action/SignUp/SignUpAction";

const initialState = {
    companyDetails: [],
    key: ''
};

const signUpMap = {
    [GET_ALL_COMPANY_DATA]: (state, action) => {
        return {
            ...state,
            companyDetails: action.payload,
            [action.key]: action.payload
        }
    },
    [GET_ALL_COMPANY_DATA_ERROR]: (state, action) => {
        return {
            ...state,
            companyDetails: action.payload
        }
    },
    [CLEAR_SIGN_UP_DATA]: (state, action) => {
        return {
            ...state,
            categoryId: '',
            categoryName: null,
            postCodeValue: ""
        }
    },
}

export default function reducer(state = initialState, action = {}) {
    const fn = signUpMap[action.type];
    return fn ? fn(state, action) : state;
}