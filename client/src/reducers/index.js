import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";
import getProductsReducer from "./getProductsReducer";
import getProductByIdReducer from "./getProductByIdReducer";
import updateProductReducer from "./updateProductReducer";
import createProductReducer from "./createProductReducer";
import getUserReducer from './userReducer';

const appReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    userStore: getUserReducer,
    productStore: createProductReducer,
    productsStore: getProductsReducer,
    selectProductStore: getProductByIdReducer,
    updatedProductStore: updateProductReducer,
});

export default appReducer;