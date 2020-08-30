function calculateTotalPrice(array, prop) {
  'use strct';

  let result = 0;

  for (const product of array) {
    if (prop === product.name) {
      result += product.price * product.quantily;
    }
  }
  return result;
}
