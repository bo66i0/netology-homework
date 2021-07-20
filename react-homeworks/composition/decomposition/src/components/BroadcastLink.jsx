import React from 'react';
import PropTypes from 'prop-types';

//ссылка в виджете Эфир
function BroadcastLink({link}) {
  return (
    <a href={link.link}>{link.title} <span>{link.channel}</span></a>
  );
}

BroadcastLink.propTypes = {};

export default BroadcastLink;