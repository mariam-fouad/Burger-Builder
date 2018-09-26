import {
  ORDERING_BURGER_SUCCESS,
  ORDERING_BURGER_FAILED,
  ORDERING_BURGER_LOADING,
  INITIAL_ORDERED,
  FETCHING_ORDERS_LOADING,
  FETCHING_ORDERS_SUCCESS,
  FETCHING_ORDERS_FAILED,} from '../actions/actionTypes';

const intialState={
  orders:[],
  loading:false,
  ordered: false,
}

const reducer = (state=intialState,action)=>{
    switch (action.type){
      case ORDERING_BURGER_SUCCESS:
        const newOrder={
          ...action.order,
          id:action.id,
        }
        return {
          ...state,
          orders: state.orders.concat(newOrder),
          loading:false,
          ordered:true,
        };
      case ORDERING_BURGER_FAILED:
        return {
          ...state,
          loading:false,
        };
      case ORDERING_BURGER_LOADING:
        return{
          ...state,
          loading:true,
        }
      case INITIAL_ORDERED:
        return{
          ...state,
          ordered:false,
        }
      case FETCHING_ORDERS_LOADING:
        return {
          ...state,
          loading:true,
        };
      case FETCHING_ORDERS_SUCCESS:
        return{
          ...state,
          orders:action.orders,
          loading:false,
        };
      case FETCHING_ORDERS_FAILED:
        return{
          ...state,
          loading:false,
        }
      default:
        return state;
    }

}

export default reducer;
