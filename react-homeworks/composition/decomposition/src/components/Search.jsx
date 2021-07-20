import React from 'react';
import PropTypes from 'prop-types';
import SearchLinks from './SearchLinks';
import SearchForm from './SearchForm';
import Logo from './Logo';

//виджет поиск

const searchLinks = [
  {title: 'asd', link: 'zxc'},
  {title: 'zxc', link: 'zxc'},
  {title: 'fgh', link: 'zxc'},
];

function Search(props) {
  return (
    <div>
      <Logo/>
      <SearchLinks links={searchLinks}/>
      <SearchForm/>
    </div>
  );
}

Search.propTypes = {};

export default Search;