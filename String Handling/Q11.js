// 11. Write a js program to find reverse of a string.
let string = "Hassan";
function reverse(str) {
  let reverse = str.split("").reverse().join("");
  return reverse;
}
console.log(reverse(string));
