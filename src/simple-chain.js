let chainMaker = {
  chain : [],
  addLink(value) {
    if ( value === undefined ) {
      value = '';
    }
    this.chain.push('( ' + value + ' )');
    return this;
  },
  finishChain() {
      let arr = this.chain;
      this.chain = [];
      return arr.join('~~');
      },
  reverseChain(){
   this.chain.reverse()
   return this;
  },
  removeLink(position) {
    if ( position !== parseInt(position) || position <= 0 || position > this.chain.length) {
    this.chain = [];
    throw new Error();
    }
    this.chain.splice(position - 1, 1)
    return this
      },
  getLength(){
  return this.chain.length;
  }
}
module.exports = chainMaker;
