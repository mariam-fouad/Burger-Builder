import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
  state={
    ingredients:{
      Salad:0,
      Bacon:0,
      Cheese:0,
      Meat:0,
    },
  }
  render(){
    return(
      <React.Fragment>
        <Burger ingredients = {this.state.ingredients}/>
        <div>Building controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
