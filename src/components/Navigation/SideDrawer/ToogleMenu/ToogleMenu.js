import React from 'react';
import classes from './ToogleMenu.css'
const toogleMenu =(props)=>(
  <div onClick={props.toogle} className={classes.MenuIcon}>
    <div style={{backgroundColor:props.color}}></div>
    <div style={{backgroundColor:props.color}}></div>
    <div style={{backgroundColor:props.color}}></div>
  </div>
)

export default toogleMenu;
