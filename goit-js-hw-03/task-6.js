const calculateTotalPrice = (arr, productName) => {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].name === productName) {
      const values = Object.values(arr[i]);
      const [name, price, quantity] = values;
      total += price * quantity;
    }
  }
  return total;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
const radar = [
  { name: 'Радар', price: 1000, quantity: 4 },
  { name: 'Радар', price: 200, quantity: 1 },
  { name: 'Радар', price: 30, quantity: 1 },
  { name: 'Радар', price: 1, quantity: 1 },
];
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
console.log(calculateTotalPrice(radar, 'Радар')); // 5200
