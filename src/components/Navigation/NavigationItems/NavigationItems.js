import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props)=>(
  <ul className ={classes.NavigationItems}>
    <NavigationItem exact link="/">
      Burger Builder
    </NavigationItem>
    {props.isAuth?
      <NavigationItem link="/orders" >
        Orders
      </NavigationItem>:null}
    {props.isAuth?
      <NavigationItem link="/signout" >
        Sign out
      </NavigationItem>:
      <NavigationItem link="/authentication" >
        Authenticate
      </NavigationItem>}

  </ul>
)

export default navigationItems;
