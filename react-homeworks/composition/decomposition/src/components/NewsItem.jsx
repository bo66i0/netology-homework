import React from 'react';
import PropTypes from 'prop-types';

//Новость в виджете новости
function NewsItem({news}) {
  return (
    <li>
      <img src={news.icon} alt=""/>
      <a href={news.link}>{news.text}</a>
    </li>
  );
}

NewsItem.propTypes = {};

export default NewsItem;