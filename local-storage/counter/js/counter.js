'use strict';

const incButton = document.querySelector('#increment');
const decButton = document.querySelector('#decrement');
const resetButton = document.querySelector('#reset');
const counter = document.querySelector('#counter');

const updateCounter = () => {
  counter.textContent = localStorage.counter;
};

const setCounter = () => {
  if (!localStorage.counter) {
    localStorage.counter = 0;
  }

  updateCounter();
};

const onIncButtonClick = () => {
  localStorage.counter++;
  updateCounter();
};

const onDecButtonClick = () => {
  if (localStorage.counter > 0) {
    localStorage.counter--;
  }

  updateCounter();
};

const onResetButtonClick = () => {
  localStorage.counter = 0;
  updateCounter();
};

const initCounter = () => {
  setCounter();
  incButton.addEventListener('click', onIncButtonClick);
  decButton.addEventListener('click', onDecButtonClick);
  resetButton.addEventListener('click', onResetButtonClick);
};


document.addEventListener('DOMContentLoaded', initCounter);