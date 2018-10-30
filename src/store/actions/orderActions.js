import {
  ORDERING_BURGER_START,
  ORDERING_BURGER_SUCCESS,
  ORDERING_BURGER_FAILED,
  ORDERING_BURGER_LOADING,
  INITIAL_ORDERED,
  FETCHING_ORDERS_LOADING,
  FETCHING_ORDERS_SUCCESS,
  FETCHING_ORDERS_FAILED,} from './actionTypes';
import axios from '../../order-axios';
export const orderingBurgerSuccees = (id , orderData)=>{
  return {
    type:ORDERING_BURGER_SUCCESS,
    id:id,
    order:orderData
  };
}

export const orderingBurgerFailed = (error)=>{
  return {
    type:ORDERING_BURGER_FAILED,
    error:error,
  }
}

export const orderingBurrgerLoading = ()=>{
  return {
    type:ORDERING_BURGER_LOADING,
  }
}
export const orderingBurger = (orderInfo,token)=>{
  return {
    type: ORDERING_BURGER_START,
    orderInfo:orderInfo,
    token: token,
  }
};

export const fetchingOrdersLoading= ()=>{
  return {
    type:FETCHING_ORDERS_LOADING,
  };
}

export const fetchingOrdersFailed =(error)=>{
  return{
    type:FETCHING_ORDERS_FAILED,
    error:error,
  }
}
export const fetchingOrdersSuccess=(orders)=>{
  return{
    type:FETCHING_ORDERS_SUCCESS,
    orders:orders,
  };
}
export const fetchingOrders = ()=>{
  return (dispatch,getState)=>{
    dispatch(fetchingOrdersLoading());
    const queryParm = '?auth='+getState().authReducer.token +'&orderBy="userId"&equalTo="'+getState().authReducer.userId+'"';
    axios.get('/orders.json'+queryParm)
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
