function getAllPropValues(array, prop) {
  'use strict';

  const result = [];

  for (const key of array) {
    if (prop in key) {
      result.push(key[prop]);
    }
  }
  return result;
}
