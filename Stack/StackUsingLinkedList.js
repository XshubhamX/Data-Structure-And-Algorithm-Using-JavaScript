class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Stack {
  constructor(maxHeight = 5) {
    this.max = maxHeight;
    this.tail = null;
    this.head = null;
    this.height = 0;
  }

  get = () => {
    if (this.height === 0) {
      return "No Element In Stack";
    }
    let s = "",
      start = this.head;
    while (start !== null) {
      s = s + start.value;
      start = start.next;
    }
    return s;
  };

  push = (value) => {
    if (this.height >= this.max) {
      return "Stack Overflow";
    }

    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.height++;
    return this.get();
  };
  pop = () => {
    if (this.height === 0) {
      return "Stack Underflow";
    }
    let popValue = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let start = this.head;

      while (start.next !== this.tail) {
        start = start.next;
      }

      this.tail = start;
    }
    this.height--;
    return popValue;
  };
}

const stack = new Stack(3);

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(3));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
