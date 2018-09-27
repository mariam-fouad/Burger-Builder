import React from 'react';
import classes from './Button.css';
const button =(props)=>
 (<button
   onClick={props.click}
   className={classes.Button}
   disabled={props.disabled}
   style={{backgroundColor:props.backbackgroundColor}}>
   {props.children}
   </button>)

export default button;
