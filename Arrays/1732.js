const largestAltitude = (gains) => {
  let max = 0;
  for (let i = 0; i < gains.length; i++) {
    if (i > 0) {
      gains[i] = gains[i] + gains[i - 1];
    }
    if (gains[i] > max) {
      max = gains[i];
    }
  }
  return max;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
