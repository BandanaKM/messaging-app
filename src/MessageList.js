import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message';

const MessageList = props => 
  <ul>
    {props.messages.map((message, index) =>
	    <Message 
	      key={index} 
	      content={message.content}
        timeSent={message.timeSent}
        initials={message.initials}
	      handleToggleEditing={() => props.toggleEditingAt(index)}
	      isEditing={message.isEditing}
	      setContent={text => props.setContentAt(text, index)}
	      handleRemove={() => props.removeMessageAt(index)} />
    )}
  </ul>;

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setContentAt: PropTypes.func.isRequired,
  removeMessageAt: PropTypes.func.isRequired,
};


export default MessageList 