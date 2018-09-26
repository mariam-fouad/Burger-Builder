import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../order-axios';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
class Orders extends Component{
  componentDidMount(){
    this.props.startFetchingOrders();
  }
  render(){
    let orders = <Spinner />
    if (!this.props.loading){
      orders=this.props.orders.map(order=>
        (<Order
        key={order.id}
        ingredients={order.ingredients}
        price={+order.price}/>)
    );
    }
    return orders;
  }
}

const mapStateToProps = state=>{
  return {
    loading:state.orderReducer.loading,
    orders:state.orderReducer.orders,
  };
};

const mapDispatchToProps = dispatch =>{
  return {
    startFetchingOrders : ()=>dispatch (actions.fetchingOrders()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(errorHandler(Orders,axios));
