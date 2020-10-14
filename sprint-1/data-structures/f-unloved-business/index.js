function solution(head, index) {
  let node = head;
  let counter = 0;

  if (index === 0) {
    return node.next;
  }

  while (counter < index - 1 && node) {
    node = node.next;
    counter++;
  }

  node.next = node.next.next;

  return head;
}
