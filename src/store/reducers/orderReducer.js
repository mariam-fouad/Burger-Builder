import {
  ORDERING_BURGER_SUCCESS,
  ORDERING_BURGER_FAILED,
  ORDERING_BURGER_LOADING,
  INITIAL_ORDERED,} from '../actions/actionTypes';

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
      default:
        return state;
    }

}

export default reducer;
