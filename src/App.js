import React, { Component } from 'react';
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
            <BurgerBuilder/>
          </Layout>
          <Checkout/>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
