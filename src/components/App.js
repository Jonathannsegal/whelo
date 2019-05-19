import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import Login from './Login'
import '../stylesheets/App.css';

function LogIn(){
  return (<Login username = '' dummy = {null}/>);
}

function SignUp(){
  return <h2>SignUp</h2>;
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="Title">
            Whelo
          </p>
        </header>
      </div>

      <Link to="/Login/">Login</Link> <br/>
      <Link to="/Signup/">SignUp</Link>

      <Route path="/Login/" component={LogIn} />
      <Route path="/Signup/" component={SignUp} />

      </Router>
    );
  }
}

export default App;
