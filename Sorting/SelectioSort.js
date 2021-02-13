const swap = (arr, num1, num2) => {
  let k = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = k;
};

const SelectionSort = (arr) => {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }

  return arr;
};

let a = [5, 4, 3, 2, 1];

console.log(SelectionSort(a));
