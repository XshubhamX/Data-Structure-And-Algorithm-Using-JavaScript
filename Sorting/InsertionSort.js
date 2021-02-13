const swap = (arr, num1, num2) => {
  let k = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = k;
};

const InsertionSort = (arr) => {
  let curr;
  for (let i = 1; i < arr.length; i++) {
    curr = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[curr] > arr[j]) {
        b;
      }
      if (arr[curr] < arr[j]) {
        swap(arr, curr, j);
        curr = j;
      }
    }
  }

  return arr;
};

const a = [5, 4, 3, 2, 1];

console.log(InsertionSort(a));
uheiuhbfiuhbos;
