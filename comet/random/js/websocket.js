'use strict';

const webSocketUrl = 'wss://neto-api.herokuapp.com/comet/websocket';
const webSocketSection = document.querySelector('.websocket');
const numbers3 = Array.from(webSocketSection.querySelectorAll('div'));

const connection = new WebSocket(webSocketUrl);

connection.addEventListener('message', (event) => {
  numbers3.forEach(el => el.classList.remove('flip-it'));
  numbers3[event.data - 1].classList.add('flip-it');
  console.log(event.data);
});