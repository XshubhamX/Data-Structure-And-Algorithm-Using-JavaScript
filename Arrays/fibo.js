const fibo = (num) => {
  let a = 1,
    b = 1,
    i = 3,
    sum = a + b,
    sumprev = b;

  while (i < num) {
    let temp = sum;
    sum = sum + sumprev;

    sumprev = temp;
    i++;
  }

  console.log(sum);

  return 0;
};

fibo(100000);
