const findBestEmployee = employees => {
  const valuesEmployee = Object.entries(employees);
  let bestResult = 0;
  let winner;
  for (const [key, value] of valuesEmployee) {
    if (value > bestResult) {
      bestResult = value;
      winner = `${key}: ${value}`;
    }
  }
  return winner;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
