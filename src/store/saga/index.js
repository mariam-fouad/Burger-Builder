import * as actionTypes from '../actions/actionTypes';
import {takeEvery} from 'redux-saga/effects';
import * as authSaga from './authSaga';

export function* watchAuth (){
    yield takeEvery (actionTypes.AUTH_INITIAL_SIGNOUT, authSaga.authSignout);
    yield takeEvery (actionTypes.AUTH_CHECK_TIMEOUT, authSaga.authCheckTimeout);
    yield takeEvery (actionTypes.AUTH_USER, authSaga.authUser);
}
