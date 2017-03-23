import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Yeay OOK!!</h2>
        </div>
        <div className="main">
          <Tweets />
        </div>
      </div>
    );
  }
}

export default App;