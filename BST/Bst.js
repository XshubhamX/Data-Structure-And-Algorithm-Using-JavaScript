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

  pushIterative = (value) => {
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

  pushRecursive = (value, node) => {
    if (node.value > value) {
      if (node.lChild === null) {
        const newNode = new Node(value);
        node.lChild = newNode;
        return newNode;
      }
      node = this.pushRecursive(value, node.lChild);
    }
    if (node.value < value) {
      if (node.rChild === null) {
        const newNode = new Node(value);
        node.rChild = newNode;
        return newNode;
      }
      node = this.pushRecursive(value, node.rChild);
    }
    return node;
  };

  findIterative = (value) => {
    let start = this.root;
    while (start) {
      if (start.value === value) {
        return start;
      } else if (start.value > value) {
        start = start.lChild;
      } else {
        start = start.rChild;
      }
    }
    return "Node Not Found";
  };

  findRecursive = (value, node) => {
    if (node === null) {
      return "Node Not Found";
    } else if (node.value === value) {
      return node;
    } else if (node.value > value) {
      node = this.findRecursive(value, node.lChild);
    } else {
      node = this.findRecursive(value, node.rChild);
    }
    return node;
  };
}

const tree = new BST(10);

tree.pushRecursive(8, tree.root);
tree.pushRecursive(7, tree.root);
tree.pushRecursive(7.5, tree.root);
tree.pushRecursive(6, tree.root);

console.log(tree.findRecursive(8, tree.root));

console.log(tree.root.lChild);
