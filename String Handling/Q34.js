// 34. Write a js program to remove all occurrence of a word in given string.
let string = "my name is Hassan my hobby is coding";
let word = "is";
let removeFirst = (str, w) => {
  let split = str.split(" ");
  for (let i = 0; i < split.length; i++) {
    if (split[i] == w) {
      delete split[i];
    }
  }
  return split.join(" ");
};
console.log(removeFirst(string, word));
