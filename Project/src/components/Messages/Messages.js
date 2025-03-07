import React, { Component } from 'react';

import { AuthUserContext } from '../session/session';
import { withFirebase } from '../Firebase';
import MessageList from './MessageList';
import {
  Alert,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Form,
  ListGroup
} from 'reactstrap';

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      loading: false,
      messages: [],
      limit: 10,
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .messages()
      .orderBy('createdAt', 'desc')
      .limit(this.state.limit)
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let messages = [];
          snapshot.forEach(doc =>
            messages.push({ ...doc.data(), uid: doc.id }),
          );

          this.setState({
            messages: messages.reverse(),
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateMessage = (event, authUser) => {
    this.props.firebase.messages().add({
      text: this.state.text,
      userId: authUser.uid,
      username: authUser.username,
      createdAt: this.props.firebase.fieldValue.serverTimestamp(),
    });

    this.setState({ text: '' });

    event.preventDefault();
  };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;

    this.props.firebase.message(message.uid).update({
      ...messageSnapshot,
      text,
      editedAt: this.props.firebase.fieldValue.serverTimestamp(),
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).delete();
  };

  onNextPage = () => {
    this.setState(
      state => ({ limit: state.limit + 5 }),
      this.onListenForMessages,
    );
  };

  render() {
    const { text, messages, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <React.Fragment>
            {!loading && messages && (
              <Button
                type="button"
                onClick={this.onNextPage}
                color="primary" 
                size="sm"
                >Load More Messages
              </Button>
            )}

            {loading && <Alert color="info">Loading ...</Alert>}

            {messages && (
              <ListGroup>
                <MessageList
                  authUser={authUser}
                  username={authUser.username}
                  messages={messages}
                  onEditMessage={this.onEditMessage}
                  onRemoveMessage={this.onRemoveMessage}
                />
              </ListGroup>
            )}

            {!messages && <Alert color="info" >There are no messages ...</Alert>}

            <Form onSubmit={event => this.onCreateMessage(event, authUser)}>
              <InputGroup>
                <Input 
                  type="text"
                  value={text}
                  onChange={this.onChangeText}
                />
                <InputGroupAddon addonType="append"><Button color="primary" type="submit">Send</Button></InputGroupAddon>
              </InputGroup>
            </Form>
          </React.Fragment>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(Messages);
