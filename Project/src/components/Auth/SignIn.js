import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { withRouter, Link } from 'react-router-dom';
import { compose } from 'recompose';
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
    Input
} from 'reactstrap';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;
    
        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.CHAT);
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
      const { email, password, error } = this.state;

      const isInvalid = password === '' || email === '';

    return (
        <Container>
            <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card body>
                    <CardTitle tag="h3" className="text-center">Sign In</CardTitle>
                    <Form onSubmit={this.onSubmit}>
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
                        <Label for="password">Password</Label>
                        <Input 
                            id="password" 
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            autoComplete="current-password"
                            type="password"
                            placeholder="Password" />
                        <Link to={ROUTES.PASSWORD_FORGOT}>
                            <Button
                                color="link"
                                type="button"
                                >Forgot Password?
                            </Button>
                        </Link>
                        </FormGroup>
                        {error ? <Alert color="danger" >{error.message}</Alert> : null }
                        <Button
                            disabled={isInvalid}
                            type="submit"
                            color="success"
                            >Sign In
                        </Button>
                    </Form>
                </Card>
            </Col>
            </Row>
        </Container>
    );
  }
}

const SignIn = compose(withRouter, withFirebase)(SignInForm);

export default SignIn