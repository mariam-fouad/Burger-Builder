import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import errorHandler from '../../../hoc/errorHandler/errorHandler';
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
            validation:{
              required:true,
            },
            valid:false,
            touched:false,
          },
          email:{
            elementType:'text',
            label:'E-Mail',
            elementConfig:{
              type:'email',
              placeholder:'Your E-Mail'
            },
            value:'',
            validation:{
              required:true,
            },
            valid:false,
            touched:false,
          },
          phone :{
            elementType:'text',
            label:'Phone Number',
            elementConfig:{
              type:'tel',
              placeholder:'Your Number'
            },
            value:'',
            validation:{
              required:true,
            },
            valid:false,
            touched:false,
          },
          street :{
            elementType:'text',
            label:'Street',
            elementConfig:{
              type:'text',
              placeholder:'Street'
            },
            value:'',
            validation:{
              required:true,
            },
            valid:false,
            touched:false,
          },
          zipCode :{
            elementType:'text',
            label:'ZIP Code',
            elementConfig:{
              type:'text',
              placeholder:'ZIP Code'
            },
            value:'',
            validation:{
              required:true,
              minLength:4,
              maxLength:5,
            },
            valid:false,
            touched:false,
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
            validation:{
              required:true,
            },
            valid:false,
            touched:false,
          },
          apartment :{
            elementType:'number',
            label:'Apartment Number',
            elementConfig:{
              type:'number',
              min:"0",
              placeholder:'Apartment Number'
            },
            value:'',
            validation:{
              required:true,
            },
            valid:false,
            touched:false,
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
            value:'fastest',
            validation:{},
            valid:true,
          },
    },
    loading:false,
    isFormValid:false,
  }
  validateInput =(value,rules)=>{
    let isValid = true;
    const trimedValue = value.trim();
    if(!rules){
      return true;
    }
    if(rules.required){
      isValid= trimedValue.trim()!=='' &&isValid;
    }
    if(rules.minLength){
      isValid= trimedValue.length >= rules.minLength &&isValid;
    }
    if(rules.maxLength){
      isValid= trimedValue.length <= rules.maxLength &&isValid;
    }

    return isValid;
  }
  validateForm =()=>{
    let isFormValid =true;
    for (let input in this.state.orderInfo){
      isFormValid = this.state.orderInfo[input].valid && isFormValid;
    }
    return isFormValid;
  }
  orderButtonHandler=(event)=>{
    event.preventDefault();
    this.setState({loading:true});
    const orderDetails={};
    for (let input in this.state.orderInfo){
      orderDetails[input]=this.state.orderInfo[input].value;
    }
    const orderInfo ={
      ingredients: this.props.ingredients,
      price : this.props.price,
      orderData:orderDetails,

    };

  }
  inputChangedHandler=(event,orderKey)=>{
    const orderUpdated={
      ...this.state.orderInfo,
    };
    const updatedOrderElement={
      ...orderUpdated[orderKey],
    };
    updatedOrderElement.value=event.target.value;
    updatedOrderElement.touched=true;
    updatedOrderElement.valid=this.validateInput(updatedOrderElement.value,updatedOrderElement.validation);
    orderUpdated[orderKey]=updatedOrderElement;
    const isFormValid = this.validateForm();

    this.setState({orderInfo:orderUpdated,isFormValid:isFormValid});
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
          invalid={!this.state.orderInfo[input].valid}
          shouldValidate={this.state.orderInfo[input].validation}
          touched={this.state.orderInfo[input].touched}
          changed={(event)=>this.inputChangedHandler(event,input)}
          /> );
    }
    let content = (
      <React.Fragment>
        <h4>Enter your Contact Data</h4>
        <form onSubmit={this.orderHandler}>
          {formArray}
          <Button disabled={!this.state.isFormValid}>ORDER</Button>
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

const mapStateToProps=state=>{
  return{
    ingredients:state.burgerReducer.ingredients,
    price:state.burgerReducer.totalPrice,
  };
}
export default  errorHandler(connect(mapStateToProps)(ContactData),axios);
