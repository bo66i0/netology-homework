import React from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from './CurrencyItem';
import NewsItem from './NewsItem';

//тело Виджета новости
function NewsBody({news,currencies}) {
  return (
    <div>
      <ul>
        {news.map(newsItem => <NewsItem news={newsItem}/>)}
      </ul>
      <ul>
        {currencies.map(currency => <CurrencyItem currency={currency}/>)}
      </ul>
    </div>
  );
}

NewsBody.propTypes = {};

export default NewsBody;