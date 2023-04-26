// 16. Write a js program to search all occurrences of a character in given string.
let string = "Hassan";
let char = "a";
let allOccurrences = (str, char) => {
  let occurrence = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      occurrence.push(i + 1);
    }
  }
  return `character ${char} occurrence in string: ${occurrence.join("-")}`;
};
console.log(allOccurrences(string, char));
