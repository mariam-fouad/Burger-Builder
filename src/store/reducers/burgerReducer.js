import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  INITIAL_INGREDIENT,
  ERROR_GETTING_INGREDIENT,
} from '../actions/actionTypes';
const INGREDIENTS_PRICES ={
  Salad:0.4,
  Bacon:0.8,
  Cheese:0.4,
  Meat:1.4,
};
const intialState ={
  ingredients:null,
  totalPrice:3.8,
  error: false,
}
const reducer =(state=intialState,action)=>{
  switch(action.type){
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients:{
          ...state.ingredients,
          [action.ingredientType]:state.ingredients[action.ingredientType]+1,
        },
        totalPrice:state.totalPrice+INGREDIENTS_PRICES[action.ingredientType],
      }
    case REMOVE_INGREDIENT:
      return{
          ...state,
          ingredients:{
            ...state.ingredients,
            [action.ingredientType]:state.ingredients[action.ingredientType]-1,
          },
          totalPrice:state.totalPrice-INGREDIENTS_PRICES[action.ingredientType],
        }
    case ERROR_GETTING_INGREDIENT:
      return {
        ...state,
        error:true,
      }
    case INITIAL_INGREDIENT:
      return{
        ...state,
        ingredients:{
          Salad:action.ingredientsObject.Salad,
          Bacon:action.ingredientsObject.Bacon,
          Cheese:action.ingredientsObject.Cheese,
          Meat:action.ingredientsObject.Meat,
        },
        error:false,
      }
    default:
      return state;
  }

}
export default reducer;
