import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import {
	Alert,
	Card,
	Container,
	Row,
	Col,
	CardTitle,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';

const INITIAL_STATE = {
  email: '',
  error: null,
};

class passwordForgotForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;
  
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  
    event.preventDefault();
  };

  onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

		return (
			<Container>
					<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
							<Card body>
									<CardTitle tag="h3" className="text-center">Password Reset</CardTitle>
									<Form onSubmit={this.onSubmit}>
											<FormGroup>
											<Label for="email">Email</Label>
											<Input
													id="email"
													name="email"
													value={this.state.email}
													onChange={this.onChange}
													autoComplete="email"
													type="email"
													placeholder="Email" />
											</FormGroup>
											{error ? <Alert color="danger" >{error.message}</Alert> : null }
											<Button
													disabled={isInvalid}
													type="submit"
													color="success"
													>Reset My Password
											</Button>
									</Form>
							</Card>
					</Col>
					</Row>
			</Container>
		);
  }
}

const passwordForgot = withFirebase(passwordForgotForm);

export default passwordForgot