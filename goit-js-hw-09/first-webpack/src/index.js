import greating from './foo';
import './style.css';
import user from './user.hbs';
greating.say();
console.log(user());
const header = document.body;
const valera = {
  name: 'Valera it`s work',
};
header.insertAdjacentHTML('beforeend', user(valera));
