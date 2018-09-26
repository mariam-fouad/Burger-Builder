import {
  ORDERING_BURGER_SUCCESS,
  ORDERING_BURGER_FAILED,
  ORDERING_BURGER_LOADING,
  INITIAL_ORDERED,} from './actionTypes';
import axios from '../../order-axios';
const orderingBurgerSuccees = (id , orderData)=>{
  return {
    type:ORDERING_BURGER_SUCCESS,
    id:id,
    order:orderData
  };
}

const orderingBurgerFailed = (error)=>{
  return {
    type:ORDERING_BURGER_FAILED,
    error:error,
  }
}

const orderingBurrgerLoading = ()=>{
  return {
    type:ORDERING_BURGER_LOADING,
  }
}
export const orderingBurger = (orderInfo)=>{
  return dispatch=>{
    dispatch(orderingBurrgerLoading());
    axios.post('/orders.json',orderInfo)
      .then (response =>{
        dispatch(orderingBurgerSuccees(response.data.name,orderInfo));

      })
      .catch (error =>{
        dispatch(orderingBurgerFailed(error));
      });
  }
};

export const intialOrdered =()=>{
  return {
    type:INITIAL_ORDERED,
  };
};
