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
}

const pq = new priorityQueue();
console.log(pq.insert("play", 41));
console.log(pq.insert("play", 39));
console.log(pq.insert("play", 33));
console.log(pq.insert("play", 18));
console.log(pq.insert("play", 27));
console.log(pq.insert("play", 12));
