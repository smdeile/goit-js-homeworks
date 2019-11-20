// fooBar
// const userInput = prompt('Enter value');
// if (userInput % 6 === 0) {
//   console.log('fooBar');
// } else if (userInput % 3 === 0) {
//   console.log('foo');
// } else {
//   console.log('Bar');
// }

// const size = 22;
// // let type = '';
// // if (size > 10) {
// //   type = 'box';
// // } else {
// //   type = 'car';
// // }
// const type = size > 10 ? 'box' : 'cer';
// console.log(type);
// let index = 0;
// while (index < 10) {
//   console.log(index);
//   index += 1;
// }
let i = 0;
let result = 0;
while (i < 3) {
  const userInput = prompt('Enter number');
  result += Number(userInput);
  i += 1;
}
console.log(result);
