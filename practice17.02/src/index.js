// setTimeout(() => {
//   console.log('second'), 200;
// });
// console.log('first');
const btn = document.querySelector('button');
btn.addEventListener('click', deleteBtn);
function onClick() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('success!'));
    }, 2000);
  });
}
function deleteBtn() {
  onClick().then(data => btn.remove());
}
