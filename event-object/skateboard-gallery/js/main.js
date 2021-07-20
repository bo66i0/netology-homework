const thumbImages = document.getElementsByClassName('gallery-nav')[0].getElementsByTagName('a');
const galleryView = document.getElementsByClassName('gallery-view')[0];

const setCurrent = (event) => {
  event.preventDefault();
  const link = event.currentTarget;
  for (const item of thumbImages) {
    item.classList.remove('gallery-current');
  }
  link.classList.add('gallery-current');
  galleryView.src = link.href;
};

for (const image of thumbImages) {
  image.addEventListener('click', setCurrent);
}
