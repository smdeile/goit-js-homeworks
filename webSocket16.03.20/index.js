import * as myModule from './geo.js';

const messageWindow = document.querySelector('#window-message');
const sendMessage = document.querySelector('.form-typing');
const input = document.querySelector('.input');
const login = document.querySelector('.login');
const showLogin = document.querySelector('.show--login');
const loginBlock = document.querySelector('.login-block');
const downloadAvatarBtn = document.querySelector('.custom-file-input');
// const photoAvatar = document.querySelector('.avatar');
const showAvatar = document.querySelector('.show--avatar');
const nicknameBlock = document.querySelector('.nickname-block');
const map = document.querySelector('.map');
const exit = document.querySelector('.exit');
let loginName;
let avatar;

checkLocalStorage();
// let ws = new WebSocket('wss://echo.websocket.org');
let ws = new WebSocket('wss://venify.herokuapp.com/chat');

function getDate() {
  const date = new Date();
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const localeUs = date.toLocaleString('en-US', options);
  return localeUs;
}

nicknameBlock.addEventListener('submit', e => {
  e.preventDefault();

  loginName = login.value;
  createLoginInfo();
  login.value = '';
  downloadAvatarBtn.textContent = '';
  localStorageSet();
  map.classList.toggle('hidden');
  exit.classList.toggle('hidden');
  myModule.launchMap();
});

sendMessage.addEventListener('submit', async event => {
  event.preventDefault();
  const userLocation = await myModule.launchMap();
  const inputText = input.value;
  input.value = '';
  ws.send(
    JSON.stringify({
      name: loginName,
      cords: userLocation,
      message: inputText,
      image: avatar,
    }),
  );
  console.log('senda');
});
ws.onmessage = ({ data }) => {
  console.log('check new message');
  const { name, message, cords, image } = JSON.parse(data);

  createMarkup(name, message, image);
  myModule.newUser(cords);
};
function createMarkup(name, message, image) {
  const newMessage = document.createElement('span');
  const textToSpan = document.createElement('p');
  const dataToSpan = document.createElement('p');
  const divPhoto = document.createElement('div');
  const photo = document.createElement('img');
  photo.classList.add('avatar');
  photo.setAttribute('src', image);
  textToSpan.textContent = `Name: ${name} Say: ${message}`;
  dataToSpan.textContent = getDate();
  newMessage.classList.add('span');
  newMessage.appendChild(textToSpan);
  newMessage.appendChild(dataToSpan);
  newMessage.appendChild(divPhoto);
  divPhoto.appendChild(photo);
  messageWindow.appendChild(newMessage);
  messageWindow.scrollTop = messageWindow.scrollHeight;
}
downloadAvatarBtn.addEventListener('change', e => {
  const file = e.target.files[0];

  const FR = new FileReader();
  FR.readAsDataURL(file);
  FR.addEventListener('load', e => {
    avatar = e.target.result;
  });
});

function checkLocalStorage() {
  const localStorageCheck = localStorage.getItem('Login');
  const dataFromLS = JSON.parse(localStorageCheck);

  console.log(localStorageCheck);
  // console.log(dataFromLS.name);
  // console.log(dataFromLS);
  if (localStorageCheck === null) {
    // loginBlock.classList.toggle('hidden');
    console.log('check and undefined');
    localStorageSet();

    map.classList.toggle('hidden');
    exit.classList.toggle('hidden');

    myModule.launchMap();
    return;
  }
  if (localStorageCheck) {
    // loginBlock.classList.toggle('hidden');
    console.log('if localstorage check');
    loginName = dataFromLS.name;
    avatar = dataFromLS.image;
    createLoginInfo();

    myModule.launchMap();

    return;
  }
}
function localStorageSet() {
  const Login = {
    name: loginName,
    image: avatar,
  };
  localStorage.setItem('Login', JSON.stringify(Login));
  loginBlock.classList.toggle('hidden');

  exit.classList.toggle('hidden');
}
function createLoginInfo() {
  showLogin.textContent = `You enter like: ${loginName}`;

  const showAvatarImg = document.createElement('img');
  showAvatarImg.classList.add('show--avatar__image');

  showAvatarImg.setAttribute('src', avatar);
  showAvatar.appendChild(showAvatarImg);
}
exit.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
