const sounds = ['first', 'second', 'third', 'fourth', 'fifth'];

const set = document.getElementsByClassName('set')[0];
const buttons = Array.from(set.getElementsByTagName('li'));
document.addEventListener('keydown',setPianoMode);
document.addEventListener('keyup',removePianoMode);

for(const button of buttons) {
  button.addEventListener('click',playSound);
}

function getCurrentMode() {
  const setClassList = set.classList;
  if(setClassList.contains('middle')) {
    return 'middle';
  } else if (setClassList.contains('lower')) {
    return 'lower';
  } else if (setClassList.contains('higher')) {
    return 'higher';
  }
}

function setLowerMode() {
  set.classList.remove('middle');
  set.classList.add('lower');
}

function setHigherMode() {
  set.classList.remove('middle');
  set.classList.add('higher');
}

function removeLowerMode() {
  set.classList.add('middle');
  set.classList.remove('lower');
}

function removeHigherMode() {
  set.classList.add('middle');
  set.classList.remove('higher');
}

function setPianoMode(e) {
  console.log(e.key);
  switch(e.key) {
    case 'Shift':
      e.preventDefault();
      if(!e.repeat) {
        setLowerMode();
      }
      break;
    case 'Alt':
      e.preventDefault();
      if(!e.repeat) {
        setHigherMode();
      }
      break;
  }
}

function removePianoMode(e) {
  switch(e.key) {
    case 'Shift':
      e.preventDefault();
      removeLowerMode();
      break;
    case 'Alt':
      e.preventDefault();
      removeHigherMode();
      break;
  }
}

function playSound(e) {
  const index = buttons.indexOf(e.target);
  const audio = e.target.getElementsByTagName('audio')[0];
  audio.src = `./sounds/${getCurrentMode()}/${sounds[index]}.mp3`;
  audio.play();
}