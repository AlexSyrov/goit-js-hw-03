const countTotalSalary = function (employees) {
  'use strict';

  let totalSalary = 0;

  const keys = Object.keys(employees);

  for (const key of keys) {
    totalSalary += employees[key];
  }
  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
