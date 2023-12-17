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
  const nStrArr = String(n).split('');
  for (let i = 0; i < nStrArr.length; i += 1) {
    if (nStrArr.length === 2) {
      if (nStrArr[i] < nStrArr[i + 1]) {
        nStrArr.splice(i, 1);
      } else {
        nStrArr.splice(i + 1, 1);
      }
      const nStr = nStrArr.join('');
      return Number(nStr);
    }
    if (nStrArr[i] < nStrArr[i + 1]) {
      nStrArr.splice(i, 1);
    }
  }
  const nStr = nStrArr.join('');
  return Number(nStr);
}

module.exports = {
  deleteDigit
};
