const total = 100;
const ordered = 200;

const type =
  ordered <= total
    ? '"Заказ оформлен, с вами свяжется менеджер"'
    : '"На складе недостаточно товаров!"';

console.log(type);
