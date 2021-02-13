var createTargetArray = function (nums, index) {
  let finalArray = [];
  for (let i in index) {
    finalArray.splice(index[i], 0, nums[i]);
    console.log(finalArray);
  }
  return finalArray;
};

createTargetArray([0, 1, 2, 3, 4], (index = [0, 1, 2, 2, 1]));
