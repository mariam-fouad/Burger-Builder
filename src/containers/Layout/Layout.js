import React,{Component}from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
  state={
    showSideDrawer: false,
  }

  closeSideDrawerHandler=()=>{
    this.setState({showSideDrawer: false});
  }
  toogleSideDrawerHandler=()=>{
    this.setState((prevState)=>{
      return {showSideDrawer:!prevState.showSideDrawer};
    });
  }
  render(){
    const styleMain ={
      marginTop:'72px',
    }
    return (
      <React.Fragment>
        <Toolbar toogle={this.toogleSideDrawerHandler} />
        <SideDrawer toogle={this.toogleSideDrawerHandler} closed={this.closeSideDrawerHandler} show={this.state.showSideDrawer}/>
        <main style ={styleMain}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }

}

export default Layout;
