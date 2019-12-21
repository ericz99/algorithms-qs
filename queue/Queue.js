class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    // # just push item
    this.items.push(item);
  }

  dequeue() {
    if (!this.isEmpty()) {
      // # pop the first one out
      return this.items.shift();
    } else {
      return null;
    }
  }

  front() {
    if (!this.isEmpty()) {
      // # get the first element that was initially pushed in
      return this.items[0];
    } else {
      // # return null if queue is empty
      return null;
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

module.exports = Queue;
