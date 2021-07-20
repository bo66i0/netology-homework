import React from 'react';
import PropTypes from 'prop-types';
import ColWidget from './ColWidget';
import VisitedLink from './VisitedLink';

//виджет посещаемое
const visitedLinks = [
  {title: '123', descr: 'adsad', link: '/asd'},
  {title: 'qwe', descr: 'ddd', link: '/asd'},
  {title: 'asd', descr: 'gggffad', link: '/asd'},
];

function Visited(props) {
  return (
    <ColWidget link={'/qweasd'} title={'Посещаемое'}>
      {visitedLinks.map(link => <VisitedLink link={link}/>)}
    </ColWidget>
  );
}

Visited.propTypes = {};

export default Visited;