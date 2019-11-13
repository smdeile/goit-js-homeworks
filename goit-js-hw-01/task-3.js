const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const adminPassword = prompt('Пожалуйста введите пароль:');
console.log(adminPassword);
if (adminPassword === null) {
  message = 'Отменено пользователем!';
} else if (adminPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
