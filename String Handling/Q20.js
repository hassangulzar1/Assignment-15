// 20. Write a js program to count frequency of each character in a string.
let string = "Hello world!";

let freq = {};
for (let i = 0; i < string.length; i++) {
  let char = string[i];
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}

for (const char in freq) {
  console.log(`Char: ${char} Their frequencies: ${freq[char]}`);
}
