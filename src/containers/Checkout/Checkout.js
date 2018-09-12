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
  render(){
    return (
      <div>
       <CheckoutSummary ingredients={this.state.ingredients}/>
      </div>
    )
  }

}

export default Checkout;
