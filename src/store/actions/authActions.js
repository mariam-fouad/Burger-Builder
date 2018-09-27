import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
} from './actionTypes';
import axios from 'axios';

const authLoading = ()=>{
  return {
    type:AUTH_LOADING,
  };
}

const authSuccess= ()=>{
  return {
    type:AUTH_SUCCESS
  }
}

const authFailed = (error)=>{
  return {
    type:AUTH_FAILED,
    error:error,
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
        dispatch(authSuccess());
      })
      .catch(error=>{
        console.log(error);
        dispatch(authFailed(error.response.data.error.message));
      })
  }
}
