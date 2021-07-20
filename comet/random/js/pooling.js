'use strict';

const poolingUrl = 'https://neto-api.herokuapp.com/comet/pooling';
const poolingSection = document.querySelector('.pooling');
const numbers = Array.from(poolingSection.querySelectorAll('div'));


setInterval(() => {
  fetch(poolingUrl)
    .then(res => res.json())
    .then(number => {
      numbers.forEach(el => el.classList.remove('flip-it'));
      numbers[number-1].classList.add('flip-it');
    })
}, 5000);
