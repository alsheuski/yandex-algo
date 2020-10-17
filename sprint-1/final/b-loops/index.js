function calcLength(head, last) {
  let node = head;
  let length = 0;

  while (node !== last) {
    length++;
    node = node.next;
  }

  return length++;
}

function hasCycle(head) {
  let node = head;
  let length = 0;

  while (node) {
    if (calcLength(head, node) < length) {
      return "True";
    } else {
      node = node.next;
      length++;
    }
  }

  return "False";
}
