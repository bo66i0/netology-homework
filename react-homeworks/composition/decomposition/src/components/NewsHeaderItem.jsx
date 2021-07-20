import React from 'react';
import PropTypes from 'prop-types';

// заголовок хедера виджета новости
function NewsHeaderItem({name, link}) {
  return (
    <li><a href={link}>{name}</a></li>
  );
}

NewsHeaderItem.propTypes = {};

export default NewsHeaderItem;