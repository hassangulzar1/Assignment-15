// 31. Write a js program to count occurrences of a word in a given string
let string = "my name is hassan my hobby is coding my";
let word = "my";
let countOccurrences = (str, w) => {
  let split = str.split(" ");
  let count = 0;
  for (let i = 0; i < split.length; i++) {
    if (split[i] === w) {
      count++;
    }
  }
  return `Occurrence of '${w}' in 
  '${string}'
   are ${count} Times`;
};
console.log(countOccurrences(string, word));
