import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Whelo
          </p>
        </header>
        <Login username = '' dummy = {null}/>
      </div>
    );
  }
}

export default App;
