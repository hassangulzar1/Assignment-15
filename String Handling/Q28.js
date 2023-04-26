// 28. Write a js program to find first occurrence of a word in a given string.
let string = "my name is word my is word";
let words = "my";
let findWord = (str, w) => {
  let convertTowords = str.split(" ");
  let findWord = convertTowords.indexOf(w);
  return `First Occurrence of "${w}" in index:${findWord + 1}`;
};
console.log(findWord(string, words));
