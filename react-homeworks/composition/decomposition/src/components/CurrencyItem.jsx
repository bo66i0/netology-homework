import React from 'react';
import PropTypes from 'prop-types';

// Отображает валюту
function CurrencyItem({currency}) {
  return (
    <li>{currency.code} {currency.value} {currency.diff}</li>
  );
}

CurrencyItem.propTypes = {};

export default CurrencyItem;