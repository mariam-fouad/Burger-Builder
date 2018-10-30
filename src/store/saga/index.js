import * as actionTypes from '../actions/actionTypes';
import {takeEvery} from 'redux-saga/effects';
import * as authSaga from './authSaga';
import * as burgerSaga from './burgerSaga';

export function* watchAuth (){
    yield takeEvery (actionTypes.AUTH_INITIAL_SIGNOUT, authSaga.authSignout);
    yield takeEvery (actionTypes.AUTH_CHECK_TIMEOUT, authSaga.authCheckTimeout);
    yield takeEvery (actionTypes.AUTH_USER, authSaga.authUser);
    yield takeEvery (actionTypes.AUTH_RECOVER_STATE , authSaga.recoverAuthData);
}

export function* watchBurger (){
    yield takeEvery (actionTypes.START_INIT_INGREDIENT , burgerSaga.initialIngredient);
}