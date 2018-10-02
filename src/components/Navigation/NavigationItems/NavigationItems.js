import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props)=>(
  <ul className ={classes.NavigationItems}>
    <NavigationItem exact link="/" clicked={props.clicked}>
      Burger Builder
    </NavigationItem>
    {props.isAuth?
      <NavigationItem link="/orders" clicked={props.clicked}>
        Orders
      </NavigationItem>:null}
    {props.isAuth?
      <NavigationItem link="/signout" clicked={props.clicked}>
        Sign out
      </NavigationItem>:
      <NavigationItem link="/authentication" clicked={props.clicked}>
        Authenticate
      </NavigationItem>}

  </ul>
)

export default navigationItems;
