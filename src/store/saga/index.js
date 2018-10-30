import * as actionTypes from '../actions/actionTypes';
import {takeEvery} from 'redux-saga/effects';
import {authSignout} from './authSaga';

export function* watchAuth (){
    yield takeEvery (actionTypes.AUTH_INITIAL_SIGNOUT, authSignout);
}
