import React , {Component} from 'react';
import classes from './Auth.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/actionsIndex';
import {updateObject,validateInput} from '../../shared/utility';
class Auth extends Component {
  state={
    controls:{
      email:{
        elementType:'text',
        label:'E-Mail',
        elementConfig:{
          type:'email',
          placeholder:'E-Mail address'
        },
        value:'',
        validation:{
          required:true,
          isEmail: true
        },
        valid:false,
        touched:false,
      },
      password:{
        elementType:'text',
        label:'password',
        elementConfig:{
          type:'password',
          placeholder:'password'
        },
        value:'',
        validation:{
          required:true,
          minLength: 6,
        },
        valid:false,
        touched:false,
      },
    },
    isSignUp:true,
    isValid:false,
  }


  inputChangedHandler = (event , inputName)=>{
    const updatedControls = updateObject (this.state.controls,{
      [inputName]:updateObject(this.state.controls[inputName],{
        valid:validateInput(event.target.value,this.state.controls[inputName].validation),
        touched:true,
        value:event.target.value,
      })
    });
    let isFormValid = true;
    for (let input in updatedControls){
      isFormValid = updatedControls[input].valid && isFormValid;
    }
    this.setState({controls:updatedControls, isValid:isFormValid});
  }
  startAuthentication = (event)=>{
    event.preventDefault();
    this.props.onAuthStart(this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp);
  }
  switchAuthModeHandler= ()=>{
    this.setState(prevState=>{
      return {isSignUp:!prevState.isSignUp,}
    });
  }
  componentDidMount(){
    if(this.props.authRedirectPath!=='/'&& !this.props.buildingBurger){
      this.props.onSetAuthRedirectPath();
    }
  }
  render (){
    const formArray= [];
    for (let input in this.state.controls){
        formArray.push(
          <Input label={this.state.controls[input].label}
          key={this.state.controls[input].label}
          elementConfig={this.state.controls[input].elementConfig}
          elementType={this.state.controls[input].elementType}
          value={this.state.controls[input].value}
          invalid={!this.state.controls[input].valid}
          shouldValidate={this.state.controls[input].validation}
          touched={this.state.controls[input].touched}
          changed={(event)=>this.inputChangedHandler(event,input)}
          /> );
    }
    let form = <Spinner />;
    let redirect = null;
    if (this.props.isAuth){
      redirect=<Redirect to={this.props.authRedirectPath} />
    }
    if (!this.props.loading){
      form=(
        <div className={classes.Auth}>
          {redirect}
          <h4>{this.state.isSignUp?
            'Sign up to our delisauce burger': 'Sign in to enjoy again'}</h4>
          {this.props.error? <h3>Error message : {this.props.error}</h3>: null}
          <form onSubmit={this.startAuthentication}>
            {formArray}
            <Button disabled={!this.state.isValid}>
              {this.state.isSignUp?'Sign up' : 'Sign in'}
            </Button>
          </form>
          <Button click={this.switchAuthModeHandler} backbackgroundColor="white">
          {this.state.isSignUp?'Have an account?' : "Don't have an account?"}
          </Button>
        </div>
    );
    }
    return form;
  }
}

const mapStateToProps=state=>{
  return{
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    isAuth: state.authReducer.token!==null,
    buildingBurger: state.burgerReducer.building,
    authRedirectPath: state.authReducer.authRedirectPath,
  };
}
const mapDispatchToProps=dispatch=>{
  return {
    onAuthStart : (email,password,isSignUp)=> dispatch (actions.authStart(email,password,isSignUp)),
    onSetAuthRedirectPath: ()=> dispatch(actions.setAuthRedirectPath('/')),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Auth);
