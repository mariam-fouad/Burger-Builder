import React from 'react';
import classes from './Order.css';
const order = (props)=>{
  const ingredients=[];
  for (let ingredientsName in props.ingredients){
    ingredients.push(
      {
        name:ingredientsName,
        amount:props.ingredients[ingredientsName],
      }
    );
  }
  const ingredientsText= ingredients.map(ing=>(
    <span key={ing.name} style={{
      display:'inline-block',
      margin:'0 6px',
      border:'1px solid #ccc',
      padding:'5px ',
    }}>
      {ing.name} ({ing.amount})
    </span>
  ))
  return (
    <div className={classes.Order}>
      <p>Ingredients:{ingredientsText}</p>
      <p>Price: <strong> $ {props.price.toFixed(2)}</strong> </p>
  </div>
);
}



export default order;
