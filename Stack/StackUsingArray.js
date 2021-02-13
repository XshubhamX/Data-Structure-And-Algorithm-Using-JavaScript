class Stack {
  constructor(maxHeight = 5) {
    this.a = new Array();
    this.max = maxHeight;
    this.top = -1;
    this.height = 0;
  }

  get = () => {
    if (this.height === 0) {
      return "No Element In Stack";
    }
    let s = "";
    for (let i = 0; i < this.height; i++) {
      s = s + this.a[i];
    }
    console.log(s);
  };

  push = (value) => {
    if (this.height > this.max) {
      return "Stack Overflow";
    }

    this.top++;
    this.a[this.top] = value;
    this.height++;

    return this.get();
  };
  pop = () => {
    if (this.height === 0) {
      return "Stack Underflow";
    }
    let popValue = this.a[this.top];
    this.top--;
    this.height--;

    return popValue;
  };
}

const stack = new Stack(6);

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
