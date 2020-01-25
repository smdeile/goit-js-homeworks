// const body = document.querySelector('body');
// console.log(body);
// const header = document.createElement('h1');
// header.textContent = 'this is sparta';
// console.log(header);
// const images = document.createElement('img');
// images.setAttribute('src', 'https://placeimg.com/640/480/nature');
// images.setAttribute('alt', 'smthng');
// console.log(images);
// const li = document.querySelector('li');
// li.appendChild(images);
// const newLi = document.createElement('li');
// li.prepend('li');
// const clone = li.cloneNode(true);
// clone.classList.add('blue-text');
// body.appendChild(clone);
// console.log(clone);
'use strict';
import users from './user.js';
const userList = document.querySelector('.list');
const buttonSort = document.querySelector('.buttonSort');
const buttonDelete = document.querySelector('.buttonDelete');
let sortDirection = 1;

function insertList(users) {
  const insertNames = users.reduce((usersListMarkup, user) => {
    const { name, age } = user;
    return (
      usersListMarkup + `<li class="names"> name: ${name} age: ${age}</li>`
    );
  }, '');
  userList.innerHTML = insertNames;
}

const handleClickSortAge = () => {
  const sortedUsers = [...users].sort(
    (a, b) => (a.age - b.age) * sortDirection,
  );
  insertList(sortedUsers);
  sortDirection = sortDirection * -1;
};
const handleClickDelete = () => {
  const deleteUser = users.pop();
  insertList(users);
};
// const handleClickDelete = () => {};
buttonSort.addEventListener('click', handleClickSortAge);
buttonDelete.addEventListener('click', handleClickDelete);
// buttonSort.removeEventListener('click', handleClickSortAge);
// buttonSort.addEventListener('click', handleClickSortAgeReverse);
insertList(users);
