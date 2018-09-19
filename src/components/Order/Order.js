import React from 'react';
import classes from './Order.css';
const order = (props)=>(
  <div className={classes.Order}>
    <p>ingredients: Meat(1)</p>
    <p>price: <strong> $4.00 </strong> </p>
  </div>
)

export default order;
