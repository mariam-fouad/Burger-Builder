import {
    AUTH_LOADING,
    AUTH_SUCCESS,
    AUTH_FAILED,
    AUTH_SIGNOUT,
    SET_AUTH_REDIRECT_PATH,
  } from '../actions/actionTypes';

  import {put} from 'redux-saga/effects';

export function* authSignout(action){
    yield localStorage.removeItem('expiryData');
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('userId');

    yield put({
          type:AUTH_SIGNOUT,
        });
}