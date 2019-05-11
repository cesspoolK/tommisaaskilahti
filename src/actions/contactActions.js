import { CLOSE_CONTACT, OPEN_CONTACT } from "./types";

export const openContact = () => dispatch => {
    dispatch ({
        type: OPEN_CONTACT
    })
};

export const closeContact = () => dispatch => {
    dispatch ({
        type: CLOSE_CONTACT
    })
};
