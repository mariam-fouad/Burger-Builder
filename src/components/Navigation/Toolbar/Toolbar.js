import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToogleMenu from '../SideDrawer/ToogleMenu/ToogleMenu';
const toolbar =(props)=>{
  return (
    <header className={classes.Toolbar}>
      <ToogleMenu toogle={props.toogle}/>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav className={classes.DisplayDesktop}>
        <NavigationItems isAuth={props.isAuth}/>
      </nav>
    </header>
  );
}
export default toolbar;
