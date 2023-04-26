// 29. Write a js program to find last occurrence of a word in a given string.
let string = "my name is word my is word";
let word = "is";
let findLast = (str, w) => {
  let convertTowords = str.split(" ");
  let findWord = convertTowords.lastIndexOf(w);
  return `First Occurrence of "${w}" in index:${findWord + 1}`;
};
console.log(findLast(string, word));
