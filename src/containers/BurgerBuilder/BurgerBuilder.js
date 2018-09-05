import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../order-axios';
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
    checkingOut : false,
    loading: false,
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
  checkingOut =()=>{
    this.setState({checkingOut:true});
  }
  cancelingCheckOutHandler =()=>{
    this.setState({checkingOut:false});
  }
  continueCheckOutHandler=()=>{
    this.setState({loading:true});
    const orderInfo ={
      ingredients: this.state.ingredients,
      price : this.state.totalPrice,
      customer :{
          name:'Mariam Ali',
          email:'mo@mo.com',
          phone :'0508157870',
          address:{
            street :'205/20',
            zipCode :'29343',
            floor : 7,
            apartment : 48,
            city :'izmir',
          },
      },
    };
    axios.post('/orders.json',orderInfo)
      .then (response =>{
        this.setState({loading:false,checkingOut:false});
      })
      .catch (error =>{
        this.setState({loading:false,checkingOut:false});
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
    let modalInside = <OrderSummary
      ingredients ={this.state.ingredients}
      continue={this.continueCheckOutHandler}
      cancel={this.cancelingCheckOutHandler}
      price={this.state.totalPrice}/>;
    if (this.state.loading){
      modalInside=<Spinner />;
    }
    return(
      <React.Fragment>
        <Modal show={this.state.checkingOut} clickModal={this.cancelingCheckOutHandler}>
          {modalInside}
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
        labelsAndDisables={ingredientsDisableInfo}
        remove={this.removeIngredientHandler}
        add={this.addIngredientHandler}
        price={this.state.totalPrice}
        canCheckout={canCheckout}
        ordering={this.checkingOut}/>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
