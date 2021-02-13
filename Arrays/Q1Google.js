const prompt = require('prompt')

prompt.get(['nums'],'target')

var twoSum = (nums, target) => {
  let req;
  for (let i = 0; i < nums.length; i++) {
    req = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (req === target) {
        return [i, j];
      }
    }
  }
  return [];
};

twoSum([1,2,3,4,5],3)
