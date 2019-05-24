import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import User from './components/User';
import Chat from './components/Chat';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom'

//old init
// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

//new for firebase integration
ReactDOM.render(
    <HashRouter>
    <div>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/" component={User}></Route>
        <Route exact path="/chat" name="chat" component={Chat}></Route></div>
    </HashRouter>, document.getElementById('root'));
    registerServiceWorker();
