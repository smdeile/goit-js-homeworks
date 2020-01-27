const box = document.querySelector('#controls');
const inputBox = box.querySelector('input');
const button = document.querySelector('button[data-action="render"]');
const boxes = document.querySelector('#boxes');
let quantityOfBoxes = 0;

const handleCheck = function(e) {
  quantityOfBoxes = Number(e.currentTarget.value);
};
const handleCreate = function() {
  const createBox = '<div></div>';
  const arr = [];

  for (let i = 0; i < quantityOfBoxes; i += 1) {
    arr.push(createBox);
  }
  const insertNodes = arr.reduce((usersListMarkup, nodes) => {
    return usersListMarkup + nodes;
  }, '');
  boxes.innerHTML = insertNodes;
};

inputBox.addEventListener('change', handleCheck);
button.addEventListener('click', handleCreate);
