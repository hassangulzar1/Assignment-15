// 17. Write a js program to count occurrences of a character in given string.
let string = "My name is Hassan i am bscs student.";
let coundOccurrences = (str, chr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === chr) {
      count++;
    }
  }
  return count;
};
console.log(coundOccurrences(string, "s"));
