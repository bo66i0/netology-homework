import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import shortid from 'shortid'

const Stars = ({count}) => {
  if(count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  const stars = [];

  for(let i=1; i<=count; i++) {
    stars.push(<li key={i}><Star/></li>);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired
};

export default Stars;