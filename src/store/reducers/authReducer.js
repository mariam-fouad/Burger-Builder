import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_SIGNOUT,
  SET_AUTH_REDIRECT_PATH
} from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'
const initialState = {
  token:null,
  userId:null,
  error:null,
  loading:false,
  authRedirectPath:"/",
};

const setAuthRedirectPath=(state,action)=>{
  return updateObject(state,{authRedirectPath:action.path});
}
const authLoading = (state,action)=>{
  return updateObject (state,{loading:true,error:null});
};

const authSuccess =(state,action)=>{
  return updateObject(state,{
    loading:false,
    error:null,
    token:action.token,
    userId:action.userId,});
};

const authFailed = (state,action)=>{
  return updateObject (state,{
    loading:false,
    error:action.errorMsg,
  });
}

const authSignout=(state,action)=>{
  return updateObject (state,{token:null,userId:null});
}
const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case AUTH_LOADING : return authLoading (state,action);
    case AUTH_SUCCESS : return authSuccess(state,action);
    case AUTH_FAILED  : return authFailed (state,action);
    case AUTH_SIGNOUT : return authSignout (state,action);
    case SET_AUTH_REDIRECT_PATH : return setAuthRedirectPath (state,action);
    default:return state;
  }
}

export default reducer;
