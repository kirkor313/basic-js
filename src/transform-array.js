const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};

function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length == 0) {
    return arr
  }

  const newArr = [...arr];

  for (let i = 0; i < newArr.length; i ++) {
    if (newArr[i] === '--discard-next') {
      delete newArr[i + 1];
      delete newArr[i];
    }
    if (newArr[i] === '--discard-prev') {
      delete newArr[i - 1];
      delete newArr[i];
    }
    if (newArr[i] === '--double-next') newArr[i] = newArr[i + 1];
    if (newArr[i] === '--double-prev') newArr[i] = newArr[i - 1];
  };

  return newArr.filter(el => el !== undefined)

}
