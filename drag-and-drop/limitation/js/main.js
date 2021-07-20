'use strict';

const block = document.querySelector('.block');
const message = document.querySelector('.message');
const textArea = document.querySelector('.textarea');

const writingMessage = (event) => {
  block.classList.add('active');
  message.classList.remove('view');
};

const init = () => {
  textArea.addEventListener('keydown', writingMessage);

  textArea.addEventListener('focus', (event) => {
    block.classList.add('active');
  });

  textArea.addEventListener('blur', (event) => {
    block.classList.remove('active');
  })

  textArea.addEventListener('keydown',debounce(() => {
    message.classList.add('view');
    block.classList.remove('active');
  }, 2000));
};




function debounce(callback, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      callback();
    }, delay)
  }
}

document.addEventListener('DOMContentLoaded', init);