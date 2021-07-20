import PropTypes from 'prop-types';

const { shape, number, string, oneOf } = PropTypes;

export const itemType = shape({
  brand: string,
  title: string.isRequired,
  description: string,
  descriptionFull: string,
  price: number,
  currency: string,
}).isRequired;