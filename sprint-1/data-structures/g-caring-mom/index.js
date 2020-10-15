function solution(head, target) {
  let node = head;
  let counter = 0;

  while (node && node.value !== target) {
    node = node.next;
    counter++;
  }

  if (node && node.value === target) {
    return counter;
  } else {
    return -1;
  }
}
