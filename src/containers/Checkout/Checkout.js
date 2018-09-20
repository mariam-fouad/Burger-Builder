import React , {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
  state={
    ingredients:null,
    price:0.0,
  }

  checkoutCancalHandler=()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler=()=>{
    this.props.history.replace('/checkout/contact-data');
  }
  componentWillMount(){
    const convertState = this.props.location.state;
    this.setState({
      ingredients:{...convertState.ingredients},
      price:convertState.totalPrice.toFixed(2),
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
          <Route path={this.props.match.path+"/contact-data"}
          render={(props)=>(<ContactData
            {...props}
            price= {this.state.price}
            ingredients={this.state.ingredients}/>) }/>
      </div>
    )
  }

}

export default Checkout;