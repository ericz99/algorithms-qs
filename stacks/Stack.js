class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    } else {
      return null;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      // # return the top most element
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length !== 0 ? false : true;
  }

  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

module.exports = Stack;
