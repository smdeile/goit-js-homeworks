let cost;
let countryPrompt = prompt(
  'Укажите страну в которую хотите осуществить доставку:',
);
const country = countryPrompt.toLowerCase();
let message;
switch (country) {
  case 'китай':
    cost = 100;

    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

  default:
    message;
}

if (cost === undefined) {
  message = 'В вашей стране доставка не доступна';
} else {
  message = `Доставка в ${country} будет стоить ${cost} кредитов`;
}
alert(message);
