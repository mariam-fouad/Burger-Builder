import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_SIGNOUT,
} from './actionTypes';
import axios from 'axios';

const authLoading = ()=>{
  return {
    type:AUTH_LOADING,
  };
}

const authSuccess= (token,userId)=>{
  return {
    type:AUTH_SUCCESS,
    token:token,
    userId:userId,
  }
}

const authFailed = (error)=>{
  return {
    type:AUTH_FAILED,
    errorMsg:error,
  }
}

export const authSignout= ()=>{
  return {
    type:AUTH_SIGNOUT
  }
}
const signoutTimeout = (timeout)=>{
  return dispatch=>{
    (setTimeout(function () {
      dispatch(authSignout());
    }, timeout*1000));
  }
}

export const authStart= (email,password,isSignUp)=>{
  return dispatch=>{
    dispatch(authLoading());
    const authObject={
      email:email,
      password:password,
      returnSecureToken:true,
    }
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAHKdQmU1l-OX0c-xPEC3Bjh8p_gFM3V44';
    if (!isSignUp){
      url='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAHKdQmU1l-OX0c-xPEC3Bjh8p_gFM3V44';
    }
    axios.post(url,authObject)
      .then(response=>{
        console.log(response);
        dispatch(authSuccess(response.data.idToken,response.data.localId));
        dispatch (signoutTimeout(response.data.expiresIn));
      })
      .catch(error=>{
        console.log(error);
        dispatch(authFailed(error.response.data.error.message));
      })
  }
}
