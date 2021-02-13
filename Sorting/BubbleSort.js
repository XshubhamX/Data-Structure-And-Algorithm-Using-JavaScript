const swap = (arr, num1, num2) => {
  let k = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = k;
};

const BubbleSort = (arr) => {
  let noSwap = true;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > a[j + 1]) {
        console.log(j, j + 1);
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
  return arr;
};

let a = [5, 4, 3, 2, 1];

console.log(BubbleSort(a));
