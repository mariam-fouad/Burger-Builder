import * as authActions from '../actions/authActions';
import {delay} from 'redux-saga';
import {put} from 'redux-saga/effects';
import axios from 'axios';

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

export function* authUser (action){
    yield put (authActions.authLoading());

    const authObject={
        email:action.email,
        password:action.password,
        returnSecureToken:true,
    }
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAHKdQmU1l-OX0c-xPEC3Bjh8p_gFM3V44';
    if (!action.isSignUp){
        url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAHKdQmU1l-OX0c-xPEC3Bjh8p_gFM3V44';
    }

    try {
        const response = yield axios.post(url,authObject);
        const expiryData = yield new Date (new Date().getTime()+ (response.data.expiresIn*1000));
        yield localStorage.setItem('expiryData',expiryData);
        yield localStorage.setItem('token',response.data.idToken);
        yield localStorage.setItem('userId',response.data.localId);
        yield put (authActions.authSuccess(response.data.idToken,response.data.localId));
        yield put (authActions.signoutTimeout(response.data.expiresIn));
        
    } catch (error) {
        yield put (authActions.authFailed(error.response.data.error.message));
    }
    
      
}