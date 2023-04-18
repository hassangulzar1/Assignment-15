// 13. Write a js program to reverse order of words in a given string
let string = "Hassan gulzar";
function reverse(str) {
  let reverse = str.split("").reverse().join("");
  return reverse;
}
console.log(reverse(string));
