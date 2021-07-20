import React from 'react';
import PropTypes from 'prop-types';

//ссылка в виджете новости

function SearchLink({link}) {
  return (
    <li>
      <a href={link.link}>{link.title}</a>
    </li>
  );
}

SearchLink.propTypes = {};

export default SearchLink;