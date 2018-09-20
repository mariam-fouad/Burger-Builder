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
            value:'',
          },
          email:{
            elementType:'text',
            label:'E-Mail',
            elementConfig:{
              type:'email',
              placeholder:'Your E-Mail'
            },
            value:'',
          },
          phone :{
            elementType:'text',
            label:'Phone Number',
            elementConfig:{
              type:'tel',
              placeholder:'Your Number'
            },
            value:'',
          },
          street :{
            elementType:'text',
            label:'Street',
            elementConfig:{
              type:'text',
              placeholder:'Street'
            },
            value:'',
          },
          zipCode :{
            elementType:'text',
            label:'ZIP Code',
            elementConfig:{
              type:'text',
              placeholder:'ZIP Code'
            },
            value:'',
          },
          floor : {
            elementType:'text',
            label:'Floor Number',
            elementConfig:{
              type:'number',
              min:"0",
              placeholder:'Floor Number'
            },
            value:'',
          },
          apartment :{
            elementType:'text',
            label:'Apartment Number',
            elementConfig:{
              type:'number',
              min:"0",
              placeholder:'Apartment Number'
            },
            value:'',
          },
          deliveryType :{
            elementType:'select',
            label:'Delivery Option',
            elementConfig:{
              options:[
                {value:'fastest', displayValue:'Fastest'},
                {value:'cheapest', displayValue:'Cheapest'}
            ]
            },
            value:'',
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
    const formArray= [];
    for (let input in this.state.orderInfo){
        formArray.push(
          <Input label={this.state.orderInfo[input].label}
          key={this.state.orderInfo[input].label}
          elementConfig={this.state.orderInfo[input].elementConfig}
          elementType={this.state.orderInfo[input].elementType}
          value={this.state.orderInfo[input].value}
          /> );
    }
    let content = (
      <React.Fragment>
        <h4>Enter your Contact Data</h4>
        <form>
          {formArray}
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
