import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
  state={
    ingredients:{
      Salad:1,
      Bacon:1,
      Cheese:2,
      Meat:2,
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
