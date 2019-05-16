import React, { Component } from 'react';
import logo from './logo.svg';
import Chat from './Chat';
import Login from './Login';
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
        <Login/>
        <Chat/>
      </div>
    );
  }
}

export default App;
