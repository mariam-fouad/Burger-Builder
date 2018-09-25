import {ADD_INGREDIENT,REMOVE_INGREDIENT} from '../actions/actionTypes';
const INGREDIENTS_PRICES ={
  Salad:0.3,
  Bacon:0.7,
  Cheese:0.4,
  Meat:1.3,
};
const intialState ={
  ingredients:{
    Salad:0,
    Bacon:0,
    Cheese:0,
    Meat:0,
  },
  totalPrice:2,
}
const reducer =(state=intialState,action)=>{
  switch(action.type){
    case ADD_INGREDIENT:
      return {
        ingredients:{
          ...state.ingredients,
          [action.ingredientType]:state.ingredients[action.ingredientType]+1,
        },
        totalPrice:state.totalPrice+INGREDIENTS_PRICES[action.ingredientType],
      }
    case REMOVE_INGREDIENT:
      return state.ingredients[action.ingredientType]?
        {
          ingredients:{
            ...state.ingredients,
            [action.ingredientType]:state.ingredients[action.ingredientType]-1,
          },
          totalPrice:state.totalPrice-INGREDIENTS_PRICES[action.ingredientType],
        }
        : state;

    default:
      return state;
  }

}
export default reducer;
