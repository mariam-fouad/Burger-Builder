import React from 'react';
import Radium from 'radium';

const Layout=(props)=>{
  const styleMain ={
    margin:'16px',
  }
  return (
    <React.Fragment>
      <div >toolbar , sideDrower , backdrop</div>
      <main style ={styleMain}>
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Radium(Layout);
