const form = document.querySelector('[type="text"]');
const output = document.querySelector('[id="name-output"]');
form.addEventListener('input', handleSubmit);
function handleSubmit(event) {
  output.textContent = event.currentTarget.value;
  if (event.target.value === '') {
    output.textContent = 'незнакомец';
  } else {
    output.textContent = event.target.value;
  }
}
