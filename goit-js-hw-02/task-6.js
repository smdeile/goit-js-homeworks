let input;
const numbers = [];
let total = 0;
const calculateTheAmount = array => {
  for (const number of array) {
    total += Number(number);
  }
  return total;
};
do {
  input = prompt('Enter a number,please');
  const userInput = Number.parseFloat(input);

  if (input === null) {
    break;
  }
  if (isNaN(userInput)) {
    alert(`"${input}" - это не число, попробуйте еще раз`);
    continue;
  }
  numbers.push(userInput);
} while (input !== null);
console.log(numbers);

console.log(`Общая сумма чисел равна ${calculateTheAmount(numbers)}`);
