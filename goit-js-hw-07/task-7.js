const textControl = document.querySelector('#font-size-control');
const changeTextSize = document.querySelector('#text');
const handleChangeValue = function(val) {
  changeTextSize.style.fontSize = `${val.currentTarget.value}px`;
};

textControl.addEventListener('input', handleChangeValue);
