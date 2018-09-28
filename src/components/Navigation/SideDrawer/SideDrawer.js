import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';
import ToogleMenu from './ToogleMenu/ToogleMenu';
const sideDrawer =(props)=>{
  const attachedClasses=[classes.SideDrawer,classes.Close];
  if (props.show){
    attachedClasses[1]=classes.Open;
  }
  return(
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <ToogleMenu toogle={props.toogle} color='#570e02'/>
        <div className={classes.Logo}>
          <Logo/>
        </div>
        <nav>
          <NavigationItems isAuth={props.isAuth}/>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default sideDrawer;
