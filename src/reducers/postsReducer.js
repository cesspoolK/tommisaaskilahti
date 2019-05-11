import {DELETE_PORTFOLIO, GET_PORTFOLIO, LOADING_PORTFOLIO, POSTS_ERROR} from "../actions/types";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING_PORTFOLIO:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_PORTFOLIO:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            };
        default:
            return state;
    }
}

