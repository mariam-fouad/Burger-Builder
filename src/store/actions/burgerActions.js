import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  INITIAL_INGREDIENT,
  ERROR_GETTING_INGREDIENT,
} from './actionTypes';
import axios from '../../order-axios';

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

const setIngredient =(ing)=>{
  return{
    type:INITIAL_INGREDIENT,
    ingredientsObject: ing,
  }
}

const catchError = ()=>{
  return {
    type:ERROR_GETTING_INGREDIENT,
  }
}
export const initialIngredient = ()=>{
  return dispatch=>{
    axios.get('/ingredients.json')
      .then (response=>{
        dispatch(setIngredient(response.data));
      }).catch(error =>{
        dispatch(catchError());
    });
  }
}
