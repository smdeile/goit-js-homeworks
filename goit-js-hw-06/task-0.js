const users = [
  {
    name: 'John',
    age: 100,
    salary: 1250,
  },
  {
    name: 'Valera',
    age: 50,
    salary: 5250,
  },
  {
    name: 'Kolia',
    age: 20,
    salary: 7250,
  },
  {
    name: 'Konchita',
    age: 80,
    salary: 3530,
  },
];

console.log(
  users.reduce((summ, unit) => {
    return summ + unit.salary;
  }, 0),
);

// console.log(
//   users.reduce((sorter, unit) => {
//     sorter.push(...unit.age);
//     return sorter;
//   }, []),
// );
const ages = users.sort((a, b) => {
  return a.age - b.age;
});
console.log(ages);
const schema = {
  name: true,
  age: false,
  salary: true,
};
const foo = (users, schema) => {
  return users.map(user => {
    return Object.keys(schema).reduce((reducedUser, schemaKey) => {
      if (schema[schemaKey]) {
        reducedUser[schemaKey] = user[schemaKey];
      }
      return reducedUser;
    }, {});
  });
};
console.log(foo(users, schema));
