const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strAddition = '';
  let result = '';
  if (!options.hasOwnProperty('separator')) options.separator = '+';
  if (!options.hasOwnProperty('addition')) options.addition = '';
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|';
  if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes = 1;
  if (!options.hasOwnProperty('repeatTimes')) {
    return result = str + options.addition;
  }
  if (typeof str !== 'string') {
    str = String(str);
  };
  if (typeof options.addition !== 'string') {
    options.addition = String(options.addition);
  };
  for (let i = 1; i <= options.additionRepeatTimes; i += 1) {
    if (i === options.additionRepeatTimes) {
      strAddition += options.addition;
    } else {
      strAddition += options.addition + options.additionSeparator;
    }
  }
  for (let j = 1; j <= options.repeatTimes; j += 1) {
    if (j === options.repeatTimes) {
      result += str + strAddition;
    } else {
      result += str + strAddition + options.separator;
    }
  }
  return result;
}

module.exports = {
  repeater
};
