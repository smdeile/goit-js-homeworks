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
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const localeUs = date.toLocaleString('en-US', options);
  return localeUs;
}
downloadAvatarBtn.addEventListener('change', e => {
  const file = e.target.files[0];

  const FR = new FileReader();
  FR.readAsDataURL(file);
  FR.addEventListener('load', e => {
    avatar = e.target.result;
    console.log(avatar);
  });
});
nicknameBlock.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);

  if (avatar === undefined) {
    console.log(avatar);
    return;
  }
  loginName = login.value;
  if (loginName === '') {
    console.log(loginName);
    return;
  }
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
});
ws.onmessage = ({ data }) => {
  const { name, message, cords, image } = JSON.parse(data);

  createMarkup(name, message, image);
  myModule.newUser(cords);
};
function createMarkup(name, message, image) {
  const newMessage = document.createElement('span');
  const textToSpan = document.createElement('p');
  const chatName = document.createElement('p');
  const dataToSpan = document.createElement('p');
  const divLoginInfo = document.createElement('div');
  const photo = document.createElement('img');
  divLoginInfo.classList.add('chat-avatar');
  photo.classList.add('avatar');
  dataToSpan.classList.add('chat-data');
  chatName.classList.add('chat-name');
  textToSpan.classList.add('chat-message');

  photo.setAttribute('src', image);
  chatName.textContent = `Name: ${name}`;
  textToSpan.textContent = `Say: ${message}`;
  dataToSpan.textContent = `Time: ${getDate()}`;
  newMessage.classList.add('span');
  newMessage.appendChild(divLoginInfo);
  newMessage.appendChild(textToSpan);

  divLoginInfo.appendChild(photo);
  divLoginInfo.appendChild(chatName);
  divLoginInfo.appendChild(dataToSpan);
  messageWindow.appendChild(newMessage);
  messageWindow.scrollTop = messageWindow.scrollHeight;
}

function checkLocalStorage() {
  const localStorageCheck = localStorage.getItem('Login');
  const dataFromLS = JSON.parse(localStorageCheck);

  if (localStorageCheck === null) {
    console.log('ls null');
    console.log(localStorageCheck);
    console.log(dataFromLS);
    localStorageSet();

    map.classList.toggle('hidden');
    exit.classList.toggle('hidden');

    myModule.launchMap();
    return;
  }
  if (localStorageCheck) {
    loginName = dataFromLS.name;
    avatar = dataFromLS.image;

    if (loginName === undefined && avatar === undefined) {
      localStorageSet();
      map.classList.toggle('hidden');
      exit.classList.toggle('hidden');
    }
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
  if (avatar !== undefined) {
    const showAvatarImg = document.createElement('img');
    showAvatarImg.classList.add('show--avatar__image');

    showAvatarImg.setAttribute('src', avatar);
    showAvatar.appendChild(showAvatarImg);
  }
}
exit.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});
