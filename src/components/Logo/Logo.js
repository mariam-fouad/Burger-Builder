import React from 'react';
import classes from './Logo.css';
import LogoImage from'../../assets/images/burger-logo.png';

const logo =(props)=>{
  return (
    <div className={classes.Logo} style={{height:props.height}}>
      <img src={LogoImage} alt="Mo's burger logo"/>
    </div>
  );
}

export default logo;
