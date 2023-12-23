const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const charArr = [];
  for (const char of str) {
    const lastChar = charArr[charArr.length - 1];

    (!lastChar || lastChar.char !== char)
        ? charArr.push({char, count: 1})
        : lastChar.count++;
  }

  return charArr.reduce((res, { char, count }) => count > 1
      ? `${res}${count}${char}`
      : `${res}${char}`, '');
}

module.exports = {
  encodeLine
};
