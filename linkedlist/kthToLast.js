var kthToLast = (head, k) => {
  let counter = 0;
  let cur = head;
  let newHead = head;

  while (cur.next !== null) {
    counter++;
    cur = cur.next;
  }

  if (counter == 0 && counter == k) {
    return cur.val;
  }

  while (newHead.next !== null) {
    if (counter == k) {
      return newHead.val;
    }

    counter--;
    newHead = newHead.next;
  }
};

// key = 3 \ time complexity is o(ab)

/**
 * nth = index or key
 * Original List : ->1->2->8->3->7->0->4
   Output : 3rd Element from the end is : 7
 */

/**
 * ->1->2->8->3->7->0->4
 *   ^
 */
