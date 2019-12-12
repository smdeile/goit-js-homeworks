// var x = 10;

// function foo() {
//   var y = x + 5;
//   return y;
// }

// function bar() {
//   var x = 2;
//   return foo();
// }

// function main() {
//   foo(); // Static scope: 15; Dynamic scope: 15
//   bar(); // Static scope: 15; Dynamic scope: 7
//   return bar();
// }
// console.log(y);

// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;
// console.log(user);
// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}
// const sayHello = function(guest, star) {
//   return `всем приветики, вас приветствует ${this.name}! ${guest} we have ${star} stars`;
// };
// const Valera = { name: 'Valer4ik' };
// const Roma = { name: 'Rom4ik' };

// console.log(sayHello.call(Valera, 'Stas', 4));
// console.log(sayHello.call(Roma, 'Taras', 5));
// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);
// const filter = function(array, test) {
//   const filteredElemet = [];
//   for (const element of array) {
//     const passed = test(element);
//     if (passed) {
//       filteredElemet.push(element);
//     }
//   }
//   return filteredElemet;
// };
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);
// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(tabyret) {
//   const string = 'HOCs are awesome';
//   tabyret(string);
// };

// higherOrderFunction(printMessage);

// const bar = [1, 2, 3];

// const arrayMap = (arr, functionCallBack) => {
//   let result = [];
//   for (const item of arr) {
//     result.push(functionCallBack(item));
//   }
//   return result;
// };
// const square = value => value * value;
// const double = value => value * 2;
// console.log(arrayMap(bar, square));
// console.log(arrayMap(bar, double));
////////////////////////////////////////////////////
// const users = [
//   { name: 'John', age: 40 },
//   { name: 'Tom', age: 30 },
//   { name: 'Lom', age: 20 },
//   { name: 'Kom', age: 15 },
// ];
// const findElement = (arr, functionCallBack) => {
//   let result = [];
//   for (const item of arr) {
//     result.push(functionCallBack(item));
//   }
//   return result;
// };
// const findElement = (arr, functionCallBack) => {
//   for (const user of arr) {
//     if (functionCallBack(user)) return user;
//   }
// };
//////////////////////////////////////////////////////////////
// const users = [
//   { name: 'John', age: 40 },
//   { name: 'Tom', age: 30 },
//   { name: 'Lom', age: 20 },
//   { name: 'Kom', age: 15 },
// ];
// const findFilterElement = (arr, functionCallBack) => {
//   const filterArr = [];

//   for (const user of arr) {
//     if (functionCallBack(user)) {
//       filterArr.push(user);
//     }
//   }
//   return filterArr;
// };

// const filter = user => user.age < 30;

// console.log(findFilterElement(users, filter));
