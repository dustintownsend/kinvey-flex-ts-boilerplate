require('./dist/bundle');
require('dotenv').config();
const request = require('request');
const app = require('express')();

const pkgJson = require('./package.json');

const LOCAL_FLEX_URL = 'http://localhost:10001';
const {
    KINVEY_APP_ID,
    KINVEY_APP_SECRET,
    KINVEY_BAAS_URL,
    KINVEY_API_VERSION,
    KINVEY_AUTH_HEADER,
    KINVEY_USER_NAME,
    KINVEY_USER_ID
} = process.env;
const KINVEY_CLIENT_APP_VERSION = pkgJson.version;
const FLEX_LOCAL_HEADERS = {
    'X-Kinvey-App-Metadata' : JSON.stringify({
        _id: KINVEY_APP_ID,
        appsecret: KINVEY_APP_SECRET,
        baasUrl: KINVEY_BAAS_URL,
    }),
    'X-Kinvey-Original-Request-Headers': JSON.stringify({
        "x-kinvey-api-version": KINVEY_API_VERSION || "3",
        authorization: KINVEY_AUTH_HEADER,
        "x-kinvey-client-app-version": KINVEY_CLIENT_APP_VERSION || "1.0.0" }),
    'X-Kinvey-Username': KINVEY_USER_NAME,
    'X-Kinvey-User-Id': KINVEY_USER_ID,
    'Content-Type': 'application/json',
    // 'X-Auth-Key': 'sharedSecret'
    };

app.get('/_flexFunctions/*', (req, res) => {
    const { params, path, query } = req;
    const { body } = query;
    const url = `${LOCAL_FLEX_URL}${path}`;
    flexReq(url, 'POST', res, body);
});

app.get('/_auth/*', (req, res) => {
    const { params, path, query } = req;
    const { body } = query;
    const url = `${LOCAL_FLEX_URL}${path}`;
    flexReq(url, 'POST', res, body);
});

app.get('/:serviceObject', (req, res) => {
    const { params } = req;
    const { serviceObject } = params;
    const url = `${LOCAL_FLEX_URL}/${serviceObject}`;
    flexReq(url, 'GET', res);
});

app.get('/:serviceObject/_count', (req, res) => {
    const { params } = req;
    const { serviceObject } = params;
    const url = `${LOCAL_FLEX_URL}/${serviceObject}/_count`;
    flexReq(url, 'GET', res);
});

app.get('/:serviceObject/:id', (req, res) => {
    const { params } = req;
    const { serviceObject, id } = params;
    const url = `${LOCAL_FLEX_URL}/${serviceObject}/${id}`;
    flexReq(url, 'GET', res);
});

const flexReq = (url, method, res, body = null) => {
    const headers = {
        ...res.headers,
        ...FLEX_LOCAL_HEADERS,
    };
    const options: any = { 
        url,
        method,
        headers,
    };
    if (body) options.body = body;
    return request(options).pipe(res);
};

const serviceDiscovery = () => {
    request.post(`${LOCAL_FLEX_URL}/_command/discover`, (err, response, body) => {
        const json = JSON.parse(body);
        const { dataLink, businessLogic, auth } = json;

        dataLink.serviceObjects.forEach((serviceObject) => {
            // console.log(serviceObject);
            const url = `${LOCAL_FLEX_URL}/${serviceObject}`;
            console.log(url);
        });

        businessLogic.handlers.forEach((handler) => {
            const url = `${LOCAL_FLEX_URL}/_flexFunctions/${handler}`;
            console.log(url);
        });

        auth.handlers.forEach((handler) => {
            const url = `${LOCAL_FLEX_URL}/_auth/${handler}`;
            console.log(url);
        });
    });
}

serviceDiscovery();

app.listen(9999, () => console.log('Listening on port 9999!'));