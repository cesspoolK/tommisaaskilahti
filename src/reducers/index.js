import { combineReducers } from "redux";
import drawerReducer from './drawerReducer';
import contactReducer from './contactReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import postsReducer from './postsReducer';
import confirmationReducer from './confirmationReducer';
import deleteReducer from './deleteReducer';

const rootReducer = combineReducers({
    drawer: drawerReducer,
    contact: contactReducer,
    errors: errorReducer,
    auth: authReducer,
    posts: postsReducer,
    confirmation: confirmationReducer,
    delete: deleteReducer,
});

export default rootReducer;
