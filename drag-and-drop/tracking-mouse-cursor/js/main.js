'use strict';

const rightEye = document.querySelector('.cat_position_for_right_eye');
const leftEye = document.querySelector('.cat_position_for_left_eye');
const rightPupil = document.querySelector('.cat_eye_right');
const leftPupil = document.querySelector('.cat_eye_left');
const cat = document.querySelector('.cat');

const moveEye = (event, eye) => {
  let x = event.clientX - 300;
  let y = event.clientY - 300;
  const pupil = eye.querySelector('span');
  const minX = eye.offsetLeft + pupil.offsetWidth / 2;
  const minY = eye.offsetTop + pupil.offsetWidth / 2;
  const maxX = eye.offsetLeft + eye.offsetWidth - pupil.offsetWidth / 2;
  const maxY = eye.offsetTop + eye.offsetHeight - pupil.offsetHeight / 2;
  x = Math.min(x, maxX);
  y = Math.min(y, maxY);
  x = Math.max(x, minX);
  y = Math.max(y, minY);
  pupil.style.setProperty('left', x +'px');
  pupil.style.setProperty('top', y +'px');
};

document.addEventListener('mousemove', (event) => moveEye(event, rightEye));
document.addEventListener('mousemove', (event) => moveEye(event, leftEye));