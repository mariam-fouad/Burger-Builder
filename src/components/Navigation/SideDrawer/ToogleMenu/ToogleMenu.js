import React from 'react';
import classes from './ToogleMenu.css'
const toogleMenu =(props)=>(
  <div onClick={props.toogle}>
    <div className={classes.MenuIcon} style={{backgroundColor:props.color}}></div>
    <div className={classes.MenuIcon} style={{backgroundColor:props.color}}></div>
    <div className={classes.MenuIcon} style={{backgroundColor:props.color}}></div>
  </div>
)

export default toogleMenu;
