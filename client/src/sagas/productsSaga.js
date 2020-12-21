import {put, select} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import * as restController from '../api/rest/restController';
import remove from 'lodash/remove';
import history from "../browserHistory";

export function* createProductSaga(action){
    yield put({type: ACTION.CREATE_PRODUCT_REQUEST});
    try{
        const {data} = yield restController.createProduct(action.data);
        yield put({type: ACTION.CREATE_PRODUCT_SUCCESS, data: data});
    }
    catch (e) {
        yield put({type: ACTION.CREATE_PRODUCT_ERROR, error: e.response});
    }
}

export  function* getProductsSaga(action) {
    try{
        const { data } = yield restController.getProducts(action.data);
        yield put({type: ACTION.GET_PRODUCTS_SUCCESS, products: data.products, haveMore: data.haveMore});
    }
    catch (e) {
        yield put({type: ACTION.PRODUCT_ERROR, error: e.response});
    }
}

export function* getProductByIdSaga(action){
    yield put({type: ACTION.GET_PRODUCT_REQUEST});
    try{
        const {data} = yield restController.getProductById(action.id);
        yield put({type: ACTION.GET_PRODUCT_BY_ID_SUCCESS, data: data});
    }
    catch (e) {
        yield put({type: ACTION.GET_PRODUCT_ERROR, error: e.response});
    }
}

export function* updateProductSaga(action) {
    yield put({type: ACTION.UPDATE_PRODUCT_REQUEST});
    try {
        const {data} = yield restController.updateProduct(action.data, action.id);
        history.replace('/');
        yield put({type: ACTION.UPDATE_STORE_AFTER_UPDATE_PRODUCT, data: data});
    } catch (e) {
        yield put({type: ACTION.UPDATE_PRODUCT_ERROR, error: e.response});
    }
}

export function* deleteProductSaga(action) {
    try {
        yield restController.deleteProduct(action.id);
        const {products} = yield select(state => state.productsStore);
        const newProductsList = remove(products, (product) => action.data.id !== product.id);
        yield put({type: ACTION.DELETE_PRODUCT_SUCCESS, data: newProductsList});
    } catch (err) {
        yield put({type: ACTION.PRODUCT_ERROR, error: err.response});
    }
}