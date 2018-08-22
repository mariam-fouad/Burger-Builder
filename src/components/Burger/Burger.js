import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger =(props)=>{
  let ingredientComponent = Object.keys(props.ingredients).map((ingredientName)=>{
    return [...Array(props.ingredients[ingredientName])].map((_,index)=>{
      return <BurgerIngredients type={ingredientName} key={ingredientName+index}/>;
    });
  }).reduce((cumulativeArray,currentElement)=>{
    return cumulativeArray.concat(currentElement);
  },[]);
  if (ingredientComponent.length===0){
    ingredientComponent= <p>Please add some ingredients </p>;
  }
  return (
      <div className ={classes.BurgerMainStyle}>
        <BurgerIngredients type="BreadTop"/>
        {ingredientComponent}
        <BurgerIngredients type="BreadBottom"/>
      </div>
  );
}

export default burger;
