// import './styles.css';
// import createSwiper from './swipper';
// import templates from './templates.hbs';
// const form = document.querySelector('.form');
// const defs = {
//   form,
//   login: form.elements.login,
//   password: form.elements.password,
// };
// const slider = document.querySelector('.swiper-wrapper');
// function buildMarkupCard(data) {
//   const markupCard = templates(data);
//   slider.insertAdjacentHTML('beforeend', markupCard);
// }
// defs.form.addEventListener('submit', loginFormAction);
// function loginFormAction(e) {
//   e.preventDefault();
//   defs.form = e.currentTarget;
//   const login = defs.login.value;
//   const password = defs.password.value;

//   pullImg(login, password);
// }
// async function pullImg(login, password) {
//   const asynchrone = await fetch('https://venify.herokuapp.com/user/login', {
//     method: 'POST',
//     body: JSON.stringify({ login, password }),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   });
//   const { token } = await asynchrone.json();

//   const dataKey = await fetch(
//     'https://venify.herokuapp.com/user/mathchedList',
//     {
//       headers: {
//         Authorization: `${token}`,
//       },
//     },
//   );

//   const dataKeyGet = await dataKey.json();

//   const images = dataKeyGet.map(el => el.image_list[0]);
//   // buildMarkupCard(images);

//   buildMarkupCard(images);
//   createSwiper();
// }
