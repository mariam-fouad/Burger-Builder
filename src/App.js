import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom'
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
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
                <Route exact path="/" component={BurgerBuilder}/>
              </Switch>
            </Layout>
          </div>
        </StyleRoot>
    );
  }
}

export default Radium(App);
