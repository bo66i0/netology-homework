const productImage = document.querySelector('#slider');
const imagesPaths = [
  'airmax.png',
  'airmax-jump.png',
  'airmax-on-foot.png',
  'airmax-playground.png',
  'airmax-top-view.png'
];
const IMAGE_CHANGING_INTERVAL = 5000;
let imageIndex = 0;
const changeImage = (index) => {
  productImage.src = '/i/' + imagesPaths[index];
}

setInterval(() => {
  changeImage(imageIndex);
  imageIndex = imageIndex === imagesPaths.length - 1 ? 0 : imageIndex + 1;
}, IMAGE_CHANGING_INTERVAL);