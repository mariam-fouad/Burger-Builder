import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
const modal =(props)=>{
  const animateModal ={
    transform: props.show?  'translateY(0)':'translateY(-100vh)',
    opacity:props.show?  '1':'0',
  };
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.clickModal}/>
      <div className={classes.Modal} style={animateModal}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default modal;
