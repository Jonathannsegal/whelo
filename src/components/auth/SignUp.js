// import React, { Component } from 'react';
// import {database} from '../../utils/firebase';

// export default class SignUp extends Component {
//   constructor() {
//     super();

//     this.state = {
//       users: [],
//       password: '',
//       username: ''
//     };
//   }

//   componentWillMount() {
//     const userRef = database.ref('users')
//       .orderByKey()
//       .limitToLast(100);

//     userRef.once('value', snapshot => {
//       const users = [snapshot.val()];
//       this.setState({users: users});
//     });
//   }

//   onNameChange(e) {
//     this.setState({username: e.target.value})
//   }
//   onPassChange(e) {
//     this.setState({password: e.target.value})
//   }

//   onAddClick(e) {
//     e.preventDefault();
//     database.ref('users').push({password: this.state.password, username: this.state.username,});
//     console.log(this.state.username);
//     console.log(this.state.password);
//     localStorage.setItem('chat_username', this.state.username);
//     this.props.history.push('/chat');
//   }

//   render() {
//     return(
//     <div className="form-group col-md-4">
//       <h1>SignUp</h1>
//       <p>Check the databace to see me added:<br/><a href="https://console.firebase.google.com/u/0/project/***REMOVED***/database/***REMOVED***/data" target="_blank">Database</a></p>
//       <label >Username: </label>
//         <input className="form-control input-sm" id="inputsm" type="text" onChange={this.onNameChange.bind(this)}/>
//         <br/>
//       <label >Password: </label>
//         <input className="form-control input-sm" id="inputsm" type="text" onChange={this.onPassChange.bind(this)}/>
//         <br/>
//         <button className="btn btn-info" onClick={this.onAddClick.bind(this)}>SignUp</button>
//     </div>
//     );
//   }
// }

import React from 'react';
import firestore from "../../utils/firestore.js";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
     email: "",
     fullname: ""
    };
  }

  render() {
    return (
        <form>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
          />
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.updateInput}
          /> <br/>
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default SignUp;