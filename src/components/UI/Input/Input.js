import React from 'react';
import classes from './Input.css';
const Input= (props)=>{
  let inputElement = null;
  switch(props.elementType){
    case('input'):
      inputElement = <input className={classes.InputElement} {...props.elementConfig} />;
      break;
    case ('teaxtarea'):
      inputElement= <teaxtarea className={classes.InputElement}{...props.elementConfig}/>;
      break;
    default:
      inputElement = <input className={classes.InputElement}{...props.elementConfig} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}
export default Input;
