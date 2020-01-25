let countingAttributes = document.querySelector('#categories');
let categories = document.querySelector('li.item');
console.log(`в списке ${countingAttributes.childElementCount} категории`);
console.log('Категория: ', categories.firstElementChild.textContent);
console.log(
  'Количество элементов: ',
  categories.lastElementChild.children.length,
);
console.log(
  'Категория: ',
  categories.nextElementSibling.firstElementChild.textContent,
);
console.log(
  'Количество элементов: ',
  categories.nextElementSibling.lastElementChild.children.length,
);
console.log(
  'Категория: ',
  categories.nextElementSibling.nextElementSibling.firstElementChild
    .textContent,
);
console.log(
  'Количество элементов: ',
  categories.nextElementSibling.nextElementSibling.lastElementChild.children
    .length,
);
