import {ADD_INGREDIENT,DELETE_INGREDIENT} from '../actions';
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
      const ingredientsQuantity= state.ingredients[action.ingredientType];
      const updatedIngredients={
        ...state.ingredients,
      };
      updatedIngredients[action.ingredientType]=ingredientsQuantity+1;
      const newTotalPrice = state.totalPrice+INGREDIENTS_PRICES[action.ingredientType];
      return {
        ingredients:updatedIngredients,
        totalPrice:newTotalPrice,
      }
    case DELETE_INGREDIENT:
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

  }
  return state;
}
export default reducer;
