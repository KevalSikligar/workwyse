import jwt from 'jsonwebtoken';
import { get } from 'lodash';
import { createBrowserHistory } from "history";

export const ONE_OFF = [
    {
        value: 0,
        label: "Please select a One Off rate"
    },
    {
        value: 1,
        label: "£250 - £1,000"
    },
    {
        value: 2,
        label: "£1,000 - £2,000"
    },
    {
        value: 3,
        label: "£2,000 - £5,000"
    },
    {
        value: 4,
        label: "£5,000 - £10,000+"
    },
]

export const MONTHLY = [
    {
        value: 0,
        label: "Please select a Monthly rate"
    },
    {
        value: 1,
        label: "£250 - £1,000"
    },
    {
        value: 2,
        label: "£1,000 - £2,000"
    },
    {
        value: 3,
        label: "£2,000 - £5,000"
    },
    {
        value: 4,
        label: "£5,000 - £10,000+"
    },
]

export const COMPANY_SIZE = [
    {
        value: 1,
        label: "1 - 10"
    },
    {
        value: 2,
        label: "11 - 50"
    },
    {
        value: 3,
        label: "51 - 100"
    },
    {
        value: 4,
        label: "101 - 200"
    },
    {
        value: 5,
        label: "201 - 500"
    },
    {
        value: 6,
        label: "500 +"
    },
]

export const COMPANY_SCALE = [
    {
        value: 1,
        label: "Local"
    },
    {
        value: 2,
        label: "National"
    },
    {
        value: 3,
        label: "Global"
    },
]

export function userRole() {
    return getUserDetail('roles')
}

export function companyId() {
    return getUserDetail('companyId')
}

export const SECRET_KEY = "testing1234dfkshdkldf"

export function setUserDetail(data) {
    var token = jwt.sign(data, SECRET_KEY);
    localStorage.setItem("token", token)
}

export function getUserDetail(key = false) {
    var token = localStorage.getItem("token")
    if (token) {
        var decoded = jwt.verify(token, SECRET_KEY);
        if (key) {
            return get(decoded, key, null)
        } else {
            return decoded
        }
    }
}

export const bytesToSize = (bytes) => {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

export const history = createBrowserHistory()