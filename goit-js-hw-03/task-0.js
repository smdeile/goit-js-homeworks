// const hotel = {
//   name: 'california',
//   rooms: 6,
//   clients: 10,
// };
// const rob = 'manager';
// console.log(hotel.clients);
// hotel.clients = 20;
// console.log(hotel.clients);
// hotel.manager = rob;
// console.log(hotel.manager);
// delete hotel.name;
// console.log(hotel);
// let color = 'black';
// let maxSpeed = 120;
// const bantley = {
//   color: color,
//   maxSpeed: maxSpeed,
// };
// console.log(bantley);

// const color = 'variableColor';
// const book = {};
// book[color] = 'red';
// console.log(book);

// const key = 'password';
// const getKey = function() {
//   return 'age';
// };
// const object = {
//   [key]: 'qwerty',
//   [getKey()]: 3,
// };

// const hotel = {
//   name: 'california',
//   rooms: 6,
//   clients: 10,
// };

// (hotel.greetIn = function() {
//   console.log('welcome');
// }),
//   hotel.greetIn();

// const hotel = {
//   name: 'california',
//   rooms: 6,
//   clients: 10,
//   showName() {
//     console.log(this.name);
//   },
//   changeRooms(value) {
//     this.rooms = value;
//   },
// };
// hotel.showName();
// hotel.changeRooms(10);
// console.log(hotel.rooms);

// const hotel = {
//   name: 'california',
//   rooms: 6,
//   clients: 10,
// };
// for (const key in hotel) {
//   console.log('Мфдгу: ', hotel[key]);
// }

// const hotel = {
//   name: 'california',
//   rooms: 6,
//   clients: 10,
// };
// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
// console.log(keys);
// console.log(values);
// console.log(entries);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const keys = Object.keys(hotel);
// for (const key of keys) {
//   console.log('value', hotel[key]);
// }

// const entries = Object.entries(hotel);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];
//   console.log(`${key}: ${value}`);
// }

// const goods = {
//   apples: 6,
//   bananas: 3,
//   oranges: 4,
//   potatoes: 2,
//   cheese: 1,
// };

// const values = Object.values(goods);
// console.log(values);

// let total = 0;
// for (const value of values) {
//   total += value;
// }
// console.log(total);

// const speeds = [100, 80, 90, 23, 64, 120];
// const max = Math.max(...speeds, 200);
// console.log(max);
// const speeds2 = [100, 80, 90, 23, 64, 120];
// const addSpeed = [...speeds2, 300];
// console.log(addSpeed);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// const c = Object.assign({}, a, b);
// console.log(c);

// const d = { ...a, ...b };
// console.log(d);

// const add = function(...args) {
//   console.log(args);
// };
// add(1, 2, 3);
// console.log(add);

// const add = function(value, ...args) {
//   console.log(value);
//   console.log(args);
// };
// add(10, 1, 2, 3);

// const hotel = {
//   name: 'california',
//   stars: 5,
//   capacity: 100,
// };
// // const { name: hotelName, stars, status: HotelStatus = 'empty' } = hotel;
// // console.log(hotelName, stars, HotelStatus);
// const { name, ...rest } = hotel;
// console.log(name);
// console.log(rest);

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`red: ${red}, green ${green}, blue ${blue}`);

// const rgb = [200, 255, 100];
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`red: ${red}, green ${green}, blue ${blue}, alfa ${alfa}`);

const rgb = [200, 255, 100];
const [red, ...colors] = rgb;
console.log(`red: ${red}, colors: ${colors}`);
