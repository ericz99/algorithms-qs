const ListNode = require("./LinkedListNode");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(val) {
    let newNode = new ListNode(val);
    let cur;

    if (!this.head) {
      this.head = newNode;
    } else {
      cur = this.head;
      // # travese to the end of the list while head not null
      while (cur !== null) {
        cur = cur.next;
      }

      // # add new node
      cur.next = newNode;
    }

    this.size++;
    return this;
  }

  remove(val) {}

  insertAt(val, index) {}

  removeFrom(val, index) {}
}
