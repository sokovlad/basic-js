const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArr = []
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i] === -1) {
      let index = i
      indexArr.push(index)
    }
  }
  arr.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })
  for (let i = 0; i < indexArr.length; i += 1) {
    arr.splice(0, 1)
  }
  for (let i = 0; i < indexArr.length; i += 1) {
    arr.splice(indexArr[i], 0, -1)
  }
  return arr
}

module.exports = {
  sortByHeight
};
