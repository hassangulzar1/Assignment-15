// 24. Write a js program to remove all repeated characters from a given string.
let string = "Bilal";

let freq = {};
for (let i = 0; i < string.length; i++) {
  let char = string[i];
  if (freq[char]) {
    freq[char]++;
  } else {
    freq[char] = 1;
  }
}
let newStr = "";
for (const char in freq) {
  if (freq[char] === 1) {
    newStr += char;
  }
}
console.log(newStr);
