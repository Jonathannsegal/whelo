import React, { Component } from 'react';
import Chat from './Chat';


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
            //document.getElementById("username").disabled = true;
            //document.getElementById("password").disabled = true;
            //document.getElementById("submit").disabled = true;
            this.setState({ state: this.state });
            return false;
        }
    }
    renderWhat() {
        if (!loggedIn) {
            return (<div className="container">
                <div className="main">
                    <p>Please Login to chat (password = pass, username = user)</p>
                    <form id="form_id" method="post" name="myform">
                        <label>User Name : </label>
                        <input type="text" name="username" id="username" />
                        <label>Password : </label>
                        <input type="password" name="password" id="password" />
                        <input type="submit" value="Login" id="submit" onClick={this.process} />
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