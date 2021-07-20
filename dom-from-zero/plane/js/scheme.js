'use strict';

const url = 'https://neto-api.herokuapp.com/plane/';
let currentData = false;

const airplaneSelect = document.querySelector('#acSelect');
const showSeatsButton = document.querySelector('#btnSeatMap');
const setSeatsFullButton = document.querySelector('#btnSetFull');
const setSeatsEmptyButton = document.querySelector('#btnSetEmpty');
const currentAirplaneInfo = document.querySelector('#seatMapTitle');
const seatScheme = document.querySelector('#seatMapDiv');
const bookedSeatsAmount = document.querySelector('#totalPax');
const adultSeatsAmount = document.querySelector('#totalAdult');
const halfCostSeatsAmount = document.querySelector('#totalHalf');

const setButtonStatus = () => {
  setSeatsFullButton.disabled = !currentData;
  setSeatsEmptyButton.disabled = !currentData;
};

const showSeats = (data, i) => {
  seatScheme.appendChild(browserTemplateEngine(seatsRowModel(data, i)))
};

setSeatsFullButton.addEventListener('click', () => {
  event.preventDefault();
  const seats = Array.from(document.querySelectorAll('.seat'));
  seats.forEach(seat => {
    if (!seat.classList.contains('half')) seat.classList.add('adult');
  });
  setFooterButtonsState();
});

setSeatsEmptyButton.addEventListener('click', () => {
  event.preventDefault();
  const seats = Array.from(document.querySelectorAll('.seat'));
  seats.forEach(seat => {
    seat.classList.remove('adult');
    seat.classList.remove('half');
  });
  setFooterButtonsState();
});

const setFooterButtonsState = () => {
  const adultSeats = document.querySelectorAll('.adult');
  const halfCostSeats = document.querySelectorAll('.half');
  bookedSeatsAmount.innerText = adultSeats.length + halfCostSeats.length;
  adultSeatsAmount.innerText = adultSeats.length;
  halfCostSeatsAmount.innerText = halfCostSeats.length;
};

const setSeatState = (event) => {
  const seat = event.currentTarget;
  if (seat.classList.contains('adult') || (seat.classList.contains('half'))) {
    seat.classList.remove('adult');
    seat.classList.remove('half');
  } else if (event.altKey) {
    seat.classList.add('half');
  } else {
    seat.classList.add('adult');
  }
  setFooterButtonsState();
};

showSeatsButton.addEventListener('click' , () => {
  event.preventDefault();
  fetch(url + airplaneSelect.value)
    .then((res) => res.json())
    .then(data => {
      currentData = data;
      console.log(currentData);
      seatScheme.innerHTML ='';
      currentAirplaneInfo.innerText = data.title;
      setButtonStatus();
      let i = 1;
      currentData.scheme.forEach(row => {
        showSeats(currentData, i);
        i++;
      });
      const seats = Array.from(document.querySelectorAll('.seat'));
      seats.forEach(seat => {
        seat.addEventListener('click', setSeatState);
      });
    });
});

const init = () => {
  setButtonStatus();
  setFooterButtonsState();
};

document.addEventListener('DOMContentLoaded', init);

const isSeatExist = (data, i, letter) => {
  if (data.scheme[i-1] === 0) {
    return false;
  }

  if (data.scheme[i-1] === 4) {
    return data.letters4.includes(letter);
  }
  if (data.scheme[i-1] === 6) return true;
};

const seatsRowModel = (data, i) => {
  let seatClassList = [];
  for (let j = 0; j < 6; j++) {
    seatClassList[j] = isSeatExist(data, i, data.letters6[j]) ? 'seat' : 'no-seat';
  }
  return {
    tag: 'div',
    cls: ['row', 'seating-row', 'text-centre'],
    content: [
      {
        tag: 'div',
        cls: ['col-xs-1', 'row-number'],
        content: {
          tag: 'h2',
          cls: '',
          content: data.scheme[i - 1] !== 0 && i
        }
      },
      {
        tag: 'div',
        cls: 'col-xs-5',
        content: [
          {
            tag: 'div',
            cls: ['col-xs-4', seatClassList[0]],
             content: isSeatExist(data, i, 'A') && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[0]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClassList[1]],
            content: isSeatExist(data, i, 'B') && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[1]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClassList[2]],
            content: isSeatExist(data, i, 'C') && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[2]
            }
          }
        ]
      },
      {
        tag: 'div',
        cls: 'col-xs-5',
        content: [
          {
            tag: 'div',
            cls: ['col-xs-4', seatClassList[3]],
            content: isSeatExist(data, i, 'D') && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[3]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClassList[4]],
            content: isSeatExist(data, i, 'E') && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[4]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClassList[5]],
            content: isSeatExist(data, i, 'F') && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[5]
            }
          }
        ]
      }
    ]
  }
};

function browserTemplateEngine(block) {
  if ((block === undefined) || (block === null) || (block === false)) {
    return document.createTextNode('');
  }

  if ((typeof block === 'string') || (typeof block === 'number') || (typeof block === true)) {
    return document.createTextNode(block);
  }

  if (Array.isArray(block)) {
    const fragment = document.createDocumentFragment();
    block.forEach(el => {
      fragment.appendChild(browserTemplateEngine(el))
    });
    return fragment;
  }

  const element = document.createElement(block.tag);
  element.classList.add(...[].concat(block.cls).filter(Boolean));
  if (block.attrs) {
    Object.keys(block.attrs).forEach(key => {
      element.setAttribute(key, block.attrs[key]);
    });
  }

  element.appendChild(browserTemplateEngine(block.content));

  return element;
}



