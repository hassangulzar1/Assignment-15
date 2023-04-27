// 19. Write a js program to find lowest frequency character in a string.
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

let lowestFreqChar = null;
let lowestFreq = string.length + 1;

for (const char in freq) {
  if (freq[char] < lowestFreq) {
    lowestFreqChar = char;
    lowestFreq = freq[char];
  }
}

console.log(`lowestFreq Character is: ${lowestFreqChar}`);
