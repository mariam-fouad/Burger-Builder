import React from 'react';
import classes from './BuildControl.css';
const buildControl = (props)=>{
  return (
    <div className={classes.buildControlStyle}>
      <button
      key={props.label+'less'}
      className={classes.less}
      onClick={props.lessClicked}
      disabled={props.diable}>Less</button>

      <div key={props.label+'label'} className={classes.labelStyle}>{props.label}</div>
      <button key={props.label+'more'} className={classes.more} onClick={props.moreClicked}>More</button>
    </div>
  );
}

export default buildControl;
