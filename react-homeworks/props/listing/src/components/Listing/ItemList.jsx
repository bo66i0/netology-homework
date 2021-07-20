import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const currencies = {
  USD: '$',
  EUR: '€'
};

const ItemList = ({item}) => {
  if(item.state === 'removed') {
    return null;
  }

  let quantityClass = classNames({
    'item-quantity': true,
    'level-low': item.quantity <=10 && item.quantity >=0,
    'level-medium': item.quantity <=20 && item.quantity >10,
    'level-high' : item.quantity > 20
  });

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage['url_570xN']} alt=""/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">
          {currencies[item.currency_code] ?
            currencies[item.currency_code] + item.price :
            item.price + ' ' + item.currency_code}
        </p>
        <p className={quantityClass}>{item.quantity} left</p>
      </div>
    </div>
  );
};

ItemList.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default ItemList;