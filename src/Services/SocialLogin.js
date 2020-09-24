import axios from 'axios';

// Change redirect uri when uploading on live

export function SignInWithLinkedIn(code) {
    //local
    return axios.get(`http://localhost:3000/home/` + code).then(response => {
        // live
        // return axios.get(`http://clientapp.narola.online:1094/home/` + code).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        localStorage.setItem('UserDetails', response.data.response.localizedFirstName + " " + response.data.response.localizedLastName)
        return response.data;
    }).catch(error => {
        return error;
    });
}