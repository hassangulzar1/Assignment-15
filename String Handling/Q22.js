// 22. Write a js program to remove last occurrence of a character from string.
let string = "Hsasan";
let char = "a";
let removeLast = (str, char) => {
  let findIndex = str.lastIndexOf(char);
  let slice = str.slice(0, findIndex) + str.slice(findIndex + 1);
  console.log(slice);
};
console.log(removeLast(string, char));
