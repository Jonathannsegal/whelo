import React, { Component } from 'react';
import login_button from '../images/login_button.svg'
import '../stylesheets/login.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: props.username,
            loggedIn: props.loggedIn,
        };
        this.process = this.process.bind(this);
    }

    /**
     * This is the handler for the login button that checks the form for the username and password and either sets the state or just alerts of incorrect information
     */
    process = ev => {
        ev.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "user" && password === "pass") {
            alert("Login successfully");
            this.setState({ loggedIn: true, user: username });
        }
        else if (username === "user" && password !== "pass") {
            alert("Password Incorrect");
        }
        else {
            alert("Login unsuccessful");
        }
    }

    /**
     * This fuction will render out either the chat page or the Login page based on if the user is logged in or not.
	 * Username: user
	 * Password: pass
     */
    render() {
        if (!this.state.loggedIn) {
            return (
            <div className="container">
                <h1 id="header" align="left">Login</h1>
                <div className="main" id="loginform">
                    <p id="title"></p>
                    <form id="id01" method="post" name="myform">
                        <input type="text" name="username" placeholder="Enter Username" id="username" required />
                        <input type="password" name="password" placeholder="Enter Password" id="password" required />
                        <input type="button" src={login_button} align="center" value="Login" id="submit" alt="submit" onClick={this.process} />
                    </form>
                </div>
                <h3>Forgot Password?</h3>
            </div>);
        }
        else
            return (<head>
                <title>HTML Meta Tag</title>
                <meta http-equiv = "refresh" content = "0; url = /chat/" />
             </head>);
    }
}

export default Login;