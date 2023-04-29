// 20. Write a js program to sort even and odd elements of array separately.
let arr = [24, 435, 2, 4, 6, 3, 6, 3, 6, 1];
let even = [];
let Odd = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    Odd.push(arr[i]);
  }
}

even.sort((a, b) => a - b);
Odd.sort((a, b) => a - b);
let freshArr = even.concat(Odd);
console.log(freshArr);
