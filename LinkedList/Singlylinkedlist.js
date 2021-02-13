class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push = (value) => {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };
  pop = () => {
    let start = this.head;
    if (this.length === 0) {
      return "No Element Left";
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      let newTail = null;
      while (start.next) {
        newTail = start;
        start = start.next;
      }
      this.tail = newTail;
      newTail.next = null;
    }
    this.length--;
    return start.val;
  };
  shift = () => {
    if (this.length === 0) {
      return "No Element in List";
    }
    if (this.length == 1) {
      let onlyNode = this.head.val;
      this.head = null;
      this.tail = null;
      return onlyNode.val;
    }

    let newHead = this.head.next;
    this.length--;
    this.head = newHead;
    return this.head.val;
  };
  unShift = (val) => {
    if (this.length === 0) {
      return "First Start adding element in list";
    } else {
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this.head.val;
    }
  };

  get = () => {
    if (this.length === 0) {
      return "No Item in List Start Adding by push() method";
    }
    let arr = [];
    let start = this.head;
    while (start !== null) {
      arr.push(start.val);
      start = start.next;
    }
    return arr;
  };

  getLength = () => {
    return this.length;
  };

  getByIndex = (idx) => {
    let start = this.head;
    if (idx > this.length - 1) {
      return false;
    }
    for (let i = 0; i < idx; i++) {
      start = start.next;
    }
    return start;
  };

  set = (value, idx) => {
    let foundNode = this.getByIndex(idx);
    if (foundNode) {
      foundNode.val = value;
      return this.get();
    } else {
      return "False Index value";
    }
  };

  insert = (value, idx) => {
    if (idx > this.length - 1) {
      return "False Index Passed";
    }
    let start = null;
    for (let i = 0; i < idx; i++) {
      if (!start) {
        start = this.head;
      } else {
        start = start.next;
      }
    }
    if (start === null) {
      this.unShift(value);
    } else {
      let newNode = new Node(value);
      newNode.next = start.next;
      start.next = newNode;
    }
    return this.get();
  };

  remove = (idx) => {
    if (idx > this.length - 1) {
      return "False Index Passed";
    }
    let toBeDeletedNode = this.head;
    let preNode = null;

    for (let i = 0; i < idx; i++) {
      preNode = toBeDeletedNode;
      toBeDeletedNode = toBeDeletedNode.next;
    }

    if (toBeDeletedNode === this.head) {
      this.shift();
    } else {
      preNode.next = toBeDeletedNode.next;
      this.length--;
    }
    return this.get();
  };

  reverse = () => {
    if (this.length === 0) {
      return "Noelement in list start adding elements by push operation";
    }
    let prev = null;
    let curr = this.head;
    let post = null;
    while (curr !== null) {
      post = curr.next;
      if (curr === this.head) {
        curr.next = null;
        this.tail = curr;
      } else {
        curr.next = prev;
      }
      prev = curr;
      if (post) {
        curr = post;
      } else {
        break;
      }
    }
    this.head = curr;
    return this.get();
  };
}

const ll1 = new SinglyLinkedList();

ll1.push(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
ll1.push(5);

console.log(ll1.get());
console.log(ll1.reverse());
