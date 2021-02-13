const allOdd = (arr) => {
  let x;

  if (arr.length === 0) {
    return "";
  }
  x = arr.pop();

  if (x % 2 !== 0) {
    return x.toString() + allOdd(arr);
  }

  return allOdd(arr);
};

console.log(allOdd([1, 2, 3, 4, 5]));
