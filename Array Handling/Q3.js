// 3. Write a js program to find sum of all array elements.
let arr = [1, 2, 3, 45, 6];
let result = arr.reduce(
  (accumulator, initialvalue) => accumulator + initialvalue,
  0
);
console.log(result);
