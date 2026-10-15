import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import {
	Navbar,
	NavbarBrand,
	Container,
	Row,
	Col,
	Jumbotron,
	Button
} from 'reactstrap';
import SignUp from '../Auth/SignUp';
import PasswordForgot from '../Auth/PasswordForgot'
import chat from './chat'
import SignIn from '../Auth/SignIn';
import './app.css';
import {withRouter} from 'react-router-dom';
import { withAuthentication } from '../session/session';
import logo from '../../images/logo.svg';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewSignUp: false,
			viewSignIn: true
		};

		this.toggleSignUp = this.toggleSignUp.bind(this);
		this.toggleSignIn = this.toggleSignIn.bind(this);
	}

	toggleSignUp() {
		if (this.state.viewSignIn === true){
			this.setState(prevState => ({
				viewSignUp: !prevState.viewSignUp,
				viewSignIn: !prevState.viewSignIn
			}));
		} else {
			this.setState(prevState => ({
				viewSignUp: !prevState.viewSignUp,
			}));
		}
	  }

	toggleSignIn() {
		if (this.state.viewSignUp === true){
			this.setState(prevState => ({
				viewSignIn: !prevState.viewSignIn,
				viewSignUp: !prevState.viewSignUp
			}));
		} else {
			this.setState(prevState => ({
				viewSignIn: !prevState.viewSignIn,
			}));
		}
	}

	render() {
		return (
			<div>
				<Navbar dark expand="md">
					<NavbarBrand href="/">
						<img alt="logo" src={logo} style={{width:40, marginTop: -4, paddingRight: 10}}/>
						Whelo
					</NavbarBrand>
				</Navbar>
				<Jumbotron>
					<Container>
						<Row>
							<Col>
								<h1>Welcome to Whelo</h1>
								<h6>We are now using 
									<a 
									rel="noopener noreferrer" 
									target="_blank" 
									href="https://reactstrap.github.io/"
									> reactstrap
									</a>
								</h6>
								<br />
								<p>
									<Link to={ROUTES.LANDING}>
										<Button
										size="lg"
										color="primary"
										onClick={this.toggleSignIn}
										>Sign In
										</Button>
									</Link>
									{' '}
									<Link to={ROUTES.LANDING}>
										<Button
										size="lg"
										color="secondary"
										onClick={this.toggleSignUp}
										>Sign Up
										</Button>
									</Link>
								</p>
							</Col>
						</Row>
					</Container>
				</Jumbotron>

				<Route path={ROUTES.CHAT} component={chat} />
				<Route path={ROUTES.PASSWORD_FORGOT} component={PasswordForgot} />
				{(this.state.viewSignIn &&
					this.props.location.pathname !== ROUTES.PASSWORD_FORGOT &&
					this.props.location.pathname !== ROUTES.CHAT) ? <SignIn /> : null }
				{(this.state.viewSignUp &&
					this.props.location.pathname !== ROUTES.PASSWORD_FORGOT &&
					this.props.location.pathname !== ROUTES.CHAT) ? <SignUp /> : null }
			</div>
		);
	}
}

export default withRouter(withAuthentication(App));