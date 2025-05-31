const removeFromArray = function(array, ...itemToRemove) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (!itemToRemove.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

removeFromArray([1, 2, 3], 3);

// Do not edit below this line
module.exports = removeFromArray;
