import React from 'react';
import { compose } from 'recompose';
import {
  Card,
  Container,
  Row,
  Col
} from 'reactstrap';

// import { withAuthorization, withEmailVerification } from '../session/session';
import { withAuthorization } from '../session/session';
import Messages from '../Messages/MessageMain';

const ChatPage = () => (
  <Container>
    <Row>
      <Col sm="12" md={{ size: 10, offset: 1 }}>
        <Card body>
          <Messages />
        </Card>
      </Col>
    </Row>
  </Container>
);

const condition = authUser => !!authUser;

export default compose(
  // withEmailVerification,
  withAuthorization(condition),
)(ChatPage);