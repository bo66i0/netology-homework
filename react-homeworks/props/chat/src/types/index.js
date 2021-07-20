import PropTypes from 'prop-types';

export const messageType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired;

export const fromType = PropTypes.shape({
  name: PropTypes.string.isRequired,
}).isRequired;