'use strict';

const pupil = document.querySelector('.big-book__pupil');

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const setPupilParams = (event) => {
  const x = event.pageX;
  const y = event.pageY;
  const pupilX = getCoords(pupil).left;
  const pupilY = getCoords(pupil).top;
  const dx = - ((pupilX - x) / pupilX * 30);
  const dy = - ((pupilY - y) / pupilY * 30);
  let sizeFactor = (((pupilX - x) ** 2 + (pupilY - y) ** 2) / (pupilX ** 2 + pupilY ** 2)) ** 0.5;
  sizeFactor = sizeFactor > 1 ? 1 : sizeFactor;
  pupil.style.setProperty('--pupil-size', 1 + (1 - sizeFactor) * 2);
  pupil.style.setProperty('--pupil-x', `${dx}px`);
  pupil.style.setProperty('--pupil-y', `${dy}px`);
};

document.addEventListener('mousemove', setPupilParams);