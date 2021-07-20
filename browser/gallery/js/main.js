const images = [
  'breuer-building.jpg',
  'guggenheim-museum.jpg',
  'headquarters.jpg',
  'IAC.jpg',
  'new-museum.jpg'
];
let imageIndex = 0;
const nextImage = document.querySelector('#nextPhoto');
const prevImage = document.querySelector('#prevPhoto');
const currentImage = document.querySelector('#currentPhoto');
const getImageSource = (index) => {
  return '/i/' + images[index];
};

const setNextImage = () => {
  if (imageIndex === images.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }

  currentImage.src = getImageSource(imageIndex);
};

const setPrevImage = () => {
  if (imageIndex === 0) {
    imageIndex = images.length;
  } else {
    imageIndex--;
  }

  currentImage.src = getImageSource(imageIndex);
};

nextImage.onclick = setNextImage;
prevImage.onclick =  setPrevImage;
