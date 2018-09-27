import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
} from '../actions/actionTypes';

const initialState = {
  token:null,
  userId:null,
  error:null,
  loading:false,
};

const reducer = (state,action){
  switch (action.type) {
    
    default:return state;
  }
}

export default reducer;
