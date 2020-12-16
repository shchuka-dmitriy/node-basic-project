import {put} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import React from 'react';
import * as restController from '../api/rest/restController';

export function* registerSaga(action){
    yield put({type: ACTION.AUTH_ACTION_REQUEST});
    try{
        const {data} = yield restController.registerRequest(action.data);
        yield put({type: ACTION.AUTH_ACTION_SUCCESS, data: data});
    }
    catch (e) {
        console.log("e");
        console.log(e);
        yield put({type: ACTION.AUTH_ACTION_ERROR, error: e.response});
    }
}