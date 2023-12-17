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
  const strArr = str.split('');
  let result = '';
  let currentLet = '';
  let count = 1;
  for (let i = 0; i <= strArr.length; i += 1) {
    if (i === 0) {
      currentLet = strArr[i];
    } else if (strArr[i] === currentLet) {
      count +=1;
    } else {
      result += `${count}${currentLet}`;
      count = 1;
      currentLet = strArr[i];
    }
  }
  result = result.split('1').join('');
  return result;
}

module.exports = {
  encodeLine
};
