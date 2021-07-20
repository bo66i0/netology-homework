import React from 'react';
import PropTypes from 'prop-types';

function NotesButton({className, onClick: handleClick, ...props}) {
  return (
    <button className={`notes-button ${className}`} onClick={handleClick}>
      {props.children}
    </button>
  );
}

NotesButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default NotesButton;