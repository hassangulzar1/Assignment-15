// 32. Write a js program to remove first occurrence of a word from string
let string = "my name is Hassan my";
let word = "my";
let removeFirst = (str, w) => {
  let index = str.indexOf(w);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + w.length);
};
console.log(removeFirst(string, word));
