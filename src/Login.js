import React from "react";
import Chat from './Chat';

class Login extends React.Component {
    process() {
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "user" && password === "pass") {
            alert("Login successfully");
            return false;
        }
        else {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
    render() {
        
        return (
            <div className="container">
                <div className="main">
                    <p>Please Login to chat (password = pass, username = user)</p>
                    <form id="form_id" method="post" name="myform">
                        <label>User Name : </label>
                        <input type="text" name="username" id="username" />
                        <label>Password : </label>
                        <input type="password" name="password" id="password" />
                        <input type="button" value="Login" id="submit" onClick={this.process} />
                    </form>
                </div>
            </div>
        );
    }
}



export default Login;