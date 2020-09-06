const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
};
