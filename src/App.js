import React, { Component } from 'react';
import { Switch , Route ,withRouter} from 'react-router-dom'
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
import Signout from './containers/Auth/Signout/Signout';
import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout'
import * as actions from './store/actions/actionsIndex';
import {connect} from 'react-redux';
class App extends Component {
  componentDidMount(){
    this.props.recoverAuthData();
  }
  render() {
    return (
          <div className="App">
            <Layout>
              <Switch>
                <Route  path="/checkout" component={Checkout}/>
                <Route  path="/orders" component={Orders}/>
                <Route  path="/authentication" component={Auth}/>
                <Route  path="/signout" component={Signout}/>
                <Route exact path="/" component={BurgerBuilder}/>
              </Switch>
            </Layout>
          </div>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    recoverAuthData: ()=> dispatch (actions.recoverAuthData()),
  }
}
export default withRouter(connect(null,mapDispatchToProps)(App));
