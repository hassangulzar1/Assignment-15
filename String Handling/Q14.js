// 14. Write a js program to find first occurrence of a character in a given string.
let string = "Hassan";
let char = "b";
let firstIndex = string.indexOf(char);
if (firstIndex !== -1) {
  console.log(`The occurence of ${char} in ${string} is ${firstIndex}`);
} else {
  console.log(`The occurence of ${char} in ${string} is not found`);
}
