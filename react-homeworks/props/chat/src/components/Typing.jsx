import React from 'react';
import {fromType, messageType} from "../types";

const Typing = ({message, from}) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"/>{from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message typing-message">
        <i className="fa fa-circle online"/>
        <i className="fa fa-circle online" style={{opacity: .6}}/>
        <i className="fa fa-circle online" style={{opacity: .3}}/>
      </div>
    </li>
  );
};

Typing.propTypes = {
  message: messageType,
  from: fromType
};

export default Typing;