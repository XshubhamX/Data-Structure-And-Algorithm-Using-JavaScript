class MaxHeap {
  constructor(values) {
    this.values = values;
  }

  insert = (x) => {
    this.values.push(x);
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let temp = this.values[Math.floor(idx / 2)];
      if (temp >= element) {
        break;
      }

      this.values[Math.floor(idx / 2)] = element;
      this.values[idx] = temp;

      idx = Math.floor(idx / 2);
    }
    return this.values;
  };
}

const maxheap = new MaxHeap([41, 39, 33, 18, 27, 12, 55]);

console.log(maxheap.insert(55));
