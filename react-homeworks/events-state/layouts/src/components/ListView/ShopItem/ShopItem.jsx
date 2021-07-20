import React from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';

const ShopItem = (props) => {
  const {product} = props;

  return (
    <div className={'shop-item'}>
      <div className="shop-item__img-block"><img className={'shop-item__img'} src={product.img} alt=""/></div>
      <div className="shop-item__name">{product.name}</div>
      <div className="shop-item__color">{product.color}</div>
      <div className="shop-item__price">${product.price}</div>
      <div className="shop-item__add-btn-block">
        <button className={'shop-item__add-btn'}>Add to cart</button>
      </div>
    </div>
  );
};

ShopItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ShopItem;