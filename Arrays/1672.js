const countWealth = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const maximumWealth = (accounts) => {
  let a = [],
    max = -1,
    len = accounts.length;
  for (let i = 0; i < len; i++) {
    a.push(countWealth(accounts[i]));
  }
  for (let i = 0; i < len; i++) {
    max = Math.max(max, a[i]);
  }
  return max;
};

console.log(
  maximumWealth([
    [1, 2, 3, 4],
    [2, 3, 4, 4],
  ])
);
