import React from 'react';
import {messageType, fromType} from '../types'

const Message = ({message, from}) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"/>{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

Message.propTypes = {
  message: messageType,
  from: fromType
};

export default Message;