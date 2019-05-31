import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (<div className="App">
            <Link to="/Login/">Login</Link> <br />
            <Link to="/Signup/">SignUp</Link>
        </div>);
    }
}
export default Landing