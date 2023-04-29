// 16. Write a js program to find reverse of an array.
let arr = ["a", "b", "c", "d", "e", "f"];
let reverse = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}
console.log(reverse);
