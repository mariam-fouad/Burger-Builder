import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import axios from '../../order-axios';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';

export class BurgerBuilder extends Component {
  state={
    checkingOut : false,
  }
  componentDidMount(){
    this.props.initialIngredient();
  }
  checkingOut =()=>{
    if(!this.props.isAuth){
      this.props.setAuthRedirectPath('./checkout')
      this.props.history.push('/authentication');
    }
    this.setState({checkingOut:true});
  }
  cancelingCheckOutHandler =()=>{
    this.setState({checkingOut:false});
  }
  continueCheckOutHandler=()=>{
    this.props.intialOrdered();
    this.props.history.push('/checkout');
  }

  render(){
    const ingredientsDisableInfo = {...this.props.ingredients};
    let countIngredient= 0;
    for (let key in ingredientsDisableInfo ){
      countIngredient+=ingredientsDisableInfo[key];
      ingredientsDisableInfo[key]=ingredientsDisableInfo[key]<=0;
    }
    let insideModal = null;
    let burger = this.props.error ? <p>Ingredients cannot be loaded</p>:<Spinner />;
    if (this.props.ingredients){
      burger = (
        <React.Fragment>
          <Burger ingredients = {this.props.ingredients}/>
          <BuildControls
          labelsAndDisables={ingredientsDisableInfo}
          remove={this.props.removeIngredient}
          add={this.props.addIngredient}
          price={this.props.totalPrice}
          canCheckout={countIngredient>0 ? false : true}
          ordering={this.checkingOut}
          isAuth={this.props.isAuth}/>
        </React.Fragment>);
      insideModal= <OrderSummary
        ingredients ={this.props.ingredients}
        continue={this.continueCheckOutHandler}
        cancel={this.cancelingCheckOutHandler}
        price={this.props.totalPrice}/>;
    }

    return(
      <React.Fragment>
        <Modal show={this.state.checkingOut} clickModal={this.cancelingCheckOutHandler}>
          {insideModal}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

const mapStateToProps=state=>{
  return{
    ingredients:state.burgerReducer.ingredients,
    totalPrice:state.burgerReducer.totalPrice,
    error : state.burgerReducer.error,
    isAuth:state.authReducer.token !==null,
  };
}

const mapDispatchToProps=dispatch=>{
  return {
    addIngredient:(ingredientType)=>dispatch(actions.addIngredient(ingredientType)),
    removeIngredient:(ingredientType)=>dispatch(actions.removeIngredient(ingredientType)),
    initialIngredient: ()=> dispatch (actions.initialIngredient()),
    intialOrdered: ()=> dispatch (actions.intialOrdered()),
    setAuthRedirectPath: (path)=> dispatch (actions.setAuthRedirectPath(path)),
  }
}

export default errorHandler(connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder),axios);
