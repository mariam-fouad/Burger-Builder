import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls =(props)=>{
  const labels = Object.keys(props.labelsAndDisables);
  const buildControlsArray = labels.map((label)=>{
    return (<BuildControl
    key={label+'ingredients'}
    label={label}
    lessClicked={()=>props.remove(label)}
    moreClicked={()=> props.add(label)}
    diable ={props.labelsAndDisables[label]} />);
  });
  return (
    <div className ={classes.buildControlsStyle}>
      <p>Current price : <strong>{props.price.toFixed(2)}$</strong></p>
      {buildControlsArray}
      <button
      className={classes.OrderButton}
      disabled={props.canCheckout}
      onClick={props.ordering}>
      {props.isAuth?'Order Now':'Authenticate To Order' }</button>
    </div>
  );
}

export default buildControls;
