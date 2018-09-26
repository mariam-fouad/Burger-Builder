import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../order-axios';
import errorHandler from '../../hoc/errorHandler/errorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
class Orders extends Component{
  componentDidMount(){
    this.props.startFetchingOrders();
  }
  render(){
    return(
      <React.Fragment>
        {this.props.orders.map(order=>(
          <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}/>
        ))}
      </React.Fragment>
    )
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
