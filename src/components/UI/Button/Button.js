import React from 'react';
import classes from './Button.css';
const button =(props)=>
 (<button onClick={props.click} className={classes.Button}>{props.children}</button>)

export default button;
