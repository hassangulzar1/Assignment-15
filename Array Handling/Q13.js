// 13. Write a js program to count total number of duplicate elements in an array
let arr = [1, 2, 3, 3, 4, 4, 5, 5];
let freq = {};
for (let i = 0; i < arr.length; i++) {
  let char = arr[i];
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}
let newArr = [];
for (const e in freq) {
  if (freq[e] >= 2) {
    newArr.push(freq[e]);
  }
}
console.log(`duplicate Elements In array is: ${newArr.length}`);
