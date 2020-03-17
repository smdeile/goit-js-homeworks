import './styles.css';
// import getImages from './apiService';
import templatesImage from './templatesImage.hbs';
import photoServices from './services/search-image';
import _ from 'lodash';
// function find(e) {
//   const find = e.target.value;
//   return find;
// }

// function url(find, page) {
//   const base =
//     'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
//   const imgPerPage = '&per_page=12';
//   const numberOfPage = `&page=${page}`;
//   const key = '&key=15565961-5e85110a0724a211af2dbcdb2';
//   const url = base + find + numberOfPage + imgPerPage + key;
//   return url;
// }

// const inputText = refs.search.addEventListener('input', debounced);

// async function pushImages() {
//   const arrayOfImages = await getImages(url);
//   const markup = await templatesImage(arrayOfImages);
//   await refs.gallery.insertAdjacentHTML('beforeend', markup);
// }

//References
const refs = {
  search: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  feedContainer: document.querySelector('#feed'),
  elem: document.querySelector('.container'),
  next: document.querySelector('#next'),
};
const debounced = _.debounce(searchByQuery, 500);

function searchByQuery(e) {
  const queryValue = e.target.value;
  clearListItem();
  photoServices.resetPage();
  photoServices.searchQuery = queryValue;
  if (queryValue) {
    return photoServices.fetchArticles().then(data => buildListMarkup(data));
  }
}

refs.search.addEventListener('input', debounced);
refs.next.addEventListener('click', loadMoreBtn);
function loadMoreBtn() {
  return photoServices.fetchArticles().then(data => {
    buildListMarkup(data);
  });
}
function buildListMarkup(items) {
  const markup = templatesImage(items);
  insertMarkup(markup);
}
function insertMarkup(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
function clearListItem() {
  refs.gallery.innerHTML = '';
}
