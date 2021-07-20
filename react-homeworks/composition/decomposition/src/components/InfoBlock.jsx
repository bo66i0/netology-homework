import React from 'react';
import PropTypes from 'prop-types';

// информативный блок с кастомными параметрами
function InfoBlock({img, title, text, link}) {
  return (
    <div>
      <img src={img} alt=""/>
      <a href={link}>{title}</a>
      <p>{text}</p>
    </div>
  );
}

InfoBlock.propTypes = {};

export default InfoBlock;