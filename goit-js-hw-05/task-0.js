// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };
// const hotel = new Hotel('Hilton', 5, 100);
// const dmfjk = new Hotel('Clinton', 5, 100);
// console.log(hotel);
// console.log(dmfjk);

// const dog = { eat: true };
// const cat = { drink: true };
// dog.__proto__ = cat;
// console.log(dog.drink);
// console.log(dog);

// function filter_list(l) {
//   const newArr = [];
//   for (const iteger of l) {
//     if (integer !== Number) {
//       push.newArr(integer);
//     }
//     return newArr;
//   }
// }
// Test.assertSimilar(filter_list([1, 2, 'a', 'b']), [1, 2]);
// let x = 1;
// const foo = function() {
//   let x = 2;
//   console.log(x);
// };
// foo();
// console.log(x);

// const mix = name => sureName => `${name} ${sureName}`;
// console.log(mix('Bob')('LOX'));
// const multiply = a => {
//   let bank = 0;
//   return arr => {
//     for (let number of arr) {
//       bank += number * a;

//       console.log(bank);
//     }

//     return bank;
//   };
// };
// console.log(multiply(10)([2, 10, 15]));

// const multiply = arr => {
//   const newArr = [];
//   for (let numb of arr) {
//     let action = numb * 2;
//     newArr.push(action);
//   }
//   return newArr;
// };
// console.log(multiply([1, 2, 3]));

// function highAndLow(numbers) {
//   const arr = numbers.split(' ');
//   console.log(arr);
//   let big;
//   let small;
//   for (let item of arr) {
//     const figure = Number(item);
//     if (Number(item) > figure) {
//       big = item;
//     }

//     if (Number(item) < figure) {
//       small = item;
//     }
//   }
//   return `${big} -${small}`;
// }
// console.log(highAndLow('1 2 3 32 4 5 6'));
// function highAndLow(numbers){
//     const arr=numbers.split(' ')
//     let big
//     let small
//     for (let item of arr) {
//     if (Number(item)>big){
//     big=item}
//     if(Number(item)<small) {
//     small=item}}
//       return `${big} ${small}`

//   }
// function noSpace(x) {
//   let newString = x.replace(/\s/g, '');
//   return newString;
// }

// noSpace('1  2 3 5 4 6ff/ f fd s');
///////////////////////////////////////////////////
// function likes(names) {
//   let message = 'no one likes this';
//   if (names.length === 1) {
//     message = `${names[0]} like this`;
//   } else if (names.length === 2) {
//     message = `${names[0]} and ${names[1]} like this`;
//   } else if (names.length === 3) {
//     message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
//   } else if (names.length >= 4) {
//     message = `${names[0]}, ${names[1]} and ${names.length -
//       2} others like this`;
//   }

//   console.log(message);
// }
// likes(['Alex', 'Jacob', 'Mark', 'Max', 'Alex', 'Jacob', 'Mark', 'Max']),
//   'Alex, Jacob and 2 others like this';
////////////////////////////////////////////////////////////
// function well(x) {
//   let good = 0;
//   // x = [];
//   let message = 'Fail!';
//   for (let item of x) {
//     if (item === 'good') {
//       good++;
//     }
//     if (good === 1 || good === 2) {
//       message = 'Publish!';
//     }
//     if (good > 2) {
//       message = 'I smell a series!';
//     }
//   }

//   return message;
// }
// console.log(
//   well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']),
// );
// console.log(well(['bad', 'bad', 'bad']));
// console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
// console.log(well([]));
////////////////////////////////////////////////////////////////
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']
// class Store {
//   constructor(name, description) {
//     this.name = name;
//     this.description = description;
//   }
//   editName() {
//     if (!user.rights) {
//       console.log('error');
//     }
//   }
// }
// const store = {
//   name: 'Nike',
//   description: 'lorem ipsum',
// };
// class User {
//   constructor(name, salary, age) {
//     this.name = name;
//     this.salary = salary;
//     this.age = age;
//     this.rights = false;
//   }
// }
// class Admin extends User {
//   constructor(name, salary, age) {}
// }
// const store = new Store('Nike', 'lorem ipsum');
// store.editName('sndfsk', user);
// store.editName('snsdfsk', admin);
//
class Car {
  constructor({ maxSpeed, speed = 0 }) {
    this._maxSpeed = maxSpeed;
    this._speed = speed;
  }

  getCar() {
    return this._maxSpeed;
  }
  getSpeed() {
    return this._speed;
  }
  get maxSpeed() {
    return this._maxSpeed;
  }
  get speed() {
    return this._speed;
  }
  set maxSpeed(km) {
    this._maxSpeed = km;
  }
}
const zapor = new Car({
  maxSpeed: 150,
});
console.log(zapor.getCar());
console.log(zapor.maxSpeed);
zapor.maxSpeed = 200;
console.log(zapor.maxSpeed);
console.log(zapor.speed);
