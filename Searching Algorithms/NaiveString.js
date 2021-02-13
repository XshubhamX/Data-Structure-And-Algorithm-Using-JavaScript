const NaiveString = (str, sub) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) {
        break;
      }
      if (j === sub.length - 1) {
        return 1;
      }
    }
  }
  return 0;
};

console.log(NaiveString("shubham", "hub"));
