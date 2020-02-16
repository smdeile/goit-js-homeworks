import menu from './menu.json';
import templates from './templates.hbs';
import './styles.css';

const checkBox = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const jsSwitchInput = document.querySelector('.js-switch-input');
const dishMenu = document.querySelector('.js-menu');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeCondition = localStorage.getItem('Theme');
console.log(menu);
if (themeCondition === null) {
  localStorage.setItem('Theme', Theme.LIGHT);
  body.classList.add(Theme.LIGHT);
}
if (themeCondition === Theme.DARK) {
  body.classList.add(Theme.DARK);
  jsSwitchInput.checked = true;
}

const changeColor = function() {
  if (localStorage.getItem('Theme') === Theme.LIGHT) {
    console.log('ch to bl');
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    console.log('ch to wh');
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
};
function BuildMenuItem(dishMenu) {
  const markup = menu.map(item => templates(item)).join('');
  dishMenu.insertAdjacentHTML('afterbegin', markup);
}
checkBox.addEventListener('change', changeColor);
BuildMenuItem(dishMenu);
