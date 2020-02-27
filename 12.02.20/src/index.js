import './styles.css';
import todoItem from './item.hbs';
import { load, save } from './storage';
const refs = {
  listTodo: document.querySelector('.todos'),
  form: document.querySelector('.form'),
  done: document.querySelector('.done'),
  deleteBtn: document.querySelector('.delete'),
};

const localStorageContain = load('addList');
const arr = [];
const newArr = arr.concat(localStorageContain);
console.log(newArr !== []);
const doneAction = function() {
  arr.pop();
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const value = e.currentTarget.elements.text.value;
  arr.push(value);
  refs.listTodo.insertAdjacentHTML('beforeend', todoItem({ text: value }));
  save('addList', arr);
});
if (newArr === []) {
  const localStorageSave = function() {
    return newArr.map(e => {
      refs.listTodo.insertAdjacentHTML('beforeend', todoItem({ text: e }));
    });
  };
  localStorageSave();
}
