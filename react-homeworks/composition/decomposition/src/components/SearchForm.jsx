import React from 'react';
import PropTypes from 'prop-types';

//Форма поиска

function SearchForm(props) {
  return (
    <form>
      <input type="search"/>
      <button>Go</button>
    </form>
  );
}

SearchForm.propTypes = {};

export default SearchForm;