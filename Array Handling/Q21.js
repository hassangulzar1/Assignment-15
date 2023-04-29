// 21. Write a js program to left rotate an array.
let arr = [1, 2, 3, 4, 5];
let rotate = 1;

for (let i = 0; i < rotate; i++) {
  let elemet = arr.shift();
  let push = arr.push(elemet);
}

console.log(arr);
