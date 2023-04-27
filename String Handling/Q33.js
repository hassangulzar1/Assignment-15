// 33. Write a js program to remove last occurrence of a word in given string
let string = "my name is Hassan my";
let word = "my";
let removeFirst = (str, w) => {
  let index = str.lastIndexOf(w);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + w.length);
};
console.log(removeFirst(string, word));
