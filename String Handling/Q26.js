// 26. Write a js program to replace last occurrence of a character with another in a string.
let string = "Hassan";
let char = "a";
let newChar = "b";
let lastCharacter = (str, char, newchar) => {
  let lastIndex = str.lastIndexOf(char);
  return str.slice(0, lastIndex) + newChar + str.slice(lastIndex + 1);
};
console.log(lastCharacter(string, char));
