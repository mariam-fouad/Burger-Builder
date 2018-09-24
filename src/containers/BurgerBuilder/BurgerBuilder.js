import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import axios from '../../order-axios';
import {connect} from 'react-redux';
import {ADD_INGREDIENT,DELETE_INGREDIENT} from '../../store/actions';
const INGREDIENTS_PRICES ={
  Salad:0.3,
  Bacon:0.7,
  Cheese:0.4,
  Meat:1.3,
};
class BurgerBuilder extends Component {
  state={
    ingredients:null,
    totalPrice:2,
    checkingOut : false,
    loading: false,
    error: false,
  }
  constructor(props){
    super(props);
    axios.get('/ingredients.json')
      .then (response=>{
        const ingredients=response.data;
        const orderdIngredients = {
          Salad:ingredients.Salad,
          Bacon:ingredients.Bacon,
          Cheese:ingredients.Cheese,
          Meat:ingredients.Meat,
        };
        this.setState({ingredients:orderdIngredients});
      }).catch(error =>{
        this.setState({error:true});
    });
  }
  //can do it like that too
  // componentDidMount(){
  //   axios.get('/ingredients.json')
  //     .then (response=>{
  //       this.setState({ingredients:response.data});
  //     }).catch(error =>{
  //       this.setState({error:true});
  //   });
  //  }
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

      //this.props.history.push('/checkout',{...this.state});
      this.props.history.push('/checkout',{
        ingredients:{...this.state.ingredients},
        totalPrice:this.state.totalPrice
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
    let insideModal = null;
    let burger = this.state.error ? <p>Ingredients cannot be loaded</p>:<Spinner />;
    if (this.state.ingredients){
      burger = (
        <React.Fragment>
          <Burger ingredients = {this.state.ingredients}/>
          <BuildControls
          labelsAndDisables={ingredientsDisableInfo}
          remove={this.removeIngredientHandler}
          add={this.addIngredientHandler}
          price={this.state.totalPrice}
          canCheckout={canCheckout}
          ordering={this.checkingOut}/>
        </React.Fragment>);
      insideModal= <OrderSummary
        ingredients ={this.state.ingredients}
        continue={this.continueCheckOutHandler}
        cancel={this.cancelingCheckOutHandler}
        price={this.state.totalPrice}/>;
    }
    if (this.state.loading){
      insideModal=<Spinner />;
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
  };
}

const mapDispatchToProps=dispatch=>{
  return {
    addIngredient:(ingredientType,ingredientPrice)=>dispatch({
      type:ADD_INGREDIENT,
      ingredientPrice:ingredientPrice,
      ingredientType:ingredientType
    }),

  }
}

export default errorHandler(connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder),axios);
