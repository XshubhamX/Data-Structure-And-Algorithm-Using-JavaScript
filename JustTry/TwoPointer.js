const first = {};

const anagram = (arr) => {
  let count = 0;

  if (arr.length == 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    first[arr[i]] = (first[arr[i]] || 0) + 1;
  }

  for (let keys in first) {
    count++;
  }

  return count;
};

console.log(anagram([1, 1, 1, 1, 2, 2, 3, 3, 4, 3, 3, 3]));
