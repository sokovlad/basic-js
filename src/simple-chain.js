const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  length: 0,
  result: '',
  getLength() {
    this.length = this.array.length
    return this.length
  },
  addLink(value) {
    value = `( ${value} )`
    this.array.push(value)
    return this
  },
  removeLink(position) {
    position = position - 1
    if(!Number.isInteger(position) || position < 0 || position > this.array.length - 1) {
      this.array = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.array.splice(position, 1)
    return this
  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    this.result = [...this.array].join('~~')
    this.array = []
    return this.result
  }
};

module.exports = {
  chainMaker
};
