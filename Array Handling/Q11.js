// 11. Write a js program to count frequency of each element in an array
let arr = [1, 2, 3, 45, 6, 3, 4, 2, 3];
let freq = {};
for (let i = 0; i < arr.length; i++) {
  let char = arr[i];
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}

for (const key in freq) {
  console.log(`Char: ${key} & Their Freq:${freq[key]}`);
}
