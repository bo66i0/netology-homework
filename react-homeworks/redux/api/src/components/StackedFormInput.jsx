import React from 'react';
import PropTypes from 'prop-types';

function StackedFormInput({id, name, value, onChange: handleChange, label}) {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor={id}>{label}</label>
      <div className="uk-form-controls">
        <input
          className="uk-input"
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          />
      </div>
    </div>
  );
}

StackedFormInput.propTypes = {};

export default StackedFormInput;