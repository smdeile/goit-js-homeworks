'use strick';
import items from './gallery-items.js';
const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const lightBoxOpenImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');
const Overlay = document.querySelector('.lightbox__content');
function createMarkup(items) {
  const markup = items.reduce((markup, user) => {
    const { preview, original, description } = user;
    return (
      markup +
      `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    );
  }, '');
  gallery.innerHTML = markup;
}
const handleClickImage = function(e) {
  e.preventDefault();
  const inputImage = e.target.getAttribute('data-source');
  modal.classList.toggle('is-open');
  lightBoxOpenImage.setAttribute('src', inputImage);
};
const handleClickButton = function(e) {
  modal.classList.toggle('is-open');
  lightBoxOpenImage.setAttribute('src', '');
};
const handleClickOverlay = function(e) {
  if (e.target === e.currentTarget) {
    modal.classList.toggle('is-open');
    lightBoxOpenImage.setAttribute('src', '');
  }
  console.log(e.currentTarget);
};
const keyboard = function(e) {
  if (e.key === 'Escape') {
    modal.classList.toggle('is-open');
    lightBoxOpenImage.setAttribute('src', '');
  }
  if (e.key === 'ArrowLeft') {
    items.map(({ original }, indx) => {
      if ((original === lightBoxOpenImage.getAttribute('src')) & (indx !== 0)) {
        return lightBoxOpenImage.setAttribute('src', items[indx - 1].original);
      }
    });
  }
  if (e.key === 'ArrowRight') {
    items.map(({ original }, indx) => {
      if (original === lightBoxOpenImage.getAttribute('src')) {
        console.log(items[indx]);
        console.log(original);
        return lightBoxOpenImage.setAttribute('src', items[indx + 1].original);
      }
    });
  }
};
closeButton.addEventListener('click', handleClickButton);
gallery.addEventListener('click', handleClickImage);
Overlay.addEventListener('click', handleClickOverlay);
window.addEventListener('keyup', keyboard);
createMarkup(items);
