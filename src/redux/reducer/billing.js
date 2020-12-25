import { GET_PRICE_ID } from '../action/Billing/BillingAction';

const initialState = {
    key: ''
};

const billingMap = {
    [GET_PRICE_ID]: (state, action) => {
        return {
            ...state,
            key: action.payload
        }
    }
}

export default function reducer(state = initialState, action = {}) {
    const fn = billingMap[action.type];
    return fn ? fn(state, action) : state;
}