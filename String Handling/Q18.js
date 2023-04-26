// 18. Write a js program to find highest frequency character in a string.
let string = "Hello world!";

let higestFrequency = (str) => {
  let freq = {};
  let maxFrequency = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }

    if (freq[char] > maxFrequency) {
      maxFrequency = freq[char];
      maxChar = char;
    }
  }
  return maxChar;
};

console.log(higestFrequency(string));
