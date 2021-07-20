import React from 'react';
import PropTypes from 'prop-types';
import './IconSwitch.css';

const IconSwitch = (props) => {
  const {icon, onSwitch} = props;

  return (
    <i className={'material-icons icon-switch'} onClick={onSwitch}>
      {icon}
    </i>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};

export default IconSwitch;