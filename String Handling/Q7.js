// 7. Write a js program to toggle case of each character of a string.
let str = "Hello World";

function toggleCase(txt) {
  let result = "";
  for (let i = 0; i < txt.length; i++) {
    let char = txt[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(toggleCase(str));
