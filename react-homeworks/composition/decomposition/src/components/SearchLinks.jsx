import React from 'react';
import PropTypes from 'prop-types';
import SearchLink from './SearchLink';

//ссылки на поиск в виджете новости

function SearchLinks({links}) {
  return (
    <ul>
      {links.map(link => <SearchLink link={link}/>)}
    </ul>
  );
}

SearchLinks.propTypes = {};

export default SearchLinks;