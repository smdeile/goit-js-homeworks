const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// const list = document.querySelector('#ingredients');
// const markup = ingredients.reduce(
//   (string, item) => string + `<li>${item}</li>`,
//   '',
// );
// console.log(markup);
// list.innerHTML = markup;
function insertList(ingredients) {
  const ingredientList = document.querySelector('#ingredients');
  const item = ingredients.map(el => {
    return ingredientList.append(createListItem(el));
  });

  function createListItem(item) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return listItem;
  }

  //   ingredientList.append(createListItem(ingredients[0]));
  //   ingredientList.append(createListItem(ingredients[1]));
  //   ingredientList.append(createListItem(ingredients[2]));
  //   ingredientList.append(createListItem(ingredients[3]));
  //   ingredientList.append(createListItem(ingredients[4]));
  //   ingredientList.append(createListItem(ingredients[5]));
}

insertList(ingredients);
