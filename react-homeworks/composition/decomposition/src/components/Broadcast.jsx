import React from 'react';
import PropTypes from 'prop-types';
import ColWidget from './ColWidget';
import BroadcastLink from './VisitedLink';

//Виджет Эфир
const broadcastLinks = [
  {title: 'qweqwe', channel: 'qweqwe', link: '/qwe'},
  {title: 'yyyywe', channel: 'asdasdwe', link: '/qwe'},
  {title: 'ertere', channel: 'asdae', link: '/qwe'}
];

function Broadcast(props) {
  return (
    <ColWidget link={'/qweasd'} title={'Эфир'}>
      {broadcastLinks.map(link => <BroadcastLink link={link}/>)}
    </ColWidget>
  );
}

Broadcast.propTypes = {};

export default Broadcast;