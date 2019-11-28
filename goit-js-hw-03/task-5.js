const getAllPropValues = (arr, prop) => {
  const arrayOfPropValues = [];
  for (let i = 0; i < products.length; i += 1) {
    const { name, price, quantity } = products[i];

    switch (prop) {
      case 'name':
        arrayOfPropValues.push(name);
        break;

      case 'price':
        arrayOfPropValues.push(price);
        break;

      case 'quantity':
        arrayOfPropValues.push(quantity);
        break;

      default:
        break;
    }
    // if (prop === 'name') {
    //   arrayOfPropValues.push(name);
    // }
    // if (prop === 'price') {
    //   arrayOfPropValues.push(price);
    // }
    // if (prop === 'quantity') {
    //   arrayOfPropValues.push(quantity);
    // }
  }
  return arrayOfPropValues;
};
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
