import axiosInterceptor from "../../AxiosInterceptor/axiosInterceptor";

export function adminAddNews(newsBody) {
    return axiosInterceptor.post(`api/Article`, newsBody);
}

export function adminEditNews(newsBody) {
    return axiosInterceptor.put(`api/Article`, newsBody);
}