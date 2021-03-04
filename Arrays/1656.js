class OrderedStream {
  constructor(n) {
    this.pointer = 0;
    this.list = Array.from({ length: n });
  }

  insert(id, value) {
    let chunk = [];
    this.list[id - 1] = value;
    while (this.list[this.pointer]) {
      chunk.push(this.list[this.pointer]);
      this.pointer++;
    }
    return chunk;
  }
}

const o = new OrderedStream();
console.log(o.insert(4, "cccc"));
console.log(o.insert(5, "cccc"));
