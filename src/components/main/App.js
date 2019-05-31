import React, { Component } from 'react';
import {Route, HashRouter, Link } from 'react-router-dom';
import * as ROUTES from '../../utils/routes';
import LandingPage from '../fragments/Landing';
import SignUp from '../auth/SignUp'; //Not yet implemented
import Login from '../auth/Login';
import SimpleHeader from '../fragments/simpleHeader';
import '../../stylesheets/App.css';

// import Navigation from '../fragments/Navigation'; //if needing extra easy nav use this



class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <Navigation/>  //if you want the Navigation bar showing up at the top of the page put in a call to */}
            <SimpleHeader/>
            
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Link to="/">Back</Link>
            
        </div>
      </HashRouter>
    );
  }
}

export default App;
