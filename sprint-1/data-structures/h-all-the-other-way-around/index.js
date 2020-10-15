function solution(head) {
  let node = head;

  while (node.next) {
    let tmp = node.next;
    node.next = node.prev;
    node.prev = tmp.next;
    node = tmp;
  }

  node.next = node.prev;

  return node;
}
