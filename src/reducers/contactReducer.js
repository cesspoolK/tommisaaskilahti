import { CLOSE_CONTACT, OPEN_CONTACT } from "../actions/types";

const initialState = {
    contactOpen: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case OPEN_CONTACT:
            return {
                ...state,
                contactOpen: true,
            };
        case CLOSE_CONTACT:
            return initialState;
        default:
            return state;
    }
}
