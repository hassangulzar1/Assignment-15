// 9. Write a js program to count total number of vowels and consonants in a string.
let string = "HassanGulzar";
function vowelsConsonants(txt) {
  let vowels = txt.match(/[aeiou]/gi).join("").length;
  let consonant = txt.length - vowels;
  return `Total vowels is ${vowels} and consonant is ${consonant}`;
}

console.log(vowelsConsonants(string));
