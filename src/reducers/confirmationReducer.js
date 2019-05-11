import { OPEN_CONFIRMATION, CLOSE_CONFIRMATION } from "../actions/types";

const initialState = {
    confirmationOpen: false
};

export default function (state = initialState, action) {
    switch(action.type) {
        case OPEN_CONFIRMATION:
            return {
                ...state,
                confirmationOpen: true
            };
        case CLOSE_CONFIRMATION:
            return initialState;
        default:
            return state;
    }
}
