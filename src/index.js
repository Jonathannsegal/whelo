import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/main/App';
// import Simple_Header from './components/fragments/simple_header';
// import SignUp from './components/SignUp';
// import Chat from './components/Chat';
import * as serviceWorker from './serviceWorker';
import Chat from './components/main/Chat';
import User from './components/auth/User';
import { HashRouter, Route } from 'react-router-dom'

//Old: I coudlent figure out why this wasent working, Whenever you try to move the logic
// for the user authentication you get a null push error, you can replicate by placing <User/>
// in another file and trying to sumbit a request User.js line 33 is the problem.

ReactDOM.render(
    <HashRouter>
        <div>
            <App />
            <Route exact path="/" component={User}></Route>
            <Route exact path="/chat" name="chat" component={Chat}></Route>
            </div>
    </HashRouter>, document.getElementById('root'));
serviceWorker.register();