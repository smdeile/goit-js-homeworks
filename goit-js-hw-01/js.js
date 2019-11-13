// const min = 10;
// const max = 100;
// const value = 29;
// let message;
// if (value < 20) {
//   message = 'this is min';
// } else if (value > 20 && value < 30) {
//   message = 'this is more';
// }
// console.log(message);
let cost;
const subscription = 'freed';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(subscription); // June
