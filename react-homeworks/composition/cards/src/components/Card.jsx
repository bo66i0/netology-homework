import React from 'react';
import PropTypes from 'prop-types';

function Card({image, ...props}) {
  return (
    <div className="card" style={{width: '18rem'}}>
      {image && <img src={image.src} className="card-img-top" alt={image.desc}/>}
        <div className="card-body">
          {props.children}
        </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;