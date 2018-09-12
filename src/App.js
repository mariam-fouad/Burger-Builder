import React, { Component } from 'react';
import { BrowserRouter , Switch , Route} from 'react-router-dom'
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Radium ,{StyleRoot}from 'radium';
import Checkout from './containers/Checkout/Checkout'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <StyleRoot>
          <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/Checkout" component={Checkout}/>
                <Route exact path="/" component={BurgerBuilder}/>
              </Switch>
            </Layout>
          </div>
        </StyleRoot>
      </BrowserRouter>
    );
  }
}

export default Radium(App);
