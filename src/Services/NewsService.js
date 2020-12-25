import axiosInterceptor from '../AxiosInterceptor/axiosInterceptor';

export function getAllNewsService() {
    return axiosInterceptor.get(`api/Article/All`);
}

export function newsDetails(newsId) {
    return axiosInterceptor.get(`api/Article/${newsId}`);
}