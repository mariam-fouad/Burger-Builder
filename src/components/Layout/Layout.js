import React from 'react';
import Radium from 'radium';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout=(props)=>{
  const styleMain ={
    marginTop:'72px',
  }
  return (
    <React.Fragment>
      <Toolbar />
      <main style ={styleMain}>
        {props.children}
      </main>
    </React.Fragment>
  );
}

export default Radium(Layout);
