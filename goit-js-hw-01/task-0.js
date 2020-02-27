// // fooBar
// // const userInput = prompt('Enter value');
// // if (userInput % 6 === 0) {
// //   console.log('fooBar');
// // } else if (userInput % 3 === 0) {
// //   console.log('foo');
// // } else {
// //   console.log('Bar');
// // }

// // const size = 22;
// // // let type = '';
// // // if (size > 10) {
// // //   type = 'box';
// // // } else {
// // //   type = 'car';
// // // }
// // const type = size > 10 ? 'box' : 'cer';
// // console.log(type);
// // let index = 0;
// // while (index < 10) {
// //   console.log(index);
// //   index += 1;
// // }
// // let i = 0;
// // let result = 0;
// // while (i < 3) {
// //   const userInput = prompt('Enter number');
// //   result += Number(userInput);
// //   i += 1;
// // }
// // console.log(result);
// 'use strict';
// // const arr = [1, 2, 3, 10, 112, 6];
// // let maxValue = arr[0];
// // for (let element of arr) {
// //   if (maxValue < element) {
// //     maxValue = element;
// //   }
// // }
// // console.log(arr.indexOf(maxValue));

// // const str = 'hi i am robot';
// // const arrOfWords = str
// //   .split('')
// //   .reverse()
// //   .join('');
// // console.log(arrOfWords);

// // const fruits = ['mango', 'kiwi', 'banana', 'xca'];
// // console.log(fruits.splice(1, 3));

// // const userInput = prompt('enter palindrome');
// // let check = userInput
// //   .split('')
// //   .reverse()
// //   .join('');
// // if (userInput === check) {
// //   console.log('da');
// // }

// // const userInput = prompt('enter palindrome');
// // let check = userInput.split(' ').join('');
// // let checkSentences = check
// //   .split('')
// //   .reverse()
// //   .join('');

// //   str = str.replace(/\s/g, '');

// // console.log(checkSentences);

// // if (checkSentences === check) {
// //   console.log('da');
// // }

// // str = str.replace(/\s/g, '');

// // const userInput = prompt('enter array');
// // const newArr = [];
// // let position;
// // const formatArr = userInput
// //   .split(',')
// //   .join(',')
// //   .replace(/\s/g, '')
// //   .split(',');
// // let maxValue = Number(formatArr[0]);
// // console.log(`this is format arr1 ${formatArr}`);

// // do {

// //   for (let digit of formatArr) {
// //     if (Number(maxValue) < Number(digit)) {
// //       newArr.push(digit);
// //     }
// //   }
// // } while (formatArr.length === newArr.length);
// // console.log(`this is new arr ${newArr}`);
// // for (let i = 0; i < formatArr.length; i += 1) {
// //   if (Number(maxValue) > Number(formatArr[i])) {
// //     maxValue = Number(formatArr[i]);
// //   }
// //   console.log(`this is max Value1 ${maxValue}`);
// //   console.log(`i ${i}`);
// //   newArr[0] = formatArr.splice(i, 1);
// // }
// // newArr.push(newArr[0]);
// const userInput = prompt('enter array');
// const newArr = [];
// let position;
// const formatArr = userInput.replace(/\s/g, '').split(',');
// let maxValue = Number(formatArr[0]);
// console.log(`this is format arr at begin ${formatArr}`);
// console.log(typeof formatArr);

// for (let i = 0; i < formatArr.length; i += 1) {
//   if (maxValue < Number(formatArr[i])) {
//     maxValue = Number(formatArr[i]);

//     position = i;
//     console.log(`this is max Value1 ${maxValue}`);
//     console.log(`i ${i}`);
//   }
// }
// // newArr[0] = formatArr.splice(position, 1);
// // newArr.push(newArr[0]);

// console.log(`this is format arr 2 ${formatArr}`);
// console.log(`this is max Value ${typeof maxValue}`);
// console.log(`this is max Value ${maxValue}`);
// console.log(`this is new arr ${newArr}`);

// const sortArr = formatArr.sort((a, b) => a - b);

// console.log(sortArr);
// const arr = ['first', 2, true];
// console.log(arr);
// console.log([1, 2, 3, 4, 5].slice(3));
// function foo(x) {
//   2 + x;
// }
// console.log(foo(1));
const hotel = {
  _name: 'Resort Hotel',
  $stars: 5,
  '#125_part_II': 100,
  js: 1,
};
console.log(hotel);
