import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  CardText,
} from 'reactstrap';

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes('password');

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);

      this.state = { isSent: false };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return (
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card body>
                <AuthUserContext.Consumer>
                  {authUser =>
                    needsEmailVerification(authUser) ? (
                      <div>
                          {this.state.isSent ? (
                            <CardText>
                              E-Mail confirmation sent: Check you E-Mails (Spam
                              folder included) for a confirmation E-Mail.
                              Refresh this page once you confirmed your E-Mail.
                            </CardText>
                          ) : (
                            <CardText>
                              Verify your E-Mail: Check you E-Mails (Spam folder
                              included) for a confirmation E-Mail or send
                              another confirmation E-Mail.
                            </CardText>
                          )}
                        <Button
                          type="button"
                          color="success"
                          onClick={this.onSendEmailVerification}
                          disabled={this.state.isSent}
                          >Send confirmation E-Mail
                        </Button>
                      </div>
                    ) : (
                      <Component {...this.props} />
                    )
                  }
                </AuthUserContext.Consumer>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
  }

  return withFirebase(WithEmailVerification);
};

export default withEmailVerification;
