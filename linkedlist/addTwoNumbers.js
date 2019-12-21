/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let newListNode = new ListNode();
  let newHead = newListNode;
  let carry = 0;
  let res = 0;
  let sum = 0;

  while (l1 !== null || l2 !== null) {
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;

    if (num1 + num2 + carry >= 10) {
      res = (num1 + num2 + carry) % 10;
      carry = Math.floor((num1 + num2 + carry) / 10);
    } else {
      res = num1 + num2 + carry;
      carry = 0;
    }

    newListNode.next = new ListNode(res);
    newListNode = newListNode.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    newListNode.next = new ListNode(carry);
  }

  return newHead.next;
};
