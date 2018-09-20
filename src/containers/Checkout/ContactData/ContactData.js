import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component{
  state={
    name:'',
    email:'',
    address:{
      street:'',
      postalcode:'',
    },
    loading:false,
  }
  orderHandler=(event)=>{
    event.preventDefault();
    this.setState({loading:true});
    const orderInfo ={
      ingredients: this.props.ingredients,
      price : this.props.price,
      customer :{
          name:'Mariam Ali',
          email:'mo@mo.com',
          phone :'0508157870',
          address:{
            street :'205/20',
            zipCode :'29343',
            floor : 7,
            apartment : 48,
            city :'izmir',
          },
      },
    };
    axios.post('/orders.json',orderInfo)
      .then (response =>{
        this.setState({loading:false});
        this.props.history.push('/');

      })
      .catch (error =>{
        this.setState({loading:false});
      });


  }
  render (){
    let content = (
      <React.Fragment>
        <h4>Enter your Contact Data</h4>
        <form>
          <Input inputtype='input' type='text' name='name' placeholder='Your Name'/>
          <Input inputtype='input' type='email' name='email' placeholder='Your Email'/>
          <Input inputtype='input' type='text' name='street' placeholder='Street'/>
          <Input inputtype='input' type='text' name='postalcode' placeholder='postal code'/>
          <Button click={this.orderHandler}>ORDER</Button>
        </form>
      </React.Fragment>
    );
    if (this.state.loading){
      content=(<Spinner/>);
    }
    return (
      <div className={classes.ContactData}>
        {content}
      </div>
    );
  }
}

export default ContactData;
