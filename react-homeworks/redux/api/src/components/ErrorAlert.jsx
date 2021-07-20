import React from 'react';
import PropTypes from 'prop-types';

function errorAlert({error}) {
  return (
    <div className="uk-alert-danger" data-uk-alert>
      <a className="uk-alert-close" data-uk-close/>
      <p>{error}</p>
    </div>
  );
}

errorAlert.propTypes = {};

export default errorAlert;