const numIdenticalPairs = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }

  let goodPairs = 0;

  for (let i in obj) {
    goodPairs = goodPairs + ((obj[i] - 1) * obj[i]) / 2;
  }

  return goodPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
