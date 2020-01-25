const textControl = document.querySelector('#font-size-control');
const changeTextSize = document.querySelector('#text');
const changeValue = function(val) {
  console.log(val.currentTarget.value);
  console.log((changeTextSize.style.fontSize = `${val.currentTarget.value}px`));
};

textControl.addEventListener('change', changeValue);
