import {DELETE_PORTFOLIO} from "../actions/types";

const initialState = {
    message: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case DELETE_PORTFOLIO:
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
}
