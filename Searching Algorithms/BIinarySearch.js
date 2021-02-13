const BinarySearch = (arr, low, high, key) => {
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] > key) {
    return BinarySearch(arr, low, mid, key);
  }

  return BinarySearch(arr, mid, high, key);
};

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, 4));
