import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
  state={
    ingredients:{
      Meat:0,
      Salad:0,
      Cheese:0,
      Bacon:0,
    },
    price:0.0,
  }

  checkoutCancalHandler=()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler=()=>{
    this.props.history.replace('/checkout/contact-data');
  }
  componentDidMount(){
    const convertState = this.props.location.state;
    this.setState({
      ingredients:{...convertState.ingredients},
      price:convertState.totalPrice,
    });
  }
  render(){
    return (
      <div>
        <CheckoutSummary
          price= {this.state.price}
          ingredients={this.state.ingredients}
          checkoutCancal={this.checkoutCancalHandler}
          checkoutContinue={this.checkoutContinueHandler}/>
          <Route path={this.props.match.path+"/contact-data"} component={ContactData}/>
      </div>
    )
  }

}

export default Checkout;
