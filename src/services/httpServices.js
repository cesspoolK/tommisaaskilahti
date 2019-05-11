import axios from 'axios';
import config from './config';

export const Create = (api, payload) => {
    return axios.post(config.baseUrl + api, payload)
        .then(response => { return response })
        .catch(err => console.log(err))
};

export const Read = (api) => {
    return axios.get(config.baseUrl + api)
        .then(response => { return response })
        .catch(err => console.log(err))
};

export const Update = (api, payload) => {
    return axios.put(config.baseUrl + api, payload)
        .then(response => { return response })
        .catch(err => console.log(err))
};

export const Delete = (api) => {
    return axios.delete(config.baseUrl + api)
        .then(response => { return response })
        .catch(err => console.log(err))
};

function getOptions(){
    let options = {};
    if(localStorage.getItem('token')){
        options.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return options;
}
