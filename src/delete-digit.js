const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n),
        resArr = Array.from(str);

  let res = resArr.map((el,i) => str.slice(0, i) + str.slice(i + 1));
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};
