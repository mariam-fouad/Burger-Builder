import {
  AUTH_RECOVER_STATE,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_SIGNOUT,
  AUTH_USER,
  AUTH_CHECK_TIMEOUT,
  AUTH_INITIAL_SIGNOUT,
  SET_AUTH_REDIRECT_PATH,
} from './actionTypes';

export const authLoading = ()=>{
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
export const authSuccess= (token,userId)=>{
  return {
    type:AUTH_SUCCESS,
    token:token,
    userId:userId,
  }
}

export const authFailed = (error)=>{
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
export const signoutTimeout = (timeout)=>{
  return {
    type: AUTH_CHECK_TIMEOUT,
    timeout:timeout,
  }
}

export const authStart= (email,password,isSignUp)=>{
  return {
    type: AUTH_USER,
    email: email,
    password : password,
    isSignUp : isSignUp,
  }
}

export const recoverAuthData = ()=>{
  return {
    type : AUTH_RECOVER_STATE
  }
}
