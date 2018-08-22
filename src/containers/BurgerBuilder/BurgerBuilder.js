import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENTS_PRICES ={
  Salad:0.3,
  Bacon:0.7,
  Cheese:0.4,
  Meat:1.3,
};
class BurgerBuilder extends Component {
  state={
    ingredients:{
      Salad:0,
      Bacon:0,
      Cheese:0,
      Meat:0,
    },
    totalPrice:2,
  }
  removeIngredientHandler =(type)=>{
    const typeQuantity= this.state.ingredients[type];
    const updatedIngredients={
      ...this.state.ingredients,
    };
    if(typeQuantity-1>=0){
      updatedIngredients[type]=typeQuantity-1;
    }
    else{
      return;
    }
    const newTotalPrice = this.state.totalPrice-INGREDIENTS_PRICES[type];
    this.setState({
      ingredients:updatedIngredients,
      totalPrice:newTotalPrice,
    });
  }
  addIngredientHandler=(type)=>{
    const typeQuantity= this.state.ingredients[type];
    const updatedIngredients={
      ...this.state.ingredients,
    };
    updatedIngredients[type]=typeQuantity+1;
    const newTotalPrice = this.state.totalPrice+INGREDIENTS_PRICES[type];
    this.setState({
      ingredients:updatedIngredients,
      totalPrice:newTotalPrice,
    });
  }
  render(){
    const ingredientsDisableInfo = {...this.state.ingredients};
    let countIngredient= 0;
    for (let key in ingredientsDisableInfo ){
      countIngredient+=ingredientsDisableInfo[key];
      ingredientsDisableInfo[key]=ingredientsDisableInfo[key]<=0;
    }
    const canCheckout = countIngredient>0 ? false : true;
    console.log(canCheckout);
    return(
      <React.Fragment>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
        labelsAndDisables={ingredientsDisableInfo}
        remove={this.removeIngredientHandler}
        add={this.addIngredientHandler}
        price={this.state.totalPrice}
        canCheckout={canCheckout}/>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
