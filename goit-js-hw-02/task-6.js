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
  console.log(numbers);
  if (input === null) {
    numbers.pop(input);
    console.log(numbers);
    break;
  }
} while (input !== null);
console.log(calculateTheAmount(numbers));
