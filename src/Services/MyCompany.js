import axios from "axios";

export function myCompanyNumber() {
    return axios.get(`http://localhost:5000/ByCompanyNumber/12649300`).then(response => {
        return response
    }).catch(error => {
        return error
    });
}

export function myCompanyName(companyName) {
    return axios.get(`http://localhost:5000/ByCompanyName/${companyName}`).then(response => {
        return response
    }).catch(error => {
        return error
    });
}