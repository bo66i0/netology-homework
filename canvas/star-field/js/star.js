'use strict';

const starColorList = ['#ffffff', '#ffe9c4', '#d4fbff'];
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getRandomInRange = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

class Star {
  constructor() {
    this.size = this.getSize();
    this.x = getRandomArbitrary(this.size / 2 , canvas.width - this.size / 2);
    this.y = getRandomArbitrary(this.size / 2, canvas.height - this.size / 2);
  }

  getSize() {
    return Math.random() * 1.1;
  }

  getColor() {
    return starColorList[Math.floor(Math.random() * 3)];
  }

  getBrightness() {
    return (Math.random() * 2 + 8) / 10;
  }

}

const createStarField = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const starAmount = getRandomInRange(200, 400);
  for (let i = 0; i < starAmount; i++) {
    const star = new Star();
    ctx.beginPath();
    ctx.globalAlpha = star.getBrightness();
    ctx.fillStyle = star.getColor();
    ctx.arc(star.x, star.y, star.size / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }

};

const init = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStarField();
  canvas.addEventListener('click', createStarField)
};

document.addEventListener('DOMContentLoaded', init);

