import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import Navigation from './Navigation'; if needing extra easy nav use this
import LandingPage from './Landing';
import SignUp from './SignUp'; //Not yet implemented
import Login from './Login';
import PasswordForget from './PasswordForget'; //Not yet implemented
import Account from './Account'; //Not yet implemented
import Chat from './Chat_old';

import * as ROUTES from './routes';

import logo from '../images/logo.svg';
import '../stylesheets/App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.children}
        </div>
        <div>
          {//if you want the Navigation bar showing up at the top of the page put in a call to <Navigation/> 
          }
          {/* <header className="App-header">
            <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
            <p className="Title">
              Whelo
          </p>
          </header> */}
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.CHAT} component={Chat} />
        </div>
      </Router>
    );
  }
}

export default App;
