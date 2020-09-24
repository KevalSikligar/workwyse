// require packages
const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const client_id = "78g9t5dnyhf0z3"
const client_secret = "PtI7OMqL1fIMwLst"

app.use(express.json());
app.use(bodyParser.json({ limit: '500mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(cors());



const linkiApi = (req, res) => {
    axios.get(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&code=${req.params.code}&redirect_uri=http://localhost:1094/home`).then(response => {
        console.log('response => ', response);
        if (response.status === 200) {
            axios.get(`https://api.linkedin.com/v2/me`, { headers: { "Authorization": `Bearer ${response.data.access_token}` } }).then(userDetails => {
                console.log('response in linek => ', userDetails);
                res.status(200).json({ "response": userDetails.data, "access_token": response.data.access_token })
            }).catch(then => {
                console.log('then => ', then);
            })
        }
    }).catch(err => {
        console.log('err => ', err);
    })
}


app.get('/home/:code', linkiApi)

const port = 3000;
var server = null;

server = http.createServer(app)
server.listen(port)
