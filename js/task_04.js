const countTotalSalary = function (emoloyees) {
  'use strict';

  const values = object.values(emoloyees);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total;
};
