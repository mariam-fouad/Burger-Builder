import {ADD_INGREDIENT,REMOVE_INGREDIENT} from '../actions';
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
      const typeQuantity= state.ingredients[action.ingredientType];
      const modifiedIngredients={
        ...state.ingredients,
      };
      if(typeQuantity-1>=0){
        modifiedIngredients[action.ingredientType]=typeQuantity-1;
      }
      else{
        return state;
      }
      const updatedTotalPrice = state.totalPrice-INGREDIENTS_PRICES[action.ingredientType];
      return{
        ingredients:modifiedIngredients,
        totalPrice:updatedTotalPrice,
      };
    default:
      return state;
  }

}
export default reducer;
