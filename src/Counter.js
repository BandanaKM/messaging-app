import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  if (props.content) {
    return (
      <h5>
        {props.content.length}
      </h5>
    );
  }
  return null;
};

Counter.propTypes = {
  content: PropTypes.string.isRequired
};

export default Counter;
