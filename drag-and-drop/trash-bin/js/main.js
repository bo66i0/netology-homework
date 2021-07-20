'use strict';

let movedLogo = null;
let shiftX = 0;
let shiftY = 0;
const trashBin = document.querySelector('#trash_bin');

const drag = (event) => {
  if (event.target.classList.contains('logo')) {
    movedLogo = event.target;
    const bounds = event.target.getBoundingClientRect();
    shiftX = event.pageX - bounds.left-window.pageXOffset;
    shiftY = event.pageY - bounds.top-window.pageYOffset;
  }

};

const move = (event) => {
  if (movedLogo) {
    event.preventDefault();
    movedLogo.style.left = `${event.pageX - shiftX}px`;
    movedLogo.style.top = `${event.pageY - shiftY}px`;
    movedLogo.classList.add('moving');
  }
};

const drop = (event) => {
  if (movedLogo) {
    movedLogo.style.visibility = 'hidden';
    const check = document.elementFromPoint(event.clientX, event.clientY);
    movedLogo.style.visibility = 'visible';
    movedLogo.classList.remove('moving');
    if (trashBin === check) {
      movedLogo.style.display = 'none';
    }
  }
  movedLogo = null;
};

document.addEventListener('mousedown', drag);
document.addEventListener('mousemove', move);
document.addEventListener('mouseup', drop);
