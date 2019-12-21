/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  var curA = headA;
  var curB = headB;

  while (curA != curB) {
    curA = curA == null ? headA : curA.next;
    curB = curB == null ? headB : curB.next;
  }

  return curA;
};
