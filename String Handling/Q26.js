// 26. Write a js program to replace last occurrence of a character with another in a string.
let string = "Hassan";
let char = "s";
let lastCharacter = (str, char) => {
  let findLast = str.lastIndexOf(char);
  let replaceLast = str.slice(0, findLast) + str.slice(findLast + 1);
};
console.log(lastCharacter(string, char));
