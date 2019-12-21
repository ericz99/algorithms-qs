/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head == null) {
    return null;
  }

  let cur = head;
  let oddListNode = new ListNode();
  let oddList = oddListNode;
  let evenListNode = new ListNode();
  let evenList = evenListNode;
  let counter = 0;

  while (cur !== null) {
    counter += 1;

    if (counter % 2 == 1) {
      oddListNode.next = new ListNode(cur.val);
      oddListNode = oddListNode.next;
    } else {
      evenListNode.next = new ListNode(cur.val);
      evenListNode = evenListNode.next;
    }

    cur = cur.next;
  }

  oddListNode.next = evenList.next;
  return oddList.next;
};
