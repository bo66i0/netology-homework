import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';
import './CardView.css';

const CardsView = (props) => {
  const {cards} = props;

  return (
    <div className={'card-view'}>
      {cards.map(card => <ShopCard key={card.name + card.color} product={card}/>)}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.array.isRequired
};

export default CardsView;