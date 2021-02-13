const getDigit = (num, pos) => {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
};

const digitCount = (num) => {
  let i = 1;
  while (num % 10 !== num) {
    num = Math.floor(num / 10);
    i++;
  }
  return i;
};

const mostDigits = (arr) => {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
};

const radixSort = (arr) => {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      digitBuckets[getDigit(arr[i], k)].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

console.log(radixSort([234, 453, 12, 23, 23453]));
