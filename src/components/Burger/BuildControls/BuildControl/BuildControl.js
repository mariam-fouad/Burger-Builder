import React from 'react';
import Radium from 'radium';

const buildControl = (props)=>{
  const buildControlStyle ={
    display: 'flex',
    justifyContent: 'center',
    textAlign:'center',
    alignItems: 'center',
    margin: '6px 0',
  };
  const buttonStyle ={
    display: 'block',
    fontStyle: 'inherit',
    padding: '5px',
    margin: '0 5px',
    width: '80px',
    height:'35px',
    borde: '1px solid rgb(67, 4, 38)',
    cursor: 'pointer',
    outline: 'none',
    ':disabled':{
      backgroundColor: 'rgb(157, 115, 115)',
      border: '1px solid #7E7365',
      color: 'black',
      cursor: 'default',},
    ':disabled :hover':{
      backgroundColor: 'rgb(157, 115, 115)',
      color: '#ccc',
      cursor: 'not-allowed',},
  };
  const labelStyle ={
    padding: '10px',
    fontWeight: 'bold',
    width: '80px',
    color:'#e3dede',
    fontSize:'20px',
  };
  const moreButtonStyle ={
    ...buttonStyle,
    backgroundColor: 'rgba(7, 56, 11, 0.84)',
    color: 'white',
    ':active :hover':{
      backgroundColor: 'rgba(7, 56, 11, 0.84)',
      color: 'white',
    },
  };
  const lessButtonStyle ={
    ...buttonStyle,
    backgroundColor: 'rgb(116, 11, 11)',
    color: 'white',
    ':active :hover':{
      backgroundColor: 'rgb(116, 11, 11)',
    },
  };
  return (
    <div style={buildControlStyle}>
      <button
      key={props.label+'less'}
      style={lessButtonStyle}
      onClick={props.lessClicked}
      disabled={props.diable}>Less</button>

      <div key={props.label+'label'} style={labelStyle}>{props.label}</div>
      <button key={props.label+'more'} style={moreButtonStyle} onClick={props.moreClicked}>More</button>
    </div>
  );
}

export default Radium(buildControl);
