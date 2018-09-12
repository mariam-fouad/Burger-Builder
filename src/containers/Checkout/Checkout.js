import React , {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component{
  state={
    ingredients:{
      Salad:0,
      Bacon:1,
      Cheese:2,
      Meat:3,
    }
  }
  checkoutCancalHandler=()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler=()=>{
    this.props.history.replace('/checkout/contact-data');
  }
  render(){
    return (
      <div>
       <CheckoutSummary
       ingredients={this.state.ingredients}
       checkoutCancal={this.checkoutCancalHandler}
       checkoutContinue={this.checkoutContinueHandler}/>
      </div>
    )
  }

}

export default Checkout;
