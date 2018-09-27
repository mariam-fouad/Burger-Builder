import burgerReducer from './burgerReducer';
import orderReducer from './orderReducer';
import authReducer from './authReducer';
const reducer= (state={},action)=>{
  return {
    burgerReducer:burgerReducer(state.burgerReducer,action),
    orderReducer: orderReducer(state.orderReducer,action),
    authReducer: authReducer(state.authReducer,action),
  };
}
export default reducer;
