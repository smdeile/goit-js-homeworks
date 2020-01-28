const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createGalleryItem = ({ url, alt }) =>
  `<li class="module3"><img src="${url}" alt="${alt}"></li>`;

const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  '',
);

const galleryList = document.querySelector('#gallery');
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);

// function addImages(images) {
//   const listOfImages = document.querySelector('#gallery');
//   listOfImages.classList.add('gallery');
//   const insertTags = images.map(el => {
//     const image = Object.values(el);
//     console.log(image);
//     return `<li class="module3"><img src="${image[0]}" alt="${image[1]}"></li>`;
//   });
//   listOfImages.insertAdjacentHTML('afterbegin', insertTags);
// }

// addImages(images);
