const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (dir) {
    this.isDir = true
    if (dir !== undefined) this.isDir = dir
  }
  isLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i)
  }
  encrypt(str, key) {
    if(typeof str === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!')
    }
    str = str.toUpperCase()
    key = key.toUpperCase()
    let result = ''
    for (let i = 0, j = 0; i < str.length; i += 1) {
      const letter = str.charAt(i)
      if(this.isLetter(letter)) {
        result += String.fromCharCode((letter.charCodeAt(0) + key.charCodeAt(j) - 2 * 65) % 26 + 65)
        j = ++j % key.length
      } else {
        result += letter
      }
    }
    if(this.isDir === false) result = result.split('').reverse().join('')
    return result
  }
  decrypt(str, key) {
    if(typeof str === 'undefined' || typeof key === 'undefined') {
      throw new Error('Incorrect arguments!')
    }
    str = str.toUpperCase()
    key = key.toUpperCase()
    let result = ''
    for (let i = 0, j = 0; i < str.length; i += 1) {
      const letter = str.charAt(i)
      if(this.isLetter(letter)) {
        result += String.fromCharCode(90 - (25 - (letter.charCodeAt(0) - key.charCodeAt(j))) % 26)
        j = ++j % key.length
      } else {
        result += letter
      }
    }
    if(this.isDir === false) result = result.split('').reverse().join('')
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
