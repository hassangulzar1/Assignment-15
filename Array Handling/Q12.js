// 12. Write a js program to print all unique elements in the array
let arr = [1, 2, 34, 5, 6, 7, 2];
let counts = {};
for (let i = 0; i < arr.length; i++) {
  let char = arr[i];
  if (counts[char]) {
    counts[char]++;
  } else {
    counts[char] = 1;
  }
}

for (const e in counts) {
  if (counts[e] === 1) {
    console.log(`Unique Elemets: ${e}`);
  }
}
