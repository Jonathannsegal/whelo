import React, { Component } from 'react';
import {HashRouter, Link } from 'react-router-dom';
import '../stylesheets/login.css';
class Login extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: props.username,
    //         loggedIn: props.loggedIn,
    //     };
    //     this.process = this.process.bind(this);
    // }

    /**
     * This is the handler for the login button that checks the form for the username and password and either sets the state or just alerts of incorrect information
     */
    // process = ev => {
    //     ev.preventDefault();
    //     var username = document.getElementById("username").value;
    //     var password = document.getElementById("password").value;
    //     if (username === "user" && password === "pass") {
    //         alert("Login successfully");
    //         this.setState({ loggedIn: true, user: username });
    //     }
    //     else if (username === "user" && password !== "pass") {
    //         alert("Password Incorrect");
    //     }
    //     else {
    //         alert("Login unsuccessful");
    //     }
    // }

    /**
     * This fuction will render out either the chat page or the Login page based on if the user is logged in or not.
     */
    render() {
        return (
            <div className="container">
                <p>Login</p>
            </div>
        );
    }
}

export default Login;