const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const copy = [...matrix];
  console.log(matrix);
  for (let i = 0; i < copy.length; i += 1) {
    for (let j = 0; j < copy.length; j += 1) {
      if (copy[i][j] === false) {
        if (i !== 0) {
          // down
          if (copy[i - 1][j] === true) {
            copy[i][j] += 1;
          }
          if (j !== 0) {
            // down-right
            if (copy[i - 1][j - 1] === true) {
              copy[i][j] += 1;
            }
          }
          if (j !== copy.length - 1) {
            // down-left
            if (copy[i - 1][j + 1] === true) {
              copy[i][j] += 1;
            }
          }
        }
        if (j !== 0) {
          // right
          if (copy[i][j - 1] === true) {
            copy[i][j] += 1;
          }
          if (i !== copy.length - 1) {
            // up-right
            if (copy[i + 1][j - 1] === true) {
              copy[i][j] += 1;
            }
          }
        }
        if (i !== copy.length - 1) {
          // up
          if (copy[i + 1][j] === true) {
            copy[i][j] += 1;
          }
        }
        if (j !== copy.length - 1) {
          // left
          if (copy[i][j + 1] === true) {
            copy[i][j] += 1;
          }
          if (i !== copy.length - 1) {
            // left-up
            if (copy[i + 1][j + 1] === true) {
              copy[i][j] += 1;
            }
          }
        }
      }
    }
  }
  for (let i = 0; i < copy.length; i += 1) {
    for (let j = 0; j < copy.length; j += 1) {
      if (copy[i][j] === true) copy[i][j] = 1;
    }
  }
  for (let i = 0; i < copy.length; i += 1) {
    for (let j = 0; j <= copy.length; j += 1) {
      if (copy[i][j] === false) copy[i][j] = 0;
    }
  }
  return copy;
}

module.exports = {
  minesweeper,
};
