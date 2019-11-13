let input;
let total = 0;
let inputNumber;

do {
  input = prompt('введите любое число');
  inputNumber = Number(input);
  total += inputNumber;
  console.log('typeof input', typeof input);
  console.log('typeof total', typeof total);
  console.log('inpyt', input);
  console.log('total', total);
  console.log('typeof inputNumber', typeof inputNumber);
  console.log('inpytNumber', inputNumber);
} while (total === total && input !== null);
if (input === null) {
  alert(`Получилась сумма ${total}`);
}
if (total !== total) {
  alert('введите число');
}
