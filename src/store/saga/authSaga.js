import * as authActions from '../actions/authActions';

import {put} from 'redux-saga/effects';

export function* authSignout(action){
    yield localStorage.removeItem('expiryData');
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');

    yield put(authActions.authSignoutStarted());
}