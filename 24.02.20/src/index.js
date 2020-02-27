import './styles.css';
let geo = navigator.geolocation.watchPosition(position => (geo = position));
const refs = {
  form: document.querySelector('.form-panel'),
  userName: document.querySelector('#crName'),
  profileName: document.querySelector('#crPrName'),
  age: document.querySelector('#SpAge'),
  tel: document.querySelector('#tel'),
  passW: document.querySelector('#password'),
  button: document.querySelector('#buttonCreate'),
  radio: document.querySelector('[type="radio"]'),
};
const regExPassW = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const regExNumber = /^(?=.*[0-9]){2,10}$/;
const collectData = function(e) {
  e.preventDefault();
  const age = refs.age.value;
  const tel = refs.tel.value;
  const passW = refs.passW.value;
  const userName = refs.userName.value;
  const profileName = refs.profileName.value;
  const radio = refs.radio.value;
  const dataFromForm = {
    age,
    phone_number: tel,
    password: passW,
    geo_location: geo,
    login: userName,
    profile_name: profileName,
    gender: radio,
  };
  console.log(dataFromForm);
  postData('https://venify.herokuapp.com/user/register', dataFromForm)
    .then(response => console.log(response)) // JSON-строка полученная после вызова `response.json()`
    .catch(error => console.error(error));
  if (!regExPassW.test(passW)) {
    alert('короче 1 цифра 1 большая буква и 6 букаф');
  }
  if (!regExNumber()) return dataFromForm;
};
refs.form.addEventListener('submit', collectData);

function postData(url, data = {}) {
  // Значения по умолчанию обозначены знаком *
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
  }).then(response => response.json()); // парсит JSON ответ в Javascript объект
}

// Саша написал на паре как делать перебор значений и требований к инпутам
// const form = document.querySelector('.form')
// const inputs= [
// 	{
// 		el: document.querySelector('.password'),
//     rules: [value => value.length > 7, value => value.length < 10]
// 	},
//   {
// 		el: document.querySelector('.name'),
//     rules: [value => !!value]
// 	},
// ]
// const validate = (input) => {
// 	const { el, rules } = input
//   const isValid = rules.every(rule => rule(el.value))
//   if(!isValid) el.classList.add('invalid')
// 	return isValid
// }
// form.addEventListener('submit', event => {
// 	event.preventDefault();
//   console.log(inputs.every(validate))
// })
