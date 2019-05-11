import { Create, Read, Update, Delete } from "../services/httpServices";
import axios from 'axios';
import {
    CREATE_PORTFOLIO,
    GET_PORTFOLIO,
    MODIFY_PORTFOLIO,
    DELETE_PORTFOLIO,
    POSTS_ERROR,
    LOADING_PORTFOLIO
} from "./types";

export const getPosts = (url) => dispatch => {
    dispatch({
        type: LOADING_PORTFOLIO
    });
    axios.get('http://localhost:5000' + url)
        .then(res => {
            dispatch ({
                type: GET_PORTFOLIO,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch ({
                type: POSTS_ERROR,
                payload: err.response.data
            })
        })
};

export const getPostsById = (url, id) => dispatch => {
    dispatch({
        type: LOADING_PORTFOLIO
    });
    axios.get('http://localhost:5000' + url + id)
        .then(res => {
            dispatch ({
                type: GET_PORTFOLIO,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch ({
                type: POSTS_ERROR,
                payload: err.response.data
            })
        })
};


export const deletePost = (id) => dispatch => {
    axios.get('http://localhost:5000/api/posts/delete/' + id)
        .then(res => {
            dispatch({
                type: DELETE_PORTFOLIO,
                payload: res.data
            })
        })
};
