const inputCheckQuantity = document.querySelector('#validation-input');
inputCheckQuantity.addEventListener('blur', handleInput);
function handleInput(e) {
  function classValidation() {
    if (inputCheckQuantity.classList.contains('valid')) {
      inputCheckQuantity.classList.remove('valid');
    }
    if (inputCheckQuantity.classList.contains('invalid')) {
      inputCheckQuantity.classList.remove('invalid');
    }
    if (
      Number(e.currentTarget.dataset.length) === e.currentTarget.value.length
    ) {
      return 'valid';
    }
    if (
      Number(e.currentTarget.dataset.length) !== e.currentTarget.value.length
    ) {
      return 'invalid';
    }
  }
  inputCheckQuantity.classList.toggle(classValidation());
}
