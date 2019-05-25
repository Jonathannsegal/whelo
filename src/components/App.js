import React, { Component } from 'react';
import {Route, HashRouter, Link } from 'react-router-dom';

// import Navigation from './Navigation'; //if needing extra easy nav use this
import * as ROUTES from './routes';
import LandingPage from './Landing';
import SignUp from './SignUp'; //Not yet implemented
import Login from './Login';
import Simple_Header from './simple_header';
// import PasswordForget from './PasswordForget'; //Not yet implemented
// import Account from './Account'; //Not yet implemented
import '../stylesheets/App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <Navigation/>  */} {/* //if you want the Navigation bar showing up at the top of the page put in a call to */}
            <Simple_Header/>
            
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Link to="/">Back</Link>

            {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} /> */}
            {/* <Route path={ROUTES.ACCOUNT} component={Account} /> */}
            {/* <Route path={ROUTES.CHAT} component={Chat} /> */}
            
        </div>
      </HashRouter>
    );
  }
}

export default App;
