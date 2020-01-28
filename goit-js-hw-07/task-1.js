const categories = document.querySelector('#categories');

const res = categories.children.length;
console.log(`В списке ${res} категории`);

const str = [...categories.children]
  .map(
    e =>
      `Категория: ${e.children[0].textContent}, количество элементов: ${e.children[1].children.length}`,
  )
  .join('\n');
console.log(str);
