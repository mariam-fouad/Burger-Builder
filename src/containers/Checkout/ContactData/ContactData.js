import React , {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../order-axios';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux';
import errorHandler from '../../../hoc/errorHandler/errorHandler';
import * as actions from '../../../store/actions/actionsIndex';
import {updateObject,validateInput} from '../../../shared/utility';
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
              isEmail: true
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
              isNumeric: true,
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
              isNumeric: true,
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
              isNumeric: true,
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
              isNumeric: true,
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
    isFormValid:false,
  }

  orderButtonHandler=(event)=>{
    event.preventDefault();
    const orderDetails={};
    for (let input in this.state.orderInfo){
      orderDetails[input]=this.state.orderInfo[input].value;
    }
    const orderInfo ={
      ingredients: this.props.ingredients,
      price : this.props.price,
      orderData:orderDetails,
      userId:this.props.userId,
    };
    this.props.onOrdering(orderInfo,this.props.token);

  }
  inputChangedHandler=(event,orderKey)=>{
    const orderUpdated= updateObject (this.state.orderInfo,{
      [orderKey]:updateObject (this.state.orderInfo[orderKey],{
        value:event.target.value,
        touched:true,
        valid:validateInput(event.target.value,this.state.orderInfo[orderKey].validation),
      })
    });

    let isFormValid = true;
    for (let input in orderUpdated){
      isFormValid = orderUpdated[input].valid && isFormValid;
    }
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
        <form onSubmit={this.orderButtonHandler}>
          {formArray}
          <Button disabled={!this.state.isFormValid}>ORDER</Button>
        </form>
      </React.Fragment>
    );
    if (this.props.loading){
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
    loading: state.orderReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId,
  };
};

const mapDispatchToProps=dispatch=>{
  return {
    onOrdering:(orderInfo,token)=>dispatch(actions.orderingBurger(orderInfo,token)),
  };
}
export default  errorHandler(connect(mapStateToProps,mapDispatchToProps)(ContactData),axios);
