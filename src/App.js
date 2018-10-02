import React, { Component } from 'react';
import { Switch , Route ,withRouter,Redirect} from 'react-router-dom'
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import * as actions from './store/actions/actionsIndex';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent'

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});
const asyncAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth');
});
const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});
const asyncSignout = asyncComponent(()=>{
  return import('./containers/Auth/Signout/Signout');
});
class App extends Component {
  componentWillMount(){
    this.props.recoverAuthData();
  }
  render() {
    let routeSwitch= (
      <Switch>
        <Route  path="/authentication" component={asyncAuth}/>
        <Route exact path="/" component={BurgerBuilder}/>
        <Redirect to='/'/>
      </Switch>
    );
    if (this.props.isAuth){
      routeSwitch=(
        <Switch>
          <Route  path="/authentication" component={asyncAuth}/>
          <Route  path="/checkout" component={asyncCheckout}/>
          <Route  path="/orders" component={asyncOrders}/>
          <Route  path="/signout" component={asyncSignout}/>
          <Route exact path="/" component={BurgerBuilder}/>
          <Redirect to='/'/>
        </Switch>);
    }
    return (
          <div className="App">
            <Layout>
              {routeSwitch}
            </Layout>
          </div>
    );
  }
}

const mapStateToProps = state=>{
  return {
    isAuth: state.authReducer.token !== null,
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    recoverAuthData: ()=> dispatch (actions.recoverAuthData()),
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
