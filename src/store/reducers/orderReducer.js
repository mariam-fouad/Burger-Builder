import {
  ORDERING_BURGER_SUCCESS,
  ORDERING_BURGER_FAILED,
  ORDERING_BURGER_LOADING,
  INITIAL_ORDERED,
  FETCHING_ORDERS_LOADING,
  FETCHING_ORDERS_SUCCESS,
  FETCHING_ORDERS_FAILED,} from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
const intialState={
  orders:[],
  loading:false,
  ordered: false,
}
const orderingBurgerSuccees= (state,action)=>{
  const newOrder={
    ...action.order,
    id:action.id,
  };
  return updateObject (state,{
    orders: state.orders.concat(newOrder),
    loading:false,
    ordered:true,
  });
}

const orderingBurgerFailed= (state,action)=>{
  return updateObject (state,{loading:false,});
}
const initialOrdered = (state,action)=>{
  return updateObject(state,{ordered:false,})
}
const orderingBurrgerLoading = (state,action)=>{
  return updateObject (state,{loading:true,});
}
const fetchingOrdersLoading = (state,action)=>{
  return updateObject (state,{loading:true,});
}
const fetchingOrdersSuccess = (state,action)=>{
  return updateObject (state,{
    orders:action.orders,
    loading:false,
  });
}

const fetchingOrdersFailed = (state,action)=>{
  return updateObject (state,{loading:false,});
}
const reducer = (state=intialState,action)=>{
    switch (action.type){
      case ORDERING_BURGER_SUCCESS:return orderingBurgerSuccees(state,action);
      case ORDERING_BURGER_FAILED:return orderingBurgerFailed (state,action);
      case ORDERING_BURGER_LOADING:return orderingBurrgerLoading (state,action);
      case INITIAL_ORDERED:return initialOrdered (state,action);
      case FETCHING_ORDERS_LOADING:return fetchingOrdersLoading(state,action);
      case FETCHING_ORDERS_SUCCESS: return fetchingOrdersSuccess (state,action);
      case FETCHING_ORDERS_FAILED:return fetchingOrdersFailed (state,action);
      default:return state;
    }

}

export default reducer;
