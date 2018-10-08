import reducer from './authReducer';
import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_SIGNOUT,
  SET_AUTH_REDIRECT_PATH
} from '../actions/actionTypes';

import {initialState} from './authReducer.js'

describe ('authReducer',()=>{

  it ('should initial the state with default state',()=>{
    expect(reducer(undefined,{})).toEqual(initialState);
  });

  it ('should update the state with token and userId',()=>{
    expect(reducer(initialState,{
      type:AUTH_SUCCESS,
      token:'token',
      userId:'userId',
    })).toEqual({
      ...initialState,
      token:'token',
      userId:'userId',
    });
    
  });

});
