import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';

class simple_header extends Component {
    render() {
        return (
            <header className="App-header">
                <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                <p className="Title">Whelo</p>
          </header>
        );
    }
}
export default simple_header