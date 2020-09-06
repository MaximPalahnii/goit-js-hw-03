const findBestEmployee = function (employees) {
  'use strict';

  const keys = Object.keys(employees);
  let result = '';
  let maxValue = 0;
  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      result = key;
    }
  }
  return result;
};

// let result = 0;
// let name = '';
// const usersKyes = Object.keys(users);
// for (key of usersKyes) {
//   if (users[key] > result) {
//     result = users[key];
//     name = key;
//   }
//   return name;
// }
