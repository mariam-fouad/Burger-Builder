import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  INITIAL_INGREDIENT,
  ERROR_GETTING_INGREDIENT,
} from '../actions/actionTypes';
import {updateObject} from '../utility'
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
  building: false,
}

const addIngredient = (state,action)=>{
  const updateIngredientsObject =updateObject(state.ingredients, {[action.ingredientType]:state.ingredients[action.ingredientType]+1});
  return updateObject (state, {
    ingredients:updateIngredientsObject,
    totalPrice:state.totalPrice+INGREDIENTS_PRICES[action.ingredientType],
    building:true,
  });
}

const removeIngredient = (state,action)=>{
  const updateIngredientsObject =updateObject(state.ingredients, {[action.ingredientType]:state.ingredients[action.ingredientType]-1});
  return updateObject (state, {
    ingredients:updateIngredientsObject,
    totalPrice:state.totalPrice-INGREDIENTS_PRICES[action.ingredientType],
    building:true,
  });
}
const errorGettingIngredient = (state,action)=>{
  return updateObject (state,{error:true});
}
const initialIngredient = (state,action)=>{
  return updateObject (state,{
    ingredients:{
    Salad:action.ingredientsObject.Salad,
    Bacon:action.ingredientsObject.Bacon,
    Cheese:action.ingredientsObject.Cheese,
    Meat:action.ingredientsObject.Meat,
  },
  error:false,
  totalPrice:3.8,
  building:false,
});
}
const reducer =(state=intialState,action)=>{
  switch(action.type){
    case ADD_INGREDIENT:return addIngredient (state,action);
    case REMOVE_INGREDIENT:return removeIngredient (state,action);
    case ERROR_GETTING_INGREDIENT:return errorGettingIngredient (state,action);
    case INITIAL_INGREDIENT:return initialIngredient (state,action);
    default:return state;
  }

}
export default reducer;
