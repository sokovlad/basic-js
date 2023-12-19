const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  const nArr = n.split('-');
  if (nArr.length !== 6) result = false;
  nArr.forEach(element => {
    const group = element.split('');
    if (group.length !== 2) result = false;
    for (let i = 0; i < group.length; i += 1) {
      if (!isNaN(Number.parseInt(group[i]))) {
        if (Number(group[i]) < 0 && !Number(group[i]) > 10) result = false;
      } else if (typeof String(group[i]) === 'string') {
        if(group[i].charCodeAt(0) < 65 || group[i].charCodeAt(0) > 70) result = false;
      } else if (isNaN(Number.parseInt(group[i]))) {
        result = false;
      }
    }
  });
  return result;
}
module.exports = {
  isMAC48Address
};
