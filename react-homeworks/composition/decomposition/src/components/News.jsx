import React from 'react';
import PropTypes from 'prop-types';
import NewsHeader from './NewsHeader';
import NewsBody from './NewsBody';

//новости

const headerTitles = [
  {name: 'qwe', link: '/asd'},
  {name: 'zxc', link: '/asd'},
];

const news = [
  {icon: 'qwe.png', text: 'qwerty', link: '/asd'},
  {icon: 'vvv.png', text: 'zxc', link: '/asd'},
  {icon: 'vvv.png', text: 'asd', link: '/asd'},
  {icon: 'vvv.png', text: 'jhgf', link: '/asd'},
];

const currencies = [
  {code: 'USD', value: 65.3, diff: -2},
  {code: 'ASD', value: 2.3, diff: 3},
  {code: 'ZXC', value: 4.3, diff: -6}
];

const date = '7 августа, среда 16:19';

function News(props) {
  return (
    <div>
      <NewsHeader headerTitles={headerTitles} date={date}/>
      <NewsBody news={news} currencies={currencies}/>
    </div>
  );
}

News.propTypes = {};

export default News;