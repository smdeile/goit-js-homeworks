'use strick';
import items from './gallery-items.js';
const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const lightBoxOpenImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('.lightbox__button');
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
closeButton.addEventListener('click', handleClickButton);
gallery.addEventListener('click', handleClickImage);
createMarkup(items);
