'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const elementList = [];
const moveFunctionList = [nextPoint1, nextPoint2];

function nextPoint1(x, y, time) {
  return {
    x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
    y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
  };
}

function nextPoint2(x, y, time) {
  return {
    x: x + Math.sin((x + (time / 10)) / 100) * 5,
    y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getSize = () => {
  return Math.random() * (0.6 - 0.1) + 0.1;
};

const setCanvasSize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const createCross = () => {
  const element = {};
  element.name = 'cross';
  element.rotateSpeed = Math.random() * (0.2 + 0.2) - 0.2;
  element.size = getSize() * 20;
  element.x = getRandomInt(element.size / 2, canvas.width - element.size / 2);
  element.y = getRandomInt(element.size / 2, canvas.height - element.size / 2);
  element.moveFunction = moveFunctionList[getRandomInt(0, 1)];
  element.draw = () => {
    ctx.beginPath();
    ctx.color = '#fff';
    ctx.lineWidth = element.size / 7;
    const time = new Date().getTime();
    const movedXY = element.moveFunction(element.x, element.y, time);
    ctx.moveTo(movedXY.x - element.size / 2, movedXY.y);
    ctx.lineTo(movedXY.x + element.size / 2, movedXY.y);
    ctx.stroke();
    ctx.moveTo(movedXY.x, movedXY.y - element.size / 2);
    ctx.lineTo(movedXY.x, movedXY.y + element.size / 2);
    ctx.stroke();
    ctx.closePath();
  };
  return element;
};

const createCircle = () => {
  const element = {};
  element.name = 'circle';
  element.size = getSize() * 12;
  element.x = getRandomInt(element.size, canvas.width - element.size);
  element.y = getRandomInt(element.size, canvas.height - element.size);
  element.moveFunction = moveFunctionList[getRandomInt(0, 1)];
  element.draw = () => {
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = element.size / 4;
    const time = new Date().getTime();
    const movedXY = element.moveFunction(element.x, element.y, time);
    ctx.arc(movedXY.x, movedXY.y, element.size, 0, 2 * Math.PI);
    ctx.stroke();
  };
  return element;
};

const createElements = () => {
  const amount = getRandomInt(25, 100);
  for (let i = 0; i < amount; i++) {
    const circle = createCircle();
    elementList.push(circle);
    const cross = createCross();
    elementList.push(cross);
  }
};

const drawElements = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let element of elementList) {
    element.draw();
  }
};

const init = () => {
  setCanvasSize();
  createElements();
  drawElements();
};

setInterval(drawElements, 50);

document.addEventListener('DOMContentLoaded', init);