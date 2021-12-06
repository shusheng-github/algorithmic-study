/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 function mergeTwoListNode(l1, l2) {
  let protect = new ListNode(0);
  let last = protect;
  while (l1 || l2) {
      if (!l2 || (l1 && l1.val <= l2.val)) {
          last.next = l1;
          l1 = l1.next;
      } else {
          last.next = l2;
          l2 = l2.next;
      }
      last = last.next;
  }
  return protect.next;
}

var mergeKLists = function (lists) {
  if (!lists.length) return null;
  function merge(l, r) {
      if (l === r) return lists[l];
      if (l > r) return null;
      let mid = (l + r) >> 1;
      return mergeTwoListNode(merge(l, mid), merge(mid + 1, r))
  }
  return merge(0, lists.length);
};