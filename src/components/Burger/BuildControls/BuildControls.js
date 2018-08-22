import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Radium from 'radium';

const buildControls =(props)=>{
  const buildControlsStyle={
    width:'100%',
    backgroundColor:'rgb(16, 20, 25)',
    display:'flex',
    flexFlow:'column',
    alignItems:'center',
    boxShadow:'0 2px 1 px #ccc',
    margin:'auto',
    padding:'10px 0',
    color:'#e3dede',
    fontSize:'20px',
  };
  const labels = Object.keys(props.labelsAndDisables);
  const buildControlsArray = labels.map((label)=>{
    return (<BuildControl
    key={label+'ingredients'}
    label={label}
    lessClicked={()=>props.remove(label)}
    moreClicked={()=> props.add(label)}
    diable ={props.labelsAndDisables[label]} />);
  });
  return (
    <div style ={buildControlsStyle}>
      <p>Current price : <strong>{props.price.toFixed(2)}</strong></p>
      {buildControlsArray}
    </div>
  );
}

export default Radium(buildControls);
