const countMatches = (items, ruleKeys, ruleValue) => {
  const indexTypes = {
    type: 0,
    color: 1,
    name: 2,
  };
  let j = 0,
    i = 0;
  for (i = 0; i < items.length; i++) {
    if (items[i][indexTypes[ruleKeys]] === ruleValue) {
      j++;
    }
  }
  return j;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "type",
    "phone"
  )
);
