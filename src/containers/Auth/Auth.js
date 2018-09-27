import React , {Component} from 'react';

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
        label:'E-Mail',
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
    }
  }
  validateInput =(value,rules)=>{
    let isValid = true;
    const trimedValue = value.trim();
    if(!rules){
      return true;
    }
    if(rules.required){
      isValid= trimedValue!=='' &&isValid;
    }
    if(rules.minLength){
      isValid= trimedValue.length >= rules.minLength &&isValid;
    }
    if(rules.maxLength){
      isValid= trimedValue.length <= rules.maxLength &&isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event , inputName)=>{
    const updatedControls = {
      ...this.state.controls,
      [inputName]:{
        ...this.state.controls[inputName],
        valid:this.validateInput(event.target.value,this.state.controls[inputName].validation),
        touched:true,
        value:event.target.value,
      }
    };
    setState({controls:updatedControls});
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
    let content = (
      <React.Fragment>
        <h4>sign up for our delisauce burger</h4>
        <form>
          {formArray}
          <Button>Sign up</Button>
        </form>
      </React.Fragment>
    );

    return (
      <div className={classes.ContactData}>
        {content}
      </div>
    );
  }
}
export default Auth;
