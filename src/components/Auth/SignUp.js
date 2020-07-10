import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import {ERROR_CODE_ACCOUNT_EXISTS, ERROR_MSG_ACCOUNT_EXISTS} from '../../constants/errors';
import { withRouter } from 'react-router-dom';
import {
	Card,
	Alert,
	Container,
	Row,
	Col,
	CardTitle,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	CardSubtitle
} from 'reactstrap';

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class signUpForm extends Component {
		constructor(props) {
				super(props);
		
				this.state = { ...INITIAL_STATE };
		}

		onSubmit = event => {
				console.log("Submitted");
				const { username, email, passwordOne } = this.state;
		
				this.props.firebase
					.doCreateUserWithEmailAndPassword(email, passwordOne)
					.then(authUser => {
						// Create a user in your Firebase realtime database
						return this.props.firebase.user(authUser.user.uid).set(
							{
								username,
								email,
							},
							{ merge: true },
						);
					})
					.then(() => {
						return this.props.firebase.doSendEmailVerification(); //This is causing the issue and not letting you pass to the chat page
					})
					.then(() => {
						this.setState({ ...INITIAL_STATE });
						this.props.history.push(ROUTES.CHAT);
					})
					.catch(error => {
						if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
							error.message = ERROR_MSG_ACCOUNT_EXISTS;
						}
		
						this.setState({ error });
					});
		
				event.preventDefault();
		};

		onChange = event => {
			this.setState({ [event.target.name]: event.target.value });
		};

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;
	
		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '';

		return (
			<Container>
					<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
							<Card body>
									<CardTitle tag="h3" className="text-center">Sign Up</CardTitle>
									<CardSubtitle tag="h6" >Sign Up does not redirect you yet but it does create an account you have to Sign In to get to chat</CardSubtitle>
									<Form onSubmit={this.onSubmit}>
											<FormGroup>
											<Label for="name">Name</Label>
											<Input
												id="username" 
												name="username"
												value={username}
												onChange={this.onChange}
												autoComplete="username"
												type="text"
												placeholder="Name" />
											</FormGroup>
											<FormGroup>
											<Label for="email">Email</Label>
											<Input
												id="email"
												name="email"
												value={email}
												onChange={this.onChange}
												autoComplete="email"
												type="email" 
												placeholder="Email" />
											</FormGroup>
											<FormGroup>
											<Label for="passwordOne">Password</Label>
											<Input 
												id="passwordOne"
												name="passwordOne"
												value={passwordOne}
												onChange={this.onChange}
												autoComplete="new-password"
												type="password"
												placeholder="Password" />
											</FormGroup>
											<FormGroup>
											<Label for="passwordTwo">Password</Label>
											<Input 
												id="passwordTwo"
												name="passwordTwo"
												value={passwordTwo}
												onChange={this.onChange}
												autoComplete="new-password"
												type="password"
												placeholder="Confirm Password" />
											</FormGroup>
											{error ? <Alert color="danger" >{error.message}</Alert> : null }
											<Button
												disabled={isInvalid}
												type="submit"
												color="success"
												>Sign Up
											</Button>
									</Form>
							</Card>
					</Col>
					</Row>
			</Container>
		);
	}
}

const signUp = withRouter(withFirebase(signUpForm));

export default signUp;