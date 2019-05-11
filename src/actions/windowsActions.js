import { OPEN_CONFIRMATION, CLOSE_CONFIRMATION } from "./types";

export const openConfirmation = () => dispatch => {
    dispatch ({
        type: OPEN_CONFIRMATION
    })
};

export const closeConfirmation = () => dispatch => {
    dispatch ({
        type: CLOSE_CONFIRMATION
    })
};
