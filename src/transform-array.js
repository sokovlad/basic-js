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
function transform(arr) {
  if (!Array.isArray(arr)) {
    arr = []
    throw new Error ('\'arr\' parameter must be an instance of the Array!')
  }
  const copyArr = [...arr]
  let discDigit = false
  for (let i = 0; i < copyArr.length; i += 1) {
    if(copyArr[i] === '--double-next') {
      if(i === copyArr.length - 1) {
        copyArr.splice(i, 1)
      } else {
        copyArr.splice(i, 1, copyArr[i+1])
        i = i - 2
      }
    } else if(copyArr[i] === '--double-prev') {
      if (discDigit === true) {
        copyArr.splice(i,1)
      } else
      if(i === 0) {
        copyArr.splice(i,1)
      } else {
        copyArr.splice(i, 1, copyArr[i-1])
      }
    } else if(copyArr[i] === '--discard-prev') {
      if (discDigit === true) {
        copyArr.splice(i,1)
      } else
      if(i === 0) {
        copyArr.splice(i, 1)
      } else {
        copyArr.splice(i-1, 2)
      }
    } else if(copyArr[i] === '--discard-next') {
      if(i === copyArr.length - 1) {
        copyArr.splice(i, 1)
      } else {
        copyArr.splice(i, 2)
        discDigit = true
        i = i - 2
      }
    } else if(copyArr[i-1] === copyArr[i] && copyArr.length < 3) {
    copyArr.splice(i-1, 1, '--double-next')
    } else if(copyArr.length === 1) {
      copyArr.splice(i, 0, '--double-prev')
    } else if(copyArr[i+1]===arr[i] && copyArr.length < 3) {
      copyArr.splice(i+1, 1, '--double-prev')
    }
  }
  return copyArr
}

module.exports = {
  transform
};
