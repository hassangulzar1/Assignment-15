// 27. Write a js program to replace all occurrences of a character with another in a string.
let string = "Hassan";
let char = "a";
let allOccurrences = (str, char) => {
  let replace = str.replaceAll(char, "b");
  return replace;
};
console.log(allOccurrences(string, char));
