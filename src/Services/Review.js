import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';

export function postReview() {
    return axiosInterceptor.post(`api/Review`);
}

export function editReview() {
    return axiosInterceptor.put(`api/Review`);
}

export function getReviewByBuyerId(buyerId) {
    return axiosInterceptor.post(`api/Review/Buyer/${buyerId}`);
}

export function getReviewBySellerId() {
    return axiosInterceptor.get(`api/Review/Seller/19`);
}

