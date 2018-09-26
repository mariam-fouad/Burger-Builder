import React , {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

class Checkout extends Component{

  checkoutCancalHandler=()=>{
    this.props.history.goBack();
  }
  checkoutContinueHandler=()=>{
    this.props.history.replace('/checkout/contact-data');
  }

  render(){
    let summary = <Redirect to='/'/>;
    if (this.props.ingredients){
      const ordered = this.props.ordered?  <Redirect to='/'/>: null;
      summary=(
        <div>
          {ordered}
          <CheckoutSummary
            price= {this.props.price}
            ingredients={this.props.ingredients}
            checkoutCancal={this.checkoutCancalHandler}
            checkoutContinue={this.checkoutContinueHandler}/>
            <Route path={this.props.match.path+"/contact-data"}
            component={ContactData}/>
        </div>
      );
    }
    return summary;
  }

}
const mapStateToProps=state=>{
  return{
    ingredients:state.burgerReducer.ingredients,
    price:state.burgerReducer.totalPrice.toFixed(2),
    ordered:state.orderReducer.ordered,
  };
}
export default connect(mapStateToProps)(Checkout);
