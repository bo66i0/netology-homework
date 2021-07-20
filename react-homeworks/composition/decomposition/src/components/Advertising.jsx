import React from 'react';
import PropTypes from 'prop-types';

//Рекламный баннер
function Advertising({img}) {
  return (
    <img src={img} alt=""/>
  );
}

Advertising.propTypes = {};

export default Advertising;