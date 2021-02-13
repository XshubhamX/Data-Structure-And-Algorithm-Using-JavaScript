class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get = () => {
    let arr = [],
      start = this.head;

    while (start !== null) {
      arr.push(start.val);
      start = start.next;
    }
    return arr;
  };

  push = (num) => {
    let newNode = new Node(num);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let preceedingNode = this.tail;
      preceedingNode.next = newNode;
      newNode.prev = preceedingNode;
      this.tail = newNode;
    }
    this.length++;
    return this.get();
  };

  pop = () => {
    if (this.length === 0) {
      return "No Element in List";
    } else if (this.length === 1) {
      var popNode = this.head.val;
      this.head = this.tail = null;
    } else {
      var popNode = this.tail.val;
      let prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    return popNode;
  };

  shift = () => {
    if (this.length === 0) {
      return "No Element in List";
    } else if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
    }
    this.length--;
    return this.get();
  };
  unShift = (value) => {
    let unshiftNode = new Node(value);
    if (this.length === 0) {
      this.head = unshiftNode;
      this.tail = this.head;
    } else {
      unshiftNode.next = this.head;
      this.head.prev = unshiftNode;
      this.head = unshiftNode;
    }
    this.length++;
    return this.get();
  };

  set = (value, idx) => {
    if (idx > this.length - 1 || idx < 0) {
      return "wrong index";
    }

    let start = this.head;

    for (let i = 0; i < idx; i++) {
      start = start.next;
    }
    start.val = value;
    return this.get();
  };

  insert = (value, idx) => {
    if (idx > this.length || idx < 0) {
      return "wrong index";
    }
    if (idx === 0) {
      return this.unShift(value);
    }
    if (idx === this.length) {
      return this.push(value);
    }
    let newNode = new Node(value);
    let start = this.head;
    for (let i = 0; i < idx; i++) {
      start = start.next;
    }
    let prevNode = start.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    start.prev = newNode;
    newNode.next = start;
    this.length++;
    return this.get();
  };

  remove = (idx) => {
    if (idx >= this.length || idx < 0) {
      return "wrong index";
    }
    if (idx === 0) {
      return this.shift();
    }
    if (idx === this.length - 1) {
      return this.pop();
    }
    let start = this.head;

    for (let i = 0; i < idx; i++) {
      start = start.next;
    }

    let prevNode = start.prev;
    let nextNode = start.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.lenght--;
    return this.get();
  };
}

const ll1 = new DoublyLinkedList();

console.log(ll1.push(10));
console.log(ll1.push(20));
console.log(ll1.push(30));
console.log(ll1.push(40));
console.log(ll1.push(50));
console.log(ll1.insert(100, 0));
console.log(ll1.remove(5));
