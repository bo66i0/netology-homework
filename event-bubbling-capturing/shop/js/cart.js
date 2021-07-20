'use strict';

const itemList = document.querySelector('.items-list');

const addProduct = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('add-to-cart')) {
    event.preventDefault();
    addToCart({title: event.target.dataset.title, price: event.target.dataset.price});
  }
};

const initCart = () => {
  itemList.addEventListener('click', addProduct);
};

document.addEventListener('DOMContentLoaded',initCart);