import React, { Component } from 'react';
import {
  Button,
  ListGroup,
  ListGroupItemHeading,
  Input,
  InputGroup,
  InputGroupAddon,
  ButtonGroup
} from 'reactstrap';

class MessageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.message.text,
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
    }));
  };

  onChangeEditText = event => {
    this.setState({ editText: event.target.value });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editText);

    this.setState({ editMode: false });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;

    return (
      <ListGroup>
        {editMode ? (
          <InputGroup>
            <Input
              type="text"
              value={editText}
              onChange={this.onChangeEditText}>  
            </Input>
            <InputGroupAddon addonType="append">
              <Button
                onClick={this.onSaveEditText}
                color="success"
                >Save
              </Button>
            </InputGroupAddon>
            <InputGroupAddon addonType="append">
              <Button 
                  onClick={this.onToggleEditMode}
                  color="secondary"
                >Reset
              </Button>
            </InputGroupAddon>
          </InputGroup>
        ) : (
          <React.Fragment>
            <ListGroupItemHeading>{message.username}</ListGroupItemHeading>
              {message.text} {message.editedAt && <span>(Edited)</span>}

              {authUser.uid === message.userId && (

              <React.Fragment>
                {!editMode && (
                  <React.Fragment>
                    <ButtonGroup>
                      <Button
                        onClick={this.onToggleEditMode}
                        color="secondary"
                        size="sm"
                        >Edit
                      </Button>
                      <Button
                        type="button"
                        onClick={() => onRemoveMessage(message.uid)}
                        color="danger"
                        size="sm"
                        >Delete
                      </Button>
                    </ButtonGroup>
                  </React.Fragment>
                )}
              </React.Fragment>
        )}
          </React.Fragment>
        )}
      </ListGroup>
    );
  }
}

export default MessageItem;
