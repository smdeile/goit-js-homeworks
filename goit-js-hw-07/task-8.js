// const box = document.querySelector('#controls');
// const inputBox = box.querySelector('input');
// const button = document.querySelector('button[data-action="render"]');
// const boxes = document.querySelector('#boxes');
// let quantityOfBoxes = 0;

// const handleCheck = function(e) {
//   quantityOfBoxes = Number(e.currentTarget.value);
// };
// const handleCreate = function() {
//   const createBox = '<div></div>';
//   const arr = [];

//   for (let i = 0; i < quantityOfBoxes; i += 1) {
//     arr.push(createBox);
//   }
//   const insertNodes = arr.reduce((usersListMarkup, nodes) => {
//     return usersListMarkup + nodes;
//   }, '');
//   boxes.innerHTML = insertNodes;
// };

// inputBox.addEventListener('change', handleCheck);
// button.addEventListener('click', handleCreate);
const refs = {
  input: document.querySelector('input[type="number"]'),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

const randomColor = () => Math.floor(Math.random() * 256);
const randonRGB = () =>
  `rgb(${randomColor()},${randomColor()},${randomColor()})"`;

function createBoxes(n) {
  const initSize = 30;
  const step = 10;
  console.log(n);
  const html = Array(n)
    .fill('')
    .map(
      (e, i) =>
        `<div style="width: ${initSize + step * i}px; height: ${initSize +
          step * i}px; background-color: ${randonRGB()};"></div>`,
    )
    .join('\n');
  refs.boxes.insertAdjacentHTML('afterbegin', html);
}

function renderCollection(e) {
  e.preventDefault();
  const num = +refs.input.value;
  createBoxes(num);
}
function destroyCollection(e) {
  e.preventDefault();
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}

refs.render.addEventListener('click', renderCollection);
refs.destroy.addEventListener('click', destroyCollection);
