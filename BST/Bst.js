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
  bfsIterative = () => {
    let data = [],
      queue = [],
      node = this.root;
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.lChild) queue.push(node.lChild);
      if (node.rChild) queue.push(node.rChild);
    }

    return data;
  };
  DFSPreOrder = () => {
    var data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.lChild) traverse(node.lChild);
      if (node.rChild) traverse(node.rChild);
    };
    traverse(this.root);
    return data;
  };

  DFSPostOrder = () => {
    var data = [];
    const traverse = (node) => {
      if (node.lChild) traverse(node.lChild);
      if (node.rChild) traverse(node.rChild);
      data.push(node.value);
    };
    traverse(this.root);
    return data;
  };
  DFSInOrder = () => {
    var data = [];
    const traverse = (node) => {
      if (node.lChild) traverse(node.lChild);
      data.push(node.value);
      if (node.rChild) traverse(node.rChild);
    };
    traverse(this.root);
    return data;
  };
}

const tree = new BST(10);

tree.pushRecursive(6, tree.root);
tree.pushRecursive(3, tree.root);
tree.pushRecursive(8, tree.root);
tree.pushRecursive(15, tree.root);
tree.pushRecursive(20, tree.root);

console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
