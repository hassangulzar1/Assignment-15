// 17. Write a js program to put even and odd elements of array in two separate array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = [];
let oddArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]);
  } else {
    oddArr.push(arr[i]);
  }
}
console.log(` Even Array: ${evenArr} Odd Array: ${oddArr}`);
