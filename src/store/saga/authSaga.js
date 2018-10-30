import * as authActions from '../actions/authActions';
import {delay} from 'redux-saga';
import {put} from 'redux-saga/effects';

export function* authSignout(action){
    yield localStorage.removeItem('expiryData');
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');

    yield put(authActions.authSignoutStarted());
}

export function* authCheckTimeout (action){
    yield delay(action.timeout *1000);
    yield put(authActions.authSignout());
}