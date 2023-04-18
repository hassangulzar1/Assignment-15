// 7. Write a js program to toggle case of each character of a string.
let str = "Hello World";

function toggleCase(txt) {
  let upperCase =
    str.match(/[A-Z]/g).join("").toLowerCase() &&
    str.match(/[a-z]/g).join("").toUpperCase();
  console.log(upperCase);
}

toggleCase(str);
