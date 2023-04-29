// 5. Write a js program to find second largest element in an array.
let arr = [1, 22, 3, 45, 6, 7];
let max = Math.max(...arr);
let secondL = arr.filter((e) => e < max);
console.log(Math.max(...secondL));
