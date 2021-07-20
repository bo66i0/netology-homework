'use strict';

let connection;

const initConnection = () => {
  connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
  connection.addEventListener('open', () => {
    console.log('соединение утсновлено');
  });
  connection.addEventListener('message', event => {
    console.log(`Получено сообщение ${event.data}`);
  });
  connection.addEventListener('error', error => {
    console.log(`Произошла ощибка ${error.data}`);
  });
};

const onClick = (e) => {
  connection.send(JSON.stringify({
    x: e.clientX,
    y: e.clientY
  }));
};

const init = () => {
  initConnection();
  showBubbles(connection);
  document.addEventListener('click', onClick);
};

document.addEventListener('DOMContentLoaded', init);