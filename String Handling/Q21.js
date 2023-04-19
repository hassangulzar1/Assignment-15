// 21. Write a js program to remove first occurrence of a character from string.
let string = "Hsasan";
let char = "s";
let removeFirst = (str, char) => {
  let remove = str.replace(char, "");
  console.log(remove);
};
console.log(removeFirst(string, char));
