// 22. Write a js program to right rotate an array.
let arr = [1, 2, 3, 4, 5];
let rightRotate = 2;
for (let i = 0; i < rightRotate; i++) {
  let pop = arr.pop();
  let unShift = arr.unshift(pop);
}
console.log(arr);
