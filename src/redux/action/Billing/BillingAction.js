export const GET_PRICE_ID = 'GET_PRICE_ID';

export function getPriceId(key) {
    return {
        type: GET_PRICE_ID,
        payload: key
    }
}
