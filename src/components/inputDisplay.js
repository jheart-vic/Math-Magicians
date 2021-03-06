import React from 'react';
import PropTypes from 'prop-types';

const InputResult = (props) => {
  const { displayState } = props;

  return (
    <div className="input" data-testid="displayInput">
      {displayState.next || displayState.operation || displayState.total || 0}
    </div>
  );
};

InputResult.propTypes = {
  displayState: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default InputResult;
