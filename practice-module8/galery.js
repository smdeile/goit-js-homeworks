const images = [
  {
    title: 'Picture1',
    description: 'lorem asd asdhasdbkjabsdksabd asbdbmsand sd ',
    src:
      'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg',
  },
  {
    title: 'Picture2',
    description: 'lorem asd asdhasdbkjabsdksabd asbdbmsand sd ',
    src:
      'https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg',
  },
  {
    title: 'Picture3',
    description: 'lorem asd asdhasdbkjabsdksabd asbdbmsand sd ',
    src:
      'https://12millionov.com/wp-content/uploads/2014/10/%D0%90%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-%D0%BC%D0%BE%D1%81%D1%8201.jpg',
  },
  {
    title: 'Picture4',
    description: 'lorem asd asdhasdbkjabsdksabd asbdbmsand sd ',
    src:
      'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];
// const gallery = document.querySelector('.list');

// function createMarkup(images) {
//   const Markup = images.reduce((acc, image) => {
//     const { title, description, src } = image;
//     return (
//       acc +
//       `<li class="item">
//     <div class="item__inner">
//         <h2 class="item__title">${title}</h2>
//         <p class="item__description">${description}</p>
//         <img class="item__image"
//             src="${src}"
//             alt="">
//     </div>
// </li>`
//     );
//   }, '');
//   gallery.innerHTML = Markup;
// }
// createMarkup(images);
const galleryList = {
  el: document.querySelector('.list'),
  _items: [],
  get items() {
    return this._items;
  },
  set items(items) {
    this._items = items;
    this.render();
  },
  generateListItem({ title, description, src }) {
    return `<li class="item">
                    <div class="item__inner">
                        <h2 class="item__title">${title}</h2>
                        <p class="item__description">${description}</p>
                        <img class="item__image"
                            src="${src}"
                            alt="">
                    </div>
                </li>`;
  },
  render() {
    this.el.innerHTML = this._items.reduce((acc, item) => {
      return acc + this.generateListItem(item);
    }, '');
  },
};
const observerList = document.querySelector('.list-observer');
const options = {
  rootMargin: '50px',
  threshold: 0.5,
};

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      galleryList.items = [...galleryList.items, ...images];
    }
  });
  console.log('dfsfd');
};
const observer = new IntersectionObserver(onEntry, options);
observer.observe(observerList);
galleryList.items = images;
