const slidesList = Array.from(document.querySelectorAll('.slide'));
const buttons = Array.from(document.querySelectorAll('nav  a'));
const slides = document.querySelector('.slides');
const buttonPrev = document.querySelector('nav a[data-action=prev]');
const buttonFirst = document.querySelector('nav a[data-action=first]');
const buttonNext = document.querySelector('nav a[data-action=next]');
const buttonLast = document.querySelector('nav a[data-action=last]');

const removeCurrentSlide = () => {
  slidesList.forEach(slide => {
    slide.classList.remove('slide-current');
  });
};

const setButtonActive = (button) => {
  button.classList.remove('disabled');
};

const setButtonDisabled = (button) => {
  button.classList.add('disabled');
};

const setButtonState = () => {
  const currentSlide = slidesList.find(slide => slide.classList.contains('slide-current'));
  if (!currentSlide.nextElementSibling) {
    setButtonDisabled(buttonNext);
    setButtonDisabled(buttonLast);
    setButtonActive(buttonFirst);
    setButtonActive(buttonPrev);
  } else if (!currentSlide.previousElementSibling) {
    setButtonDisabled(buttonFirst);
    setButtonDisabled(buttonPrev);
    setButtonActive(buttonNext);
    setButtonActive(buttonLast);
  }
};

const changeSlide = (e) => {
  const currentButton = e.target;
  if (currentButton.classList.contains('disabled')) return;

  const dataAction = currentButton.dataset.action;
  const currentSlide = slides.querySelector('.slide-current');
  removeCurrentSlide();

  switch (dataAction) {
    case 'prev': {
      currentSlide.previousElementSibling.classList.add('slide-current');
      break;
    }
    case 'next': {
      currentSlide.nextElementSibling.classList.add('slide-current');
      break;
    }
    case 'first': {
      slidesList[0].classList.add('slide-current');
      break;
    }
    case 'last': {
      slidesList[slidesList.length - 1].classList.add('slide-current');
      break;
    }
  }

  setButtonState();
};

buttons.forEach(button => button.addEventListener('click', changeSlide));