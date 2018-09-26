import burgerReducer from './burgerReducer';
import orderReducer from './orderReducer';
const reducer= (state={},action)=>{
  return {
    burgerReducer:burgerReducer(state.burgerReducer,action),
    orderReducer: orderReducer(state.orderReducer,action),
  };
}
export default reducer;
