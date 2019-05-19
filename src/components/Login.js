import React, { Component } from 'react';
import Chat from './Chat';
import login_button from '../images/login_button.svg'
import '../stylesheets/login.css';


var loggedIn = false;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
        this.process = this.process.bind(this);
    }
    process = ev => {
        ev.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "user" && password === "pass") {
            alert("Login successfully");
            loggedIn = true;
            this.setState({ state: this.state, user: username});
            return false;
        }
        else {
            alert("Login unsuccessful");
            this.setState({ state: this.state });
            return false;
        }
    }
    renderWhat() {
        if (!loggedIn) {
            return (<div className="container">
                <div className="main" id="loginform" align="center">
                    <p id="title"><b>Please Login to chat (password = pass, username = user)</b></p>
                    <form id="id01" method="post" name="myform">
                        <input type="text" name="username" placeholder="Enter Username" id="username" required/>
                        <input type="password" name="password" placeholder="Enter Password" id="password" required />
                        <input type="image" src={login_button} value="Login" id="submit" alt="submit" onClick={this.process} />
                    </form>
                </div>
            </div>);
        }
        else
            return <Chat username ={this.state.user} />;
    }
    render() {
        return (
            <div>{this.renderWhat()}</div>

        );
    }
}



export default Login;