import {
  ORDERING_BURGER_SUCCESS,
  ORDERING_BURGER_FAILED,
  ORDERING_BURGER_LOADING,
  INITIAL_ORDERED,
  FETCHING_ORDERS_LOADING,
  FETCHING_ORDERS_SUCCESS,
  FETCHING_ORDERS_FAILED,} from './actionTypes';
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
export const orderingBurger = (orderInfo,token)=>{
  return dispatch=>{
    dispatch(orderingBurrgerLoading());
    axios.post('/orders.json?auth='+token,orderInfo)
      .then (response =>{
        dispatch(orderingBurgerSuccees(response.data.name,orderInfo));

      })
      .catch (error =>{
        dispatch(orderingBurgerFailed(error));
      });
  }
};

const fetchingOrdersLoading= ()=>{
  return {
    type:FETCHING_ORDERS_LOADING,
  };
}

const fetchingOrdersFailed =(error)=>{
  return{
    type:FETCHING_ORDERS_FAILED,
    error:error,
  }
}
const fetchingOrdersSuccess=(orders)=>{
  return{
    type:FETCHING_ORDERS_SUCCESS,
    orders:orders,
  };
}
export const fetchingOrders = ()=>{
  return (dispatch,getState)=>{
    dispatch(fetchingOrdersLoading());
    axios.get('/orders.json?auth='+getState().authReducer.token)
      .then(response=>{
        const fetchedOrders=[];
        for (let key in response.data){
          fetchedOrders.push(
            {
              ...response.data[key],
              id:key,
            }
          );
        }
        dispatch(fetchingOrdersSuccess(fetchedOrders));
      })
      .catch(error =>{
        dispatch(fetchingOrdersFailed(error));
      });
  };
};

export const intialOrdered =()=>{
  return {
    type:INITIAL_ORDERED,
  };
};
