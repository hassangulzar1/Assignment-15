// 25. Write a js program to replace first occurrence of a character with another in a string.
let string = "Hassan";
let char = "s";
let changeFirst = (str, char) => {
  let replace = str.replace(char, "a");
  return replace;
};
console.log(changeFirst(string, char));
