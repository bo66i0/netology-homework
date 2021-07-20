import React from 'react';
import {fromType, messageType} from "../types";

const Response = ({message, from}) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}</span>
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle me"/>
      </div>
      <div className="message other-message float-right">{message.text}</div>
    </li>
  );
};

Response.propTypes = {
  message: messageType,
  from: fromType
};

export default Response;