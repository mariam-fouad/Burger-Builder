import {ADD_INGREDIENT,DELETE_INGREDIENT} from '../actions';
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
      const newTotalPrice = state.totalPrice+action.ingredientPrice;
      return {
        ingredients:updatedIngredients,
        totalPrice:newTotalPrice,
      }

  }
  return state;
}
export default reducer;
