import React from 'react';
import PropTypes from 'prop-types';

//ссылка в виджете посещаемое
function VisitedLink({link}) {
  return (
    <a href={link.link}>{link.title} - {link.descr}</a>
  );
}

VisitedLink.propTypes = {};

export default VisitedLink;