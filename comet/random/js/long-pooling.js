'use strict';

const longPoolingUrl = 'https://neto-api.herokuapp.com/comet/long-pooling';
const LongPoolingSection = document.querySelector('.long-pooling');
const numbers2 = Array.from(LongPoolingSection.querySelectorAll('div'));

function longPooling() {
  fetch(longPoolingUrl)
    .then(res => res.json())
    .then(number => {
      numbers2.forEach(el => el.classList.remove('flip-it'));
      numbers2[number - 1].classList.add('flip-it');
      console.log(number);
      longPooling();
    })
}

longPooling();