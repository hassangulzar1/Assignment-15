// 30. Write a js program to search all occurrences of a word in given string.
let stringOfWords =
  "my name is Hassan my hobby is coding my favorite lenguage is javascript";
let word = "my";
let findAll = (str, w) => {
  let allOccurrences = [];
  let convertTowords = str.split(" ");
  for (let i = 0; i < convertTowords.length; i++) {
    if (convertTowords[i] === w) {
      allOccurrences.push(i + 1);
    }
  }
  return `Occurrences of '${w}' is ${allOccurrences.join("-")}`;
};
console.log(findAll(stringOfWords, word));
