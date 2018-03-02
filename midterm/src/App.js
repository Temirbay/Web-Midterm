import React, { Component } from 'react';

import './App.css';

import Menu from './components/Menu.js'
import ProductList from './components/ProductList.js'

class App extends Component {

  constructor (props) {
    super (props);
  }

  render() {
    return (
      <div className="App">
        <Menu/>
        <ProductList/>
      </div>
    );
  }
}

export default App;
