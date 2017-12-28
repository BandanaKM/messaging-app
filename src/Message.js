import React from 'react';
import PropTypes from 'prop-types';
import MessageContent from './MessageContent';

const Message = props => 
	<li className="responded">
	  <h5>{props.initials}</h5>
	  <h5>{props.timeSent}</h5>
	  <MessageContent 
	    isEditing={props.isEditing} 
	    handleContentEdits={e => props.setContent(e.target.value)}>
	    {props.content}
	  </MessageContent>
	  <button onClick={props.handleToggleEditing}>
	    {props.isEditing ? "Save" : "Edit"}
	  </button>
	  <button onClick={props.handleRemove}>Delete</button>
	</li>;

Message.propTypes = {
  content: PropTypes.string.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setContent: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  timeSent: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired
};

export default Message;