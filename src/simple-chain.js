const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain :[],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value);
    return this
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || !Number.isInteger(position) || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map((elem) => elem = `( ${elem} )`);
    this.chain = [];
    return result.join('~~')
  }
};

module.exports = {
  chainMaker
};

