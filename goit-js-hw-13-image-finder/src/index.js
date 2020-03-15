import './styles.css';
// import InfiniteScroll from 'infinite-scroll';
import getImages from './apiService';
import templatesImage from './templatesImage.hbs';
// import './js/notfy';
import _ from 'lodash';
const debounced = _.debounce(pushImages, 500);
const refs = {
  search: document.querySelector('[name="query"]'),
  gallery: document.querySelector('.gallery'),
  feedContainer: document.querySelector('#feed'),
  elem: document.querySelector('.container'),
};
const inputText = refs.search.addEventListener('input', debounced);

// const infScrollInstance = new InfiniteScroll(refs.feedContainer, {
//   responseType: 'text',
//   history: false,
//   path() {
//     return `https://jsonplaceholder.typicode.com/posts?_page=${this.pageIndex}`;
//   },
// });
// infScrollInstance.on('load', (response, url) => {
//   // console.log(response);
//   const posts = JSON.parse(response);

//   console.group(url);
//   console.log(posts);
//   console.log('pageIndex: ', infScrollInstance.pageIndex);
//   console.groupEnd(url);

//   const markup = posts.map(post => postTemplate(post)).join('');

//   const proxyEl = document.createElement('div');
//   proxyEl.innerHTML = markup;

//   const parsedItems = proxyEl.querySelectorAll('.item');

//   console.log(proxyEl);
//   console.log(parsedItems);

//   infScrollInstance.appendItems(parsedItems);
// });

async function pushImages(e) {
  const find = e.target.value;
  const arrayOfImages = await getImages(find);
  const markup = await templatesImage(arrayOfImages);
  await refs.gallery.insertAdjacentHTML('beforeend', markup);
}
// infScrollInstance.loadNextPage();
