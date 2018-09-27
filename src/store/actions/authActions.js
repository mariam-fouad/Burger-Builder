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
export const authStart= (email,password)=>{
  return dispatch=>{
    dispatch(authLoading());
    const authObject={
      email:email,
      password:password,
      returnSecureToken:true,
    }
    console.log(authObject);
    axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAHKdQmU1l-OX0c-xPEC3Bjh8p_gFM3V44',authObject)
      .then(response=>{
        console.log(response);
        dispatch(authSuccess());
      })
      .catch(error=>{
        console.log(error);
        dispatch(authFailed(error));
      })
  }
}
