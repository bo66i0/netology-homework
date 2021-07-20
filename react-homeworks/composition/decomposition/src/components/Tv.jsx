import React from 'react';
import PropTypes from 'prop-types';
import ColWidget from './ColWidget';
import TvLink from './TvLink';

// Виджет тв-программа
const tvLinks = [
  {time: '12:12', title: 'qweqwe', channel: 'qweqwe', link: '/qwe'},
  {time: '12:17', title: 'yyyywe', channel: 'asdasdwe', link: '/qwe'},
  {time: '12:11', title: 'ertere', channel: 'asdae', link: '/qwe'}
];

const addToTitleEl = <button>Эфир</button>;

function Tv(props) {
  return (
    <ColWidget link={'/qweasd'} title={'Телепрограмма'} addToTitleEl={addToTitleEl}>
      {tvLinks.map(link => <TvLink link={link}/>)}
    </ColWidget>
  );
}

Tv.propTypes = {};

export default Tv;