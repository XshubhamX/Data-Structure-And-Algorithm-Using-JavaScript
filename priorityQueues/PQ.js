class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class priorityQueue {
  constructor() {
    this.values = [];
  }
  insert = (val, priority) => {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let idx = this.values.length - 1;
    const nodeValue = this.values[idx].priority;
    while (true) {
      let temp = this.values[Math.floor(idx / 2)].priority;
      if (temp >= nodeValue) {
        break;
      }

      this.values[Math.floor(idx / 2)].priority = nodeValue;
      this.values[idx].priority = temp;

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
        if (lChild.priority > rChild.priority) {
          this.swap(idx, i + 1);
          swap = 1;
          idx = i + 1;
        } else if (rChild.priority > lChild.priority) {
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

const pq = new priorityQueue();
console.log(pq.insert("play", 41));
console.log(pq.insert("play", 39));
console.log(pq.insert("play", 33));
console.log(pq.insert("play", 18));
console.log(pq.insert("play", 27));
console.log(pq.insert("play", 12));
console.log(pq.removeMax());
