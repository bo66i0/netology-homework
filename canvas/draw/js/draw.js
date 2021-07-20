'use strict';

const S = 100;
const L = 50;
const H_MIN = 0;
const H_MAX = 359;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let H = 0;
let drawing = false;
let lineSize = 100;
const point = {x: 0, y: 0};
let changeLineSizeIterator = -1;

const changeLineSize = () => {
  if (lineSize === 5) {
    changeLineSizeIterator = 1;
  } else if (lineSize === 100) {
    changeLineSizeIterator = -1;
  }

  lineSize += changeLineSizeIterator;
};

const drawCircle = (e) => {
  ctx.beginPath();
  ctx.fillStyle = `hsl(${H}, ${S}%, ${L}%)`;
  console.log(ctx.fillStyle);
  ctx.arc(e.clientX, e.clientY, lineSize / 2, 0, 2 * Math.PI);
  ctx.fill();
  point.x = e.clientX;
  point.y = e.clientY;
};

const draw = (e) => {
  if (e.shiftKey) {
    if (H === H_MIN) {
      H = H_MAX;
    } else {
      H--;
    }
  } else if (H === H_MAX) {
    H = H_MIN;
  } else {
    H++;
  }

  changeLineSize();
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${H}, ${S}%, ${L}%)`;
  ctx.lineWidth = lineSize;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.moveTo(point.x, point.y);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  point.x = e.clientX;
  point.y = e.clientY;
};

const setCanvasSize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const resize = () => {
  setCanvasSize();
  clearCanvas();
};

window.addEventListener('resize', resize);

const init = () => {
  setCanvasSize();
};

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('dblclick', clearCanvas);
canvas.addEventListener('mousemove', (e) => {
  if (drawing) {
    draw(e)
  }
});

canvas.addEventListener('mousedown', (e) => {
  drawing = true;
  drawCircle(e);
});

canvas.addEventListener('mouseleave', (e) => {
  drawing = false;
});

canvas.addEventListener('mouseup', (e) => {
  drawing = false;
});