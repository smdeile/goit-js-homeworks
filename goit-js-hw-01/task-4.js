const credits = 23580;
const pricePerDroid = 3000;
let message;
const droidsBuy = prompt(
  'Мое почтение господин!  Введите, пожалуйста, сколько дроидов вы желаете преобрести:',
);
let totalPrice = droidsBuy * pricePerDroid;
let restCredits = credits - totalPrice;
if (droidsBuy === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${droidsBuy} дроидов, на счету осталось ${restCredits} кредитов.`;
}
alert(message);
