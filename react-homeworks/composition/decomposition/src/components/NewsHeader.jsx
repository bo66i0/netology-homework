import React from 'react';
import NewsHeaderItem from './NewsHeaderItem';
import PropTypes from 'prop-types';

//хедер виджета новости
function NewsHeader({headerTitles, date}) {
  return (
    <div>
      <ul>
        {headerTitles.map(title => <NewsHeaderItem name={title.name} link={title.link}/> )}
      </ul>
      <span>{date}</span>
    </div>
  );
}

NewsHeader.propTypes = {};

export default NewsHeader;