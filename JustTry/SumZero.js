const findZero = (arr) => {
  let start = 0,
    end = 0,
    reqArr = [];
  end = arr.length - 1;

  while (end !== start) {
    if (arr[end] + arr[start] === 0) {
      reqArr.push(arr[end]);
      reqArr.push(arr[start]);
      end--;
      start++;
    } else if (arr[end] + arr[start] > 0) {
      end--;
    } else {
      start++;
    }
  }

  return reqArr;
};

console.log(findZero([-1, 0, 1]));
