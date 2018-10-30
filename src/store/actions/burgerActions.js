import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  INITIAL_INGREDIENT,
  ERROR_GETTING_INGREDIENT,
  START_INIT_INGREDIENT,
} from './actionTypes';


export const addIngredient =(ingredientType)=>{
  return{
      type:ADD_INGREDIENT,
      ingredientType:ingredientType,
    };
};

export const removeIngredient =(ingredientType)=>{
  return {
    type:REMOVE_INGREDIENT,
    ingredientType:ingredientType,
  }
};

export const setIngredient =(ing)=>{
  return{
    type:INITIAL_INGREDIENT,
    ingredientsObject: ing,
  }
}

export const catchError = ()=>{
  return {
    type:ERROR_GETTING_INGREDIENT,
  }
}
export const initialIngredient = ()=>{
  return {
    type: START_INIT_INGREDIENT
  }
}
