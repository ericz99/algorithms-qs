var removeDups = head => {
  let cur = head;

  if (head == null) {
    return null;
  }

  while (cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  cur = head;

  return cur;
};

// 5 => 8 => 2 => 7 => 5 => 9 => 2 => 6 => 4

// ^                   ^

// 5 => 8 => 2 => 7 => 9 => 6 => 4
