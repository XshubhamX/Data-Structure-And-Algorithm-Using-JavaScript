class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
  constructor(maxLength = 5) {
    this.start = null;
    this.tail = null;
    this.length = 0;
    this.max = maxLength;
  }

  get = () => {
    let s = "",
      head = this.start;

    while (head !== null) {
      s = s + head.value;
      head = head.next;
    }

    return s;
  };

  push = (value) => {
    if (this.length >= this.max) {
      return "Queue Full";
    }
    let newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.start;
      this.start = newNode;
    }

    this.start = newNode;
    this.length++;
    console.log(this.length, this.max);

    return this.get();
  };
  pop = () => {
    if (this.length === 0) {
      return "Queue Empty";
    }
    let popNode = this.start.value;
    if (this.length === 1) {
      this.start = null;
      this.tail = null;
    } else {
      this.start = this.start.next;
    }
    this.length--;
    return popNode;
  };
}

const queue = new Queue(5);

console.log(queue.push(1));
console.log(queue.push(1));
console.log(queue.push(1));
console.log(queue.push(1));
console.log(queue.push(1));
console.log(queue.push(1));
console.log(queue.push(1));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
