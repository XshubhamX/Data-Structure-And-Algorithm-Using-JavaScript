const fact = (num) => {
  let i = num - 1;
  while (i !== 0) {
    num = num * i;
    i--;
  }
  return num;
};

console.log(fact(5));
