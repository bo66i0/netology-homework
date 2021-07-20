import React from 'react';
import PropTypes from 'prop-types';
import './ShopCard.css';

const ShopCard = (props) => {
  const {product} = props;

  return (
    <div className={'shop-card'}>
      <div className={'shop-card__name'}>{product.name}</div>
      <div className={'shop-card__color'}>{product.color}</div>
      <div className={'shop-card__img-box'}>
        <img className={'shop-card__img'} src={product.img} alt=""/>
      </div>
      <div className={'shop-card__bottom'}>
        <div className={'shop-card__price'}>${product.price}</div>
        <div className={'shop-card__add-btn-block'}>
          <button className={'shop-card__add-btn'}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ShopCard;