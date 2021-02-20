const hash = (str, range) => {
  let total = 0;
  for (let char of str) {
    let value = char.charCodeAt(0) - 96;
    total = total + value;
  }
  return total % (range + 1);
};

console.log(hash("y", 10));
