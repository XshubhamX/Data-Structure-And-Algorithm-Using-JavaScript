const first = {};
const second = {};

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    first[str1[i]] = (first[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    second[str1[i]] = (second[str1[i]] || 0) + 1;
  }

  for (let keys in first) {
    if (first[keys] !== second[keys]) {
      return false;
    }

    return true;
    
  }
};

console.log(anagram("abac", "abca"));
