import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom'
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
import Signout from './containers/Auth/Signout/Signout';
import Orders from './containers/Orders/Orders';
import Radium ,{StyleRoot}from 'radium';
import Checkout from './containers/Checkout/Checkout'
class App extends Component {
  render() {
    return (
        <StyleRoot>
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
        </StyleRoot>
    );
  }
}

export default Radium(App);
