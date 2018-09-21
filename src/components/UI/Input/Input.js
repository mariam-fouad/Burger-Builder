import React from 'react';
import classes from './Input.css';
const Input= (props)=>{
  const classesInput = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched){
    classesInput.push(classes.Invalid);
  }
  let inputElement = null;
  switch(props.elementType){
    case('input'):
      inputElement = <input className={classesInput.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
    case ('teaxtarea'):
      inputElement= <teaxtarea className={classesInput.join(' ')}{...props.elementConfig} value={props.value} onChange={props.changed}/>;
      break;
    case ('select'):
      inputElement=(
        <select className={classesInput.join(' ')} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option=> <option key={option.value} value={option.value} >{option.displayValue}</option>)}
        </select>);
        break;
    default:
      inputElement = <input className={classesInput.join(' ')}{...props.elementConfig} value={props.value} onChange={props.changed}/>;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}
export default Input;
