import colors from './colors.js';
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};
// let timerId = null;
// let isActive = false;
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const changeColor = function() {
//   refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
// };
// const startChangeColor = function() {
//   if (isActive == false) {
//     timerId = setInterval(changeColor, 1000);
//     isActive = true;
//     console.log('true');
//   }
// };
// const stopChangeColor = function() {
//   clearInterval(timerId);
//   isActive = false;
// };
const colorizer = {
  isActive: false,
  changerColor() {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  },

  startChangeColor() {
    if (this.isActive === true) {
      return;
    }
    this.intervalId = setInterval(this.changerColor, 1000);
    this.isActive = true;
  },
  stopChangeColor() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};
refs.startBtn.addEventListener(
  'click',
  colorizer.startChangeColor.bind(colorizer),
);
refs.stopBtn.addEventListener(
  'click',
  colorizer.stopChangeColor.bind(colorizer),
);
