import React from 'react';
import PropTypes from 'prop-types';

const MessageContent = props => {
  if (props.isEditing) {
    return (
      <input 
        type="text" 
        value={props.children} 
        onChange={props.handleContentEdits} /> 
    );
  }
  
  return (
  	<span>
      {props.children}
    </span>
  );
};

MessageContent.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleContentEdits: PropTypes.func.isRequired
}

export default MessageContent;