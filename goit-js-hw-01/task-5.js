let cost;
let countryPrompt = prompt(
  'Укажите страну в которую хотите осуществить доставку:',
);
let message;
const country = countryPrompt.toLowerCase();
switch (country) {
  case 'китай':
    cost = 100;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'чили':
    cost = 250;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'австралия':
    cost = 170;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'индия':
    cost = 80;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'ямайка':
    cost = 120;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
