// 14. Write a js program to delete all duplicate elements from an array.
let arr = [1, 2, 3, 3, 4];
let duplicate = {};
for (let i = 0; i < arr.length; i++) {
  let char = arr[i];
  if (duplicate[char]) {
    duplicate[char]++;
  } else {
    duplicate[char] = 1;
  }
}

let newArr = [];
for (const e in duplicate) {
  if (duplicate[e] === 1) {
    newArr.push(e);
  }
}
console.log(newArr.map((e) => parseInt(e)));
