// 15. Write a js program to find last occurrence of a character in a given string.
let string = "Hassan";
let char = "s";
let lastCharacter = string.lastIndexOf(char);
if (lastCharacter !== -1) {
  console.log(`The occurence of ${char} in ${string} is ${lastCharacter}`);
} else {
  console.log(`The occurence of ${char} in ${string} is not found`);
}
