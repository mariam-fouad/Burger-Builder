import burgerReducer from './burgerReducer';
const reducer= (state={},action)=>{
  return {
    burgerReducer:burgerReducer(state.burgerReducer,action),
  };
}
export default reducer;
