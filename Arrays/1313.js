const decompressRLElist = (nums) => {
  // let obj = {},
  let arr = [];
  for (let i = 1; i < nums.length; i += 2) {
    // obj[nums[i]] = nums[i - 1];
    arr = arr.concat(Array(nums[i - 1]).fill(nums[i]));
  }
  return arr;
};

console.log(decompressRLElist([6, 2, 7, 1]));
