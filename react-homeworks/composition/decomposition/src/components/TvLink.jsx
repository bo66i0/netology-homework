import React from 'react';
import PropTypes from 'prop-types';
//ссылка в виджете тв-программы
function TvLink({link}) {
  return (
    <a href={link.link}>{link.time} {link.title} <span>{link.channel}</span></a>
  );
}

TvLink.propTypes = {};

export default TvLink;