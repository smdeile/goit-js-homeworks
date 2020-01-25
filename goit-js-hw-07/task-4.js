let counterValue = 0;
const counter = document.querySelector('#value');
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const handleClickMinus = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};
const handleClickPlus = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
buttonMinus.addEventListener('click', handleClickMinus);
buttonPlus.addEventListener('click', handleClickPlus);
