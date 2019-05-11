import { CLOSE_DRAWER, OPEN_DRAWER } from "./types";

export const closeDrawer = () => dispatch => {
    dispatch ({
        type: CLOSE_DRAWER,
    })
};

export const openDrawer = () => dispatch => {
    dispatch ({
        type: OPEN_DRAWER
    })
};
