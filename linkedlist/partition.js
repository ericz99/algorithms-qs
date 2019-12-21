/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var firstListNode = new ListNode();
  var secondListNode = new ListNode();
  var head1 = firstListNode;
  var head2 = secondListNode;

  while (head !== null) {
    if (head.val < x) {
      firstListNode.next = new ListNode(head.val);
      firstListNode = firstListNode.next;
    } else {
      secondListNode.next = new ListNode(head.val);
      secondListNode = secondListNode.next;
    }

    head = head.next;
  }

  firstListNode.next = head2.next;

  return head1.next;
};
