// 23. Write a js program to remove all occurrences of a character from string.
let string = "Hasssannn";
let char = "s";
let removeAllO = (str, char) => {
  let removeAll = str.replaceAll(char, "");
  return removeAll;
};
console.log(removeAllO(string, char));
