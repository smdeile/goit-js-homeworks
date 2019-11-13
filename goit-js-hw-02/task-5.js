const checkForSpam = function(str) {
  let message;
  message = str.toLowerCase();

  if (message.includes('spam') || message.includes('sale')) {
    message = true;
  } else message = false;

  return message;
};
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
console.log(checkForSpam('dssdale')); // если сейл +к то все равно тру? почему?
