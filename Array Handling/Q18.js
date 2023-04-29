// 18. Write a js program to search an element in an array.
let arr = [1, 2, 3, 5, 6, 73, 6];

let value = 1;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    found = true;
    console.log(`Your value ${value} was found in ${arr}`);
  }
}
if (!found) {
  console.log(`${value} was not found in ${arr}`);
}
