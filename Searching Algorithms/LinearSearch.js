const LinearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
};

console.log(LinearSearch([1, 2, 3, 4, 3, 5, 6], 3));
