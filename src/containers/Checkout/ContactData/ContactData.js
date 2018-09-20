import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component{
  state={
    orderInfo:{
          name:{
            elementType:'text',
            label:'Name',
            elementConfig:{
              type:'text',
              placeholder:'Your Name'
            },
          },
          email:{
            elementType:'text',
            label:'E-Mail',
            elementConfig:{
              type:'email',
              placeholder:'Your E-Mail'
            },
          },
          phone :{
            elementType:'text',
            label:'Phone Number',
            elementConfig:{
              type:'tel',
              placeholder:'Your Number'
            },
          },
          street :{
            elementType:'text',
            label:'Street',
            elementConfig:{
              type:'text',
              placeholder:'Street'
            },
          },
          zipCode :{
            elementType:'text',
            label:'ZIP Code',
            elementConfig:{
              type:'text',
              placeholder:'ZIP Code'
            },
          },
          floor : {
            elementType:'text',
            label:'Floor Number',
            elementConfig:{
              type:'number',
              placeholder:'Floor Number'
            },
          },
          apartment :{
            elementType:'text',
            label:'Apartment Number',
            elementConfig:{
              type:'number',
              placeholder:'Apartment Number'
            },
          },
          deliveryType :{
            elementType:'select',
            label:'Delivery Option',
            elementConfig:{
              options =[
                {value:'fastest', displayValue:'Fastest'},
                {value:'cheapest', displayValue:'Cheapest'}
            ]
            },
          },
    },
    loading:false,
  }
  orderHandler=(event)=>{
    event.preventDefault();
    this.setState({loading:true});
    const orderInfo ={
      ingredients: this.props.ingredients,
      price : this.props.price,

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
    const formInputs
    let content = (
      <React.Fragment>
        <h4>Enter your Contact Data</h4>
        <form>

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
