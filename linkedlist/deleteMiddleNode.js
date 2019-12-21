var deleteMiddleNode = head => {
  var slow = head;
  var fast = head;
  var prev = null;

  while (!slow && !fast && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;
  return head;
};

// o(n)

/**
 * a->b->c->d->e->f
 * a->b->d->e->f
 */
