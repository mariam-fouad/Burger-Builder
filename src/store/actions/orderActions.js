import {ORDERING_BURGER_SUCCESS,ORDERING_BURGER_FAILED} from './actionTypes';
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

export const orderingBurger = (orderInfo)=>{
  return dispatch=>{
    axios.post('/orders.json',orderInfo)
      .then (response =>{
        dispatch(orderingBurgerSuccees(response.data,orderInfo));

      })
      .catch (error =>{
        dispatch(orderingBurgerFailed(error));
      });
  }
}
