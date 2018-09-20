import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../order-axios';
import errorHandler from '../../hoc/errorHandler/errorHandler';
class Orders extends Component{
  state={
    orders:[],
    loading: true,
  }
  componentDidMount(){
    axios.get('/orders.json')
      .then(response=>{
        const fetchedOrders=[];
        for (let key in response.data){
          fetchedOrders.push(
            {
              ...response.data[key],
              id:key,
            }
          );
        }
        this.setState({loading:false,orders:fetchedOrders});
      })
      .catch(error =>{
        this.setState({loading:false,});
      });
  }
  render(){
    return(
      <React.Fragment>
        {this.state.orders.map(order=>(
          <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}/>
        ))}
      </React.Fragment>
    )
  }
}

export default errorHandler(Orders,axios);