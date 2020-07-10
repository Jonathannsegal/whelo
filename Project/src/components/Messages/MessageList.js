import React from 'react';
import MessageItem from './MessageItem';
import {
  ListGroup
} from 'reactstrap';

const MessageList = ({
  authUser,
  username,
  messages,
  onEditMessage,
  onRemoveMessage,
}) => (
  <ListGroup>
    {messages.map(message => (
      <MessageItem
        authUser={authUser}
        username={authUser.username}
        key={message.uid}
        message={message}
        onEditMessage={onEditMessage}
        onRemoveMessage={onRemoveMessage}
      />
    ))}
  </ListGroup>
);

export default MessageList;
