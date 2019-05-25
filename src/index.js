import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import Simple_Header from './components/simple_header';
// import SignUp from './components/SignUp';
// import Chat from './components/Chat';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom'

//Old: I coudlent figure out why this wasent working, Whenever you try to move the logic
// for the user authentication you get a null push error, you can replicate by placing <User/>
// in another file and trying to sumbit a request User.js line 33 is the problem.
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//     <HashRouter>
//         <div>
//             {/* <Route exact path="/" component={App}></Route> */}
//             <Simple_Header/>
//             <Route exact path="/" component={User}></Route>
//             <Route exact path="/chat" name="chat" component={Chat}></Route>
//         </div>
//     </HashRouter>, document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();