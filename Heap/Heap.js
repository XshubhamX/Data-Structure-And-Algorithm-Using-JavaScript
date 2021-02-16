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

  swap = (i, j) => {
    let temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  };

  removeMax = () => {
    let idx = 0,
      i = 0;
    const popped = this.values.pop();
    this.values[0] = popped;
    let lChild, rChild;
    let length = this.values.length;
    let swap = null;
    while (true) {
      swap = null;
      i = 2 * idx;
      lChild = this.values[i + 1];
      rChild = this.values[i + 2];

      if (i + 1 < length) {
        if (lChild > rChild) {
          this.swap(idx, i + 1);
          swap = 1;
          idx = i + 1;
        } else if (rChild > lChild) {
          this.swap(idx, i + 2);
          swap = 1;
          idx = i + 2;
        }
      }
      if (!swap) {
        break;
      }
    }
    return this.values;
  };
}

const maxheap = new MaxHeap([41, 39, 33, 18, 27, 12]);

console.log(maxheap.removeMax());
