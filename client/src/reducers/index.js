import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";

const appReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
});

export default appReducer;