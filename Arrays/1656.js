class OrderedStream {
  constructor(n) {
    this.n = n;
    this.stream = new Array(n);
    this.helper = new Array(n).fill(0);
  }

  insert = ([idKey, value]) => {
    if (idKey >= this.n) {
      return null;
    }
    let i = 0,
      j = 0,
      returnList = [];
    this.stream[idKey] = [idKey, value];
    if (idKey === 0) {
      while (this.helper[i] === 0 && this.stream[i] !== undefined) {
        this.helper[i] = 1;
        returnList.push(this.stream[i]);
        i++;
      }
      return returnList;
    } else if (idKey === this.n - 1) {
      i = idKey;
      while (this.helper[i] === 0 && this.stream[i] !== undefined) {
        i--;
        this.helper[i] = 1;
      }
      if (i === idKey) {
        return null;
      }
      for (i; i <= idKey; i++) {
        returnList.push(this.stream[i]);
        return returnList;
      }
    } else {
      i = idKey;
      while (this.helper[i] === 0 && this.stream[i] !== undefined) {
        i--;
        this.helper[i] = 1;
      }
      j = idKey;
      while (this.helper[i] === 0 && this.stream[i] !== undefined) {
        helper[i] = 1;
        i++;
      }
      if ((i = j)) {
        return null;
      }
      for (i; i <= j; i++) {
        returnList.push(this.this.stream[i]);
      }
      return returnList;
    }
  };
}

const os = new OrderedStream(5);

console.log(os.insert([2, "ada"]));
console.log(os.insert([1, "ada"]));
