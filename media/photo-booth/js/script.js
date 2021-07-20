'use strict';

const app = document.querySelector('.app');
const takePhoto = document.querySelector('#take-photo');
const controls = document.querySelector('.controls');
const list = document.querySelector('.list');
const errors = document.querySelector('#error-message');

let video;
const audio = document.createElement('audio');
audio.src = './audio/click.mp3';
controls.appendChild(audio);



const init = () => {
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(stream => {
      app.appendChild(document.createElement('video'));
      video = document.querySelector('video');
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
      controls.style.display = 'flex';
    })
};

const onTakePhotoClick = () => {
  audio.currentTime = 0;
  audio.play();

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);

  list.appendChild(browserTemplateEngine(photoInListModel(canvas.toDataURL())));
};

const onListElementClick = (event) => {
  let currentTarget = event.target.parentElement;
  if (currentTarget.classList.contains('delete')) {
    while (currentTarget.tagName.toLowerCase() !== 'figure') {
      currentTarget = currentTarget.parentElement;
    }
    currentTarget.remove()
  }

  let target = event.target;
  while(target !== list) {
    if(target.classList.contains('file-upload')) {
      let listItemTarget = target.parentNode;
      let imgSrc;
      while(listItemTarget !== list) {
        if(listItemTarget.tagName.toLowerCase() === 'figure') {
          imgSrc = listItemTarget.querySelector('img').src;
        }
        listItemTarget = listItemTarget.parentNode;
      }

      fetch(imgSrc)
        .then(res => res.blob())
        .then(blob => {
          const formData = new FormData;
          formData.append('image',blob);

          fetch('https://neto-api.herokuapp.com/photo-booth',{
            method: 'POST',
            body: formData
          })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch((err) => errors.innerHTML += err.message);
        });
    }

    target = target.parentNode;
  }
};

list.addEventListener('click', onListElementClick)
takePhoto.addEventListener('click', onTakePhotoClick);
document.addEventListener('DOMContentLoaded', init);

const photoInListModel = (src) => {
  return {
    tag: 'figure',
    content: [
      {
        tag: 'img',
        attrs: {
          src: `${ src }`
        }
      },
      {
        tag: 'figcaption',
        content: [
          {
            tag: 'a',
            attrs: {
              href: `${ src }`,
              download: 'snapshot.png'
            },
            content: {
              tag: 'i',
              cls: 'material-icons',
              content: 'file_download'
            }
          },
          {
            tag: 'a',
            cls: 'file-upload',
            content: {
              tag: 'i',
              cls: 'material-icons',
              content: 'file_upload'
            }
          },
          {
            tag: 'a',
            cls: 'delete',
            content: {
              tag: 'i',
              cls: 'material-icons',
              content: 'delete'
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