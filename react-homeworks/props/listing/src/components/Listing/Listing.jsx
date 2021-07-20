import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';
import './Listing.css';

const Listing = ({items}) => {

  return (
    <div className="item-list">
      {items.map(item => <ItemList key={item.listing_id} item={item}/>)}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Listing;