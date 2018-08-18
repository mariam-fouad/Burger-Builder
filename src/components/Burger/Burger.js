import React from 'react';
import Radium from 'radium';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import BurgerStyle from './BurgerStyle';
const burger =(props)=>{
  const burgerWindowStyle={
    width:'100%',
    height:'300px',
    margin:'auto',
    textAlign:'center',
    textWeight:'bold',
    overflow:'scroll',
    textSize:'1.2rem',
    '@media (min-width: 1000px) and (min-height: 700px)':
      {
      width:'700px',
      height:'600px',
      },
    '@media (min-width: 500px) and (min-height: 400px)':
      {
      width:'350px',
      height:'300px',
      },
    '@media (min-width: 500px) and (min-height: 401px)':
      {
      width:'400px',
      height:'400px',
      },
  };

  const ingredientComponent = Object.keys(props.ingredients).map((ingredientName)=>{
    return [...Array(props.ingredients[ingredientName])].map((_,index)=>{
      return <BurgerIngredients type={ingredientName} key={ingredientName+index}/>;
    });
  });
  return (
      <div style ={burgerWindowStyle}>
        <BurgerIngredients type="BreadTop"/>
        {ingredientComponent}
        <BurgerIngredients type="BreadBottom"/>
      </div>
  );
}

export default Radium(burger);
