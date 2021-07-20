import React from 'react';
import PropTypes from 'prop-types';
import Response from './Response';
import Message from './Message';
import Typing from './Typing';

const MessageHistory = ({list}) => {
  if(list.length === 0) {
    return null;
  }

  return (
    <ul style={{listStyleType: 'none'}}>
      {list.map(message => {
        switch(message.type) {
          case 'response':
            return <Response key={message.id} message={message} from={message.from}/>;
          case 'message':
            return <Message key={message.id} message={message} from={message.from}/>;
          case 'typing':
            return <Typing key={message.id} message={message} from={message.from}/>;
        }
      })}
    </ul>
  );
};

MessageHistory.propTypes = {
  list: PropTypes.array.isRequired,
};

export default MessageHistory;