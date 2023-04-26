// 19. Write a js program to find lowest frequency character in a string.
let string = "Hello world!";

let lowestFrequency = (str) => {
  let freq = {};
  let lowFreq = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }

    if (freq[char] < lowFreq) {
      lowFreq = freq[char];
      maxChar = char;
    }
  }
  return maxChar;
};

console.log(lowestFrequency(string));
