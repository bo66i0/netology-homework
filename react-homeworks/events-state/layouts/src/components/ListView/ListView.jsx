import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem/ShopItem';

const ListView = (props) => {
  const {items} = props;

  return (
    <div className={'list-view'}>
      {items.map(item => <ShopItem key={item.name + item.color} product={item}/>)}
    </div>
  );
};

ListView.propTypes = {
  items: PropTypes.array.isRequired
};

export default ListView;