var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * getOccurrenceCount(i, arr.length);
  }
  console.log(sum);
};

function getOccurrenceCount(index, arrayLength) {
  return Math.ceil(((index + 1) * (arrayLength - index)) / 2);
}

sumOddLengthSubarrays([1, 4, 2, 5, 3]);
