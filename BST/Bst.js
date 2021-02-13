class Node {
  constructor(value) {
    this.value = value;
    this.lChild = null;
    this.rChild = null;
  }
}

class BST {
  constructor(value) {
    let newNode = new Node(value);
    this.root = newNode;
  }

  pushIterative= (value) => {
    const newNode = new Node(value);
    let start = this.root;
    while (true) {
      if (newNode.value > start.value) {
        if (start.rChild === null) {
          start.rChild = newNode;
          break;
        }
        start = start.rChild;
      } else {
        if (start.lChild === null) {
          start.lChild = newNode;
          break;
        }
        start = start.lChild;
      }
    }
    return this;
  };
}

const tree = new BST(10);

tree.pushIterative(11);
tree.pushIterative(10.5);

console.log(tree);
