import {takeLatest} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {registerSaga} from './authSagas';

function* rootSaga() {
    yield  takeLatest(ACTION.AUTH_ACTION_REGISTER, registerSaga);
}

export default rootSaga;