import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_SIGNOUT,
  AUTH_INITIAL_SIGNOUT,
  SET_AUTH_REDIRECT_PATH,
} from './actionTypes';
import axios from 'axios';

const authLoading = ()=>{
  return {
    type:AUTH_LOADING,
  };
}

export const setAuthRedirectPath =(path)=>{
  return{
    type:SET_AUTH_REDIRECT_PATH,
    path:path,
  };
};
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
    type:AUTH_INITIAL_SIGNOUT
  }
}

export const authSignoutStarted = ()=>{
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
        const expiryData = new Date (new Date().getTime()+ (response.data.expiresIn*1000));
        localStorage.setItem('expiryData',expiryData);
        localStorage.setItem('token',response.data.idToken);
        localStorage.setItem('userId',response.data.localId);
        dispatch(authSuccess(response.data.idToken,response.data.localId));
        dispatch (signoutTimeout(response.data.expiresIn));
      })
      .catch(error=>{
        console.log(error);
        dispatch(authFailed(error.response.data.error.message));
      })
  }
}

export const recoverAuthData = ()=>{
  return dispatch=>{
    const token = localStorage.getItem('token');
    if(token){
      const expiryData = new Date (localStorage.getItem('expiryData'));
      const userId = localStorage.getItem('userId');
      if (expiryData > new Date()){
        dispatch(authSuccess(token,userId));
        dispatch(signoutTimeout((expiryData.getTime() - new Date().getTime()) / 1000) );
      }
      else{
        dispatch (authSignout());
      }
    }
    else{
      dispatch (authSignout());
    }

  }
}
