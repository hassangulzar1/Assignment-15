// 12. Write a js program to check whether a string is palindrome or not.
let string = "level";
function palindrome(str) {
  let reverse = str.split("").reverse().join("");
  if (str == reverse) {
    return `${str} is palindrome`;
  }
  return `${str} is Not palindrome`;
}
console.log(palindrome(string));
