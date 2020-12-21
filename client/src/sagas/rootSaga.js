import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {registerSaga, loginSaga} from './authSagas';
import {headerRequest} from './userSaga';
import {
    createProductSaga,
    getProductsSaga,
    getProductByIdSaga,
    deleteProductSaga,
    updateProductSaga
} from './productsSaga';

function* rootSaga() {
    yield takeLatest(ACTION.AUTH_ACTION_REGISTER, registerSaga);
    yield takeLatest(ACTION.AUTH_ACTION_LOGIN, loginSaga);
    yield takeLatest(ACTION.HEADER_REQUEST_AUTHORIZE, headerRequest);
    yield takeLatest(ACTION.CREATE_PRODUCT_ACTION, createProductSaga);
    yield takeLatest(ACTION.GET_PRODUCTS_ACTION, getProductsSaga);
    yield takeLatest(ACTION.GET_PRODUCT_BY_ID_ACTION, getProductByIdSaga);
    yield takeLatest(ACTION.UPDATE_PRODUCT_ACTION, updateProductSaga);
    yield takeLatest(ACTION.DELETE_PRODUCT_ACTION, deleteProductSaga);
}

export default rootSaga;