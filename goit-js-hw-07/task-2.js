const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientList = document.querySelector('#ingredients');

const insertList = function(ingredients) {
  const item = ingredients.reduce((acc, el) => {
    const listItem = document.createElement('li');
    listItem.textContent = el;
    acc.push(listItem);
    return acc;
  }, []);
  ingredientList.append(...item);
};

insertList(ingredients);
