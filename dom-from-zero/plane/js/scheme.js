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
      seatScheme.innerHTML = '';
      currentAirplaneInfo.innerText = data.title;
      setButtonStatus();
      let i = 1;
      currentData.scheme.forEach(row => {
        showSeats(data, i);
        if (row === 4 ) {
          const seats = Array.from(document.querySelectorAll('.seat'));
          seats[seats.length - 6].classList.add('no-seat');
          seats[seats.length - 6].classList.remove('seat');
          seats[seats.length - 6].removeChild(seats[seats.length - 6].querySelector('span'));
          seats[seats.length - 1].classList.add('no-seat');
          seats[seats.length - 1].classList.remove('seat');
          seats[seats.length - 1].removeChild(seats[seats.length - 1].querySelector('span'));
        }
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
};

document.addEventListener('DOMContentLoaded', init);

const seatsRowModel = (data, i) => {
  let seatClass = 'seat';
  if (data.scheme[i - 1] === 0) seatClass = 'no-seat';
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
            cls: ['col-xs-4', seatClass],
             content: data.scheme[i - 1] !== 0 && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[0]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClass],
            content: data.scheme[i - 1] !== 0 && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[1]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClass],
            content: data.scheme[i - 1] !== 0 && {
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
            cls: ['col-xs-4', seatClass],
            content: data.scheme[i - 1] !== 0 && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[3]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClass],
            content: data.scheme[i - 1] !== 0 && {
              tag: 'span',
              cls: 'seat-label',
              content: data.letters6[4]
            }
          },
          {
            tag: 'div',
            cls: ['col-xs-4', seatClass],
            content: data.scheme[i - 1] !== 0 && {
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



