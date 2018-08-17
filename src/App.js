import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Radium ,{StyleRoot}from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Layout>
            <BurgerBuilder/>
          </Layout>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
