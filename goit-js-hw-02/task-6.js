let input;
const numbers = [];
let total = 0;
const calculateTheAmount = function(array) {
  for (const number of array) {
    total += Number(number);
  }
  return total;
};
do {
  input = prompt('Enter a number,please');
  numbers.push(input);
  if (Number(input) !== Number(input)) {
    numbers.pop(input);
    alert(`"${input}" - это не число, попробуйте еще раз`);
  }
  if (input === null) {
    numbers.pop(input);

    break;
  }
} while (input !== null);
console.log(numbers);

console.log(`Общая сумма чисел равна ${calculateTheAmount(numbers)}`);
