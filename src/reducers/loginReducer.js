import { CLOSE_LOGIN, OPEN_LOGIN } from "../actions/types";

const initialState = {
    loginOpen: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case OPEN_LOGIN:
            return {
                ...state,
                loginOpen: true,
            };
        case CLOSE_LOGIN:
            return initialState;
        default:
            return state;
    }
}
