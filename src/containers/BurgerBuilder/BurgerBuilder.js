import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import axios from '../../order-axios';
import {connect} from 'react-redux';
import {ADD_INGREDIENT,REMOVE_INGREDIENT} from '../../store/actions';

class BurgerBuilder extends Component {
  state={
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

  checkingOut =()=>{
    this.setState({checkingOut:true});
  }
  cancelingCheckOutHandler =()=>{
    this.setState({checkingOut:false});
  }
  continueCheckOutHandler=()=>{

      //this.props.history.push('/checkout',{...this.state});
      this.props.history.push('/checkout');

  }

  render(){
    const ingredientsDisableInfo = {...this.props.ingredients};
    let countIngredient= 0;
    for (let key in ingredientsDisableInfo ){
      countIngredient+=ingredientsDisableInfo[key];
      ingredientsDisableInfo[key]=ingredientsDisableInfo[key]<=0;
    }
    const canCheckout = countIngredient>0 ? false : true;
    let insideModal = null;
    let burger = this.state.error ? <p>Ingredients cannot be loaded</p>:<Spinner />;
    if (this.props.ingredients){
      burger = (
        <React.Fragment>
          <Burger ingredients = {this.props.ingredients}/>
          <BuildControls
          labelsAndDisables={ingredientsDisableInfo}
          remove={this.props.removeIngredient}
          add={(type)=>this.props.addIngredient(type)}
          price={this.props.totalPrice}
          canCheckout={canCheckout}
          ordering={this.checkingOut}/>
        </React.Fragment>);
      insideModal= <OrderSummary
        ingredients ={this.props.ingredients}
        continue={this.continueCheckOutHandler}
        cancel={this.cancelingCheckOutHandler}
        price={this.props.totalPrice}/>;
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
    addIngredient:(ingredientType)=>dispatch({
      type:ADD_INGREDIENT,
      ingredientType:ingredientType
    }),
    removeIngredient:(ingredientType)=>dispatch({
      type:REMOVE_INGREDIENT,
      ingredientType:ingredientType
    })

  }
}

export default errorHandler(connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder),axios);
