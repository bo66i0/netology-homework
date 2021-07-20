import React from 'react';
import PropTypes from 'prop-types';

function errorAlert({error, retryFetch}) {
  return (
    <div className="uk-alert-danger uk-flex uk-flex-between uk-flex-middle" data-uk-alert>
      <p className='error-text'>{error}</p>
      <button
        className="uk-button uk-button-small uk-button-secondary"
        onClick={retryFetch}>
        Повторить запрос
      </button>
    </div>
  );
}

errorAlert.propTypes = {};

export default errorAlert;