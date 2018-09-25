import {ADD_INGREDIENT,REMOVE_INGREDIENT} from './actionTypes';

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
