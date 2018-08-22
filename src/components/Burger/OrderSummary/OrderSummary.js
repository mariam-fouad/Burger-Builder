import React from 'react';
import Button from '../../UI/Button/Button';
const orderSummary =(props)=>{
  const ingredientsList = Object.keys(props.ingredients).map(
    (ingredientLabel)=>{
      return <li key={ingredientLabel+'list'}><strong>{ingredientLabel}</strong>: {props.ingredients[ingredientLabel]} </li>
    }
  );
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>You order this teasty burger with the following ingredients : </p>
      <ul>
        {ingredientsList}
      </ul>
      <p>With a total price of <strong>{props.price.toFixed(2)}$</strong></p>
      <p>Continue to checkout ?</p>
      <Button click={props.cancel}>CANCEL</Button>
      <Button click={props.continue}>CONTINUE</Button>
    </React.Fragment>
  );
}

export default orderSummary;
