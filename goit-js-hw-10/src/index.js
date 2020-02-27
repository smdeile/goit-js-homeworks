import menu from './menu.json';
import templates from './templates.hbs';
import './styles.css';
const refs = {
  checkBox: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
  jsSwitchInput: document.querySelector('.js-switch-input'),
  dishMenu: document.querySelector('.js-menu'),
};
// const checkBox = document.querySelector('.js-switch-input');
// const body = document.querySelector('body');
// const jsSwitchInput = document.querySelector('.js-switch-input');
// const dishMenu = document.querySelector('.js-menu');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeCondition = localStorage.getItem('Theme');
if (themeCondition === null) {
  localStorage.setItem('Theme', Theme.LIGHT);
  refs.body.classList.add(Theme.LIGHT);
}
if (themeCondition === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.jsSwitchInput.checked = true;
}

const changeColor = function() {
  if (localStorage.getItem('Theme') === Theme.LIGHT) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};
function BuildMenuItem() {
  const markup = menu.map(item => templates(item)).join('');
  refs.dishMenu.insertAdjacentHTML('afterbegin', markup);
}
refs.checkBox.addEventListener('change', changeColor);
BuildMenuItem(refs.dishMenu);
