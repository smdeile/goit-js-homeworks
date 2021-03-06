'use strict';
// const users = [
//   {
//     name: 'John',
//     age: 100,
//     salary: 1250,
//   },
//   {
//     name: 'Valera',
//     age: 50,
//     salary: 5250,
//   },
//   {
//     name: 'Kolia',
//     age: 20,
//     salary: 7250,
//   },
//   {
//     name: 'Konchita',
//     age: 80,
//     salary: 3530,
//   },
// ];

// console.log(
//   users.reduce((summ, unit) => {
//     return summ + unit.salary;
//   }, 0),
// );

// // console.log(
// //   users.reduce((sorter, unit) => {
// //     sorter.push(...unit.age);
// //     return sorter;
// //   }, []),
// // );
// const ages = users.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(ages);
// const schema = {
//   name: true,
//   age: false,
//   salary: true,
// };
// const foo = (users, schema) => {
//   return users.map(user => {
//     return Object.keys(schema).reduce((reducedUser, schemaKey) => {
//       if (schema[schemaKey]) {
//         reducedUser[schemaKey] = user[schemaKey];
//       }
//       return reducedUser;
//     }, {});
//   });
// };
// console.log(foo(users, schema));
// import filmList from './film-list.js';
// /////////1111111111111111111111
// const getPopularity = filmList =>
//   filmList.filter(popularity => popularity.popularity > 200);
// console.log(getPopularity(filmList));
// ////////////22222222222222222222

// const getFilmYear = (filmList, year) =>
//   filmList.filter(film => new Date(film.release_date).getFullYear() === year);
// console.log(getFilmYear(filmList, 2020));
// console.log(Date.now());
////////////////333333333333333333

// const promptString = prompt('enter smth');
// const getFilmPrompt = (filmList, promptString) =>
//   filmList.filter(film => {
//     return film.original_title
//       .toLowerCase()
//       .includes(promptString.toLowerCase());
//   });
// console.log(getFilmPrompt(filmList, promptString));
////////////4444444444444444
// const getFilmGenre = filmList => {
//   const uniqId = filmList.reduce((acc, film) => {
//     acc.push(...film.genre_ids);
//     return acc;
//   }, []);
//   return [...new Set(uniqId)];
// };
// console.log(getFilmGenre(filmList));
// /////////////////////555555555555555
// const schema = {
//   release_date: true,
//   vote_average: true,
//   title: true,
//   id: true,
// };

// const filterPerData = (filmList, schema) => {
//   return filmList
//     .sort(
//       (film, filmNext) =>
//         new Date(film.release_date).getTime() -
//         new Date(filmNext.release_date).getTime(),
//     )
//     .map(user => {
//       return Object.keys(schema).reduce((reducedUser, schemaKey) => {
//         if (schema[schemaKey]) {
//           reducedUser[schemaKey] = user[schemaKey];
//         }
//         return reducedUser;
//       }, {});
//     });
// };
// console.log(filterPerData(filmList, schema));
import userList from './user-list.js';
// import parcels from './parcels.js';
const filterFirstLetter = userList => {
  const excludedLetter = ['c', 'k'];
  return userList.filter(user => {
    return !excludedLetter.includes(user.name[0].toLowerCase());
  });
};
console.log(filterFirstLetter(userList));
////////////////
const checkById = userList => {
  return userList.filter(user => user.id % 2 === 0);
};
console.log(checkById(userList));
////////////////////////
const showAdress = userList => userList.map(user => user.address);
console.log(showAdress(userList));
//////////////////////////////////
// const changeNamePlace = userList => {
//   return userList.map(user => {
//     user.name = user.name.replace(/(\w+)\s(\w+)/, '$2 $1');

//     return user;
//   });
// };
// console.log(changeNamePlace(userList));
const changeNamePlace = userList => {
  return userList.map(user => {
    user.name = user.name
      .split(' ')
      .reverse()
      .join(' ');

    return user;
  });
};
console.log(changeNamePlace(userList));
const flatObject = obj => {
  let outPutObj = {};
  Object.keys(obj).forEach(objKey => {
    if (typeof obj[objKey] === 'object') {
      outPutObj = {
        ...outPutObj,
        ...flatObject(obj[objKey]),
      };
    } else {
      outPutObj[objKey] = obj[objKey];
    }
  });
  return outPutObj;
};
console.log(flatObject(userList));
